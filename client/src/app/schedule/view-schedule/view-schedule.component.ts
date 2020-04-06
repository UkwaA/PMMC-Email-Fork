import { Component } from '@angular/core'
import { ProgramData } from '../../data/program-data';
import { ProgramServices } from '../../services/program.services'
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalDialogComponent } from '../../components/modal-dialog/modal-dialog.component';
import { SchedulerEvent, SchedulerModelFields, CreateFormGroupArgs, SlotClassArgs, EventStyleArgs  } from '@progress/kendo-angular-scheduler';
import { ProgramScheduleData } from '../../data/program-schedule-data';
import { ProgramScheduleService } from '../../services/schedule.services';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import '@progress/kendo-date-math/tz/America/Los_Angeles';

@Component({
    templateUrl: './view-schedule.component.html',
    styleUrls: ['./view-schedule.component.css']
})

export class ViewScheduleComponent {
    public selectedDate: Date = new Date();    
    public allEvents: SchedulerEvent[]

    d1 = new Date('2020-04-09T09:00:00')
    d2 = new Date('2020-04-16T09:00:00')
    exceptionDate: Date[] = []

    // baseData: any[] = []
    // {
    //     ScheduleOverviewPK: 4,
    //     ProgramPK: 2,
    //     Title: "Bowling tournament",
    //     Description: "",
    //     StartTimezone: null,
    //     Start: "2020-04-02T09:00:00",
    //     End: "2020-04-02T10:00:00",
    //     EndTimezone: null,
    //     MaximumParticipant : 50,
    //     //repeat weekly on Monday, end after 2 occurent
    //     RecurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TH;COUNT=2",
    //     RecurrenceID: null,
    //     RecurrenceException: null,
    //     CreatedBy: 0,
    //     CreatedDate: null,
    //     IsAllDay: "0"
    // }


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

    constructor (private program : ProgramServices, private programScheduleServices: ProgramScheduleService,
        private formBuilder: FormBuilder) {           
        }
    
    ngOnInit(){
        const currentYear = new Date().getFullYear();
        const parseAdjust = (eventDate: string): Date => {
            const date = new Date(eventDate);
            date.setFullYear(currentYear);
            return date;
        };       

        this.programScheduleServices.getAllScheduleOverview().subscribe((schedules) =>{            
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
            console.log(this.allEvents)
        })  
    }

    public eventClick = (e) => {
        console.log(e.event)             
        var timezoneOffset = e.event.start.getTimezoneOffset()*60000
        var eventStart = (new Date(e.event.start - timezoneOffset)).toISOString().slice(0,19)
        var eventEnd = (new Date(e.event.end - timezoneOffset)).toISOString().slice(0,19)
        var programPK = e.event.dataItem.ProgramPK
        console.log(eventStart + " - " + programPK)        
      }

    //get all events in a selected view
    public getEventClass(args: EventStyleArgs ){        
        console.log(args.event.start)
        return args.event.dataItem.type;
      }
}
