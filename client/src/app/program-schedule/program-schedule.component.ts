import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ProgramServices } from '../services/program.services';
import { ProgramData } from '../data/program-data';
import { ProgramScheduleService } from '../services/schedule.services';
import { SchedulerEvent, SchedulerModelFields, EventStyleArgs } from '@progress/kendo-angular-scheduler';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ReservationHeaderData } from '../data/reservation-header-data';
import { QuantiyFormData } from '../data/quantity-form-data';
import { ProgramScheduleData } from '../data/program-schedule-data';
import { AuthenticationService} from '../authentication.service';

@Component({
    templateUrl: './program-schedule.component.html',
    styleUrls: ['./program-schedule.component.css']
})

export class ProgramScheduleComponent implements OnInit{
    ProgramPK: number;
    ProgramType: number;
    isDisable = true;
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
    quantityData : QuantiyFormData;
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
    totalQuantity: number;

    currentSession: ProgramScheduleData = {
        SchedulePK: 0,
        ProgramPK: 0,
        Start: '',
        End: '',
        MaximumParticipant: 0,
        CurrentNumberParticipant: 0,        
        CreatedBy: 0,
        IsActive: true
    }

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
                private auth: AuthenticationService,
                private service: ProgramServices,
                private programScheduleServices: ProgramScheduleService,
                private fb: FormBuilder,
                private router: Router ){}

    ngOnInit(){

        this.currentSession.CreatedBy
      
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

        this.programScheduleServices.getScheduleOverviewById(this.ProgramPK).subscribe((schedules) =>{            
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
            AdultQuantity: [{value: '0', disabled: true}, [Validators.required, Validators.min(0)]],
            Age57Quantity: [{value: '0', disabled: true}, [Validators.required, Validators.min(0)]],
            Age810Quantity: [{value: '0', disabled: true}, [Validators.required, Validators.min(0)]],
            Age1112Quantity: [{value: '0', disabled: true}, [Validators.required, Validators.min(0)]],
            Age1314Quantity: [{value: '0', disabled: true}, [Validators.required, Validators.min(0)]],
            Age1415Quantity: [{value: '0', disabled: true}, [Validators.required, Validators.min(0)]],
            Age1517Quantity: [{value: '0', disabled: true}, [Validators.required, Validators.min(0)]],
            TotalQuantity: [{value: '0', disabled: true}, [Validators.required, Validators.min(1)]]
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

        this.router.navigateByUrl('/booking-group-program/' + this.ProgramPK)
        // Create a schedule record in MySQL then return the schedule ID
        // navigate to booking-group or booking-individual
        // //Re-initialize currentSession before send to back-end
        // this.currentSession.ProgramPK = this.ProgramPK                
        // this.currentSession.MaximumParticipant = this.programData.MaximumParticipant
        // //Loop through all day from StartDate to EndDate, if the day is selected to repeat 
        // // AND if that day is not a Blackout-day ==> add to Schedule table in database
        // var dayIndex = 0;
        // for (var d = this.startDate; d <= this.endDate; d.setDate(d.getDate() + 1)) {
        //     dayIndex = d.getDay()
        //     //TO-DO: need to check if it's not in black out dates
        //     if(this.repeatDay[dayIndex].value){
        //         //Get the date format "YYYY-MM-DD" of the full date
        //         this.currentSession.Date = d.toISOString().slice(0,10)
        //         //Get Datetime as this format YYYY-MM-DD HH:MM:SS     
        //         this.currentSession.StartTime = this.repeatDay[dayIndex0"
        //         this.currentSession.EndTime = this.repeatDay[dayIndex].end.toTimeString().slice(0,5) + ":00"
                
        //         this.programScheduleServices.addNewProgramSchedule(this.currentSession).subscribe(res =>{
        //         })
        //     }
        // }
        
        // this.router.navigateByUrl("/profile/schedule-management")
        
        console.log("valid");

    }

    //This function to capture and get the info of selected event
    public eventClick = (e) => {
        this.isDisable = false;
        this.quantityForm.get('AdultQuantity').enable();
        this.quantityForm.get('Age57Quantity').enable();
        this.quantityForm.get('Age810Quantity').enable();
        this.quantityForm.get('Age1112Quantity').enable();
        this.quantityForm.get('Age1314Quantity').enable();
        this.quantityForm.get('Age1415Quantity').enable();
        this.quantityForm.get('Age1517Quantity').enable();

        var timezoneOffset = e.event.start.getTimezoneOffset()*60000
        var eventStart = (new Date(e.event.start - timezoneOffset)).toISOString().slice(0,19)
        var eventEnd = (new Date(e.event.end - timezoneOffset)).toISOString().slice(0,19)
        var programPK = e.event.dataItem.ProgramPK

        this.programScheduleServices.getScheduleByIdStartEnd(programPK, eventStart, eventEnd).subscribe(res=>{
            if(res){
                console.log(res)          
                this.tempDate = new Date(res.Start);
                this.customerSelectDate = this.tempDate.toDateString();
                this.customerSelectTime = this.tempDate.toLocaleString('en-US', this.options);
                this.availability = res.MaximumParticipant - res.CurrentNumberParticipant;
            }
            else{
                console.log(e.event)
                this.customerSelectDate = (e.event.dataItem.Start).toDateString();
                this.customerSelectTime = (e.event.dataItem.Start).toLocaleString('en-US', this.options);
                this.availability = e.event.dataItem.MaximumParticipant;
            }            
        })  
        
    }
}