import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramServices } from '../services/program.services';
import { ProgramData } from '../data/program-data';
import { ProgramScheduleService } from '../services/schedule.services';
import { SchedulerEvent, SchedulerModelFields, EventStyleArgs } from '@progress/kendo-angular-scheduler';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProgramScheduleData } from '../data/program-schedule-data';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ModalDialogComponent } from '../components/modal-dialog/modal-dialog.component';
import { AuthenticationService } from '../authentication.service';

@Component({
    templateUrl: './program-schedule.component.html',
    styleUrls: ['./program-schedule.component.css']
})

export class ProgramScheduleComponent implements OnInit{
    ProgramPK: number;
    ProgramType: number;
    programDetails: ProgramData;
    public selectedDate: Date = new Date();
    customerSelectDate: string;
    customerSelectTime: string;
    tempDate: Date;
    options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      };
    public allEvents: SchedulerEvent[];
    quantityForm: FormGroup;
    currTotalQuantity = 0;
    availability: number;
    submitted = false;
    scheduleItem:any = { 
        SchedulePK: 0,
        ProgramPK: 0,
        Start: "",
        End: ""
    };

    //Define Schedule Module for Kendo schedule
    public eventFields: SchedulerModelFields = {
        id: "CreatedBy", //point id to dummy to avoid bug 
        title: 'Title',
        description: 'Description',
        startTimezone: 'StartTimezone',
        start: 'Start',
        end: 'End',
        endTimezone: 'EndTimezone',
        isAllDay: 'IsAllDay',
        recurrenceRule: 'RecurrenceRule',
        recurrenceId: 'RecurrenceID',
        recurrenceExceptions : 'RecurrenceException'
    };

    constructor(private route: ActivatedRoute,
        private service: ProgramServices,
        private programScheduleServices: ProgramScheduleService,
        private fb: FormBuilder,
        public matDialog: MatDialog,
        private auth: AuthenticationService,
        private router: Router
        ){}

    ngOnInit(){
        this.route.params.subscribe(val => {
            this.ProgramPK = val.id
        })

        this.service.getProgramHeaderDeatailsByID(this.ProgramPK).subscribe(details => {
            this.programDetails = details;
            this.ProgramType = details.ProgramType;
            document.getElementById("program_name").innerHTML = this.programDetails.Name;
            document.getElementById("program_desc").innerHTML = this.programDetails.Description;
        })

        //Define and create to get schedule by ProgramPk
        const currentYear = new Date().getFullYear();
        const parseAdjust = (eventDate: string): Date => {
            const date = new Date(eventDate);
            date.setFullYear(currentYear);
            return date;
        };

        this.programScheduleServices.getScheduleSettingById(this.ProgramPK).subscribe((schedules) =>{            
            const sampleDataWithCustomSchema = schedules.map(dataItem => (                                
                {
                    ...dataItem,
                    ScheduleSettingPK: dataItem.ScheduleSettingPK,
                    ProgramPK: dataItem.ProgramPK,
                    Title: dataItem.Title,
                    Description: dataItem.Description,
                    StartTimezone: dataItem.StartTimezone,
                    Start: parseAdjust(dataItem.Start),
                    End: parseAdjust(dataItem.End),   
                    EndTimezone: dataItem.EndTimezone,
                    MaximumParticipant: this.programDetails.MaximumParticipant,
                    CurrentParticipant: 0,
                    RecurrenceRule: dataItem.RecurrenceRule,
                    RecurrenceID: dataItem.RecurrenceID,
                    RecurrenceException: dataItem.RecurrenceException,
                    CreatedBy: dataItem.CreatedBy,
                    CreatedDate: dataItem.CreatedDate,
                    IsActive: dataItem.IsActive
                }
            ));
            this.allEvents = sampleDataWithCustomSchema
        })

        this.quantityForm = this.fb.group({
            AdultQuantity: ["0", [Validators.required, Validators.min(0)]],
            Age57Quantity: ["0", [Validators.required, Validators.min(0)]],
            Age810Quantity: ["0", [Validators.required, Validators.min(0)]],
            Age1112Quantity: ["0", [Validators.required, Validators.min(0)]],
            Age1314Quantity: ["0", [Validators.required, Validators.min(0)]],
            Age1415Quantity: ["0", [Validators.required, Validators.min(0)]],
            Age1517Quantity: ["0", [Validators.required, Validators.min(0)]],
            TotalQuantity: ["0", [Validators.required, Validators.min(1)]]
        });
    }

    get f() {
        return this.quantityForm.controls;
    }

    // Clear data when click on input field
    onFocus(event) {
        if(event.target.value == 0)
        event.target.value = "";
    }

    // Restore data when lose focus on input field
    lostFocus(event) {
        if(event.target.value === 0 ||   event.target.value === "")
        {
            event.target.value = 0;
        }
        this.calculateTotalQuantity();
    }
    
    calculateTotalQuantity() {
        this.currTotalQuantity = parseInt(this.quantityForm.get('AdultQuantity').value) + parseInt(this.quantityForm.get('Age57Quantity').value) +
                                 parseInt(this.quantityForm.get('Age810Quantity').value) + parseInt(this.quantityForm.get('Age1112Quantity').value) +
                                 parseInt(this.quantityForm.get('Age1314Quantity').value) + parseInt(this.quantityForm.get('Age1415Quantity').value) +
                                 parseInt(this.quantityForm.get('Age1517Quantity').value);
        this.quantityForm.get('TotalQuantity').setValue(this.currTotalQuantity);
    }

    enterQuantity() {
        this.submitted = true;
        if (this.quantityForm.invalid) {
          console.log("invalid");
          return;
        }  
        console.log("valid");
        //Configure Modal Dialog
        const dialogConfig = new MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose =true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "500px";
        dialogConfig.width = "350px";
        dialogConfig.autoFocus = false;
        if (this.availability == null){
            dialogConfig.data = {
                title: "Warning!",
                description: "You haven't chosen any program. Please choose one program first!",            
                actionButtonText: "Try again",   
                numberOfButton: "1"
            }
        }
        else if (this.currTotalQuantity > this.availability){
            dialogConfig.data = {
                title: "Warning!",
                description: "The total quantity exceeds the availability of this program. Please try again!",            
                actionButtonText: "Try again",   
                numberOfButton: "1"
            }
        }
        else {
            dialogConfig.data = {
                title: "Confirmation",
                description: "Are you sure to book this program for " + this.currTotalQuantity + " attendees?",            
                actionButtonText: "Confirm",   
                numberOfButton: "2"
            }
        }
        
        const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
        modalDialog.afterClosed().subscribe(result =>{
            if(result == "Yes"){
                //if exceed 
                if ((this.currTotalQuantity > this.availability) || (this.availability == null)){ 
                    // if exceed, do nothing
                }
                else {
                    //route to the booking page
                    if (this.ProgramType){
                        this.router.navigateByUrl('/booking-individual-program/' + this.ProgramPK)
                    }
                    else{
                        this.router.navigateByUrl('/booking-group-program/' + this.ProgramPK)
                    }
                }
            }
            else{
                //otherwise, do nothing            
            }
        })
    }

    //This function to capture and get the info of selected event
    public eventClick = (e) => {
        var timezoneOffset = e.event.start.getTimezoneOffset()*60000
        var eventStart = (new Date(e.event.start - timezoneOffset)).toISOString().slice(0,19)        
        var eventEnd = (new Date(e.event.end - timezoneOffset)).toISOString().slice(0,19)
        var programPK = e.event.dataItem.ProgramPK

        this.programScheduleServices.getScheduleByIdStartEnd(programPK, eventStart, eventEnd).subscribe(res=>{
            if(res){
               // console.log(res)          
                this.tempDate = new Date(res.Start);
                let end = new Date(res.End);
                this.customerSelectDate = this.tempDate.toDateString();
                this.customerSelectTime = this.tempDate.toLocaleString('en-US', this.options).concat(" - ", end.toLocaleString('en-US', this.options));
                this.availability = res.MaximumParticipant - res.CurrentNumberParticipant;
            }
            else{
                //console.log(e.event)
                this.customerSelectDate = (e.event.dataItem.Start).toDateString();
                this.customerSelectTime = (e.event.dataItem.Start).toLocaleString('en-US', this.options).concat(" - ", (e.event.dataItem.End).toLocaleString('en-US', this.options));
                this.availability = e.event.dataItem.MaximumParticipant;
            }            
        })  
        
    }
}