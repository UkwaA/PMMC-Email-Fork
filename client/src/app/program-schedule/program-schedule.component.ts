import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramServices } from '../services/program.services';
import { ProgramData } from '../data/program-data';
import { ProgramScheduleService } from '../services/schedule.services';
import { SchedulerEvent, SchedulerModelFields, EventStyleArgs } from '@progress/kendo-angular-scheduler';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProgramScheduleData } from '../data/program-schedule-data';

@Component({
    templateUrl: './program-schedule.component.html',
    styleUrls: ['./program-schedule.component.css']
})

export class ProgramScheduleComponent implements OnInit{
    ProgramPK: number;
    ProgramType: number;
    programDetails: ProgramData;
    public selectedDate: Date = new Date();
    public allEvents: SchedulerEvent[];
    createProgramForm: FormGroup;
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

        // this.programScheduleServices.getScheduleById(this.ProgramPK).subscribe(schedules =>{
        //     schedules.forEach(element =>{
        //             var event = {
        //                 id : element.SchedulePK,
        //                 title : this.programDetails.Name,                            
        //                 start : new Date(element.Date + 'T' + element.StartTime),
        //                 end : new Date(element.Date + 'T' + element.EndTime)                        
        //             }
        //             this.allSchedules.push(event)
        //         }                    
        //     )                
        // })

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
                    ScheduleOverviewPK: dataItem.ScheduleOverviewPK,
                    ProgramPK: dataItem.ProgramPK,
                    Title: dataItem.Title,
                    Description: dataItem.Description,
                    StartTimezone: dataItem.StartTimezone,
                    Start: parseAdjust(dataItem.Start),
                    End: parseAdjust(dataItem.End),   
                    EndTimezone: dataItem.EndTimezone,
                    MaximumParticipant: dataItem.MaximumParticipant,
                    CurrentParticipant: dataItem.CurrentParticipant,
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

        this.createProgramForm = this.fb.group({
            AdultQuantity: ["", [Validators.required, Validators.min(0)]],
            Age57Quantity: ["", [Validators.required, Validators.min(0)]],
            Age810Quantity: ["", [Validators.required, Validators.min(0)]],
            Age1112Quantity: ["", [Validators.required, Validators.min(0)]],
            Age1314Quantity: ["", [Validators.required, Validators.min(0)]],
            Age1415Quantity: ["", [Validators.required, Validators.min(0)]],
            Age1517Quantity: ["", [Validators.required, Validators.min(0)]],
            TotalQuantity: ["", [Validators.required, Validators.min(1)]]
        });
    }

    get f() {
        return this.createProgramForm.controls;
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
    }

    enterQuantity() {
        this.submitted = true;
        if (this.createProgramForm.invalid) {
          console.log("invalid");
          return;
        }  
    }

    //Define this function used for Kendo scheduler
    getEventClass(args: EventStyleArgs ){
        //Define the item to update and get the time by format "YYYY-MM-DD HH:MM:SS"
        var timezoneOffset = args.event.start.getTimezoneOffset()*60000
        var programPK = args.event.dataItem.ProgramPK
        var eventStart = (new Date(args.event.dataItem.Start - timezoneOffset)).toISOString().slice(0,19)
        var eventEnd = (new Date(args.event.dataItem.End - timezoneOffset)).toISOString().slice(0,19)

        return args.event.dataItem.type;
        
      }

    //This function to capture and get the info of selected event
    public eventClick = (e) => {
        var timezoneOffset = e.event.start.getTimezoneOffset()*60000
        var eventStart = (new Date(e.event.start - timezoneOffset)).toISOString().slice(0,19)
        var eventEnd = (new Date(e.event.end - timezoneOffset)).toISOString().slice(0,19)
        var programPK = e.event.dataItem.ProgramPK

        this.programScheduleServices.getScheduleByIdStartEnd(programPK, eventStart, eventEnd).subscribe(res=>{
            if(res){
                console.log(res)               
            }
            else{
                console.log(e.event)
            }            
        })  
        
    }
}