import { Component } from '@angular/core'
import { ProgramData } from '../../data/program-data';
import { ProgramServices } from '../../services/program.services'
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalDialogComponent } from '../../components/modal-dialog/modal-dialog.component';
import { SchedulerEvent, SchedulerModelFields, CreateFormGroupArgs  } from '@progress/kendo-angular-scheduler';
import { ProgramScheduleData } from '../../data/program-schedule-data';
import { ProgramScheduleService } from '../../services/schedule.services';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';

@Component({
    templateUrl: './view-schedule.component.html',
    styleUrls: ['./view-schedule.component.css']
})

// export class ViewScheduleComponent {
//     public selectedDate: Date = new Date();
//     // public allEvents: SchedulerEvent[] = [{
//     //     id: 1,
//     //     title: 'Breakfast',
//     //     start: new Date('2018-01-02T09:00:00'),
//     //     end: new Date('2018-01-02T15:30:00')
//     // }]
//     public allEvents: SchedulerEvent[]
//     allSchedules: any = []
//     constructor (private program : ProgramServices, private programScheduleServices: ProgramScheduleService) {}

//     ngOnInit(){
//         this.programScheduleServices.getAllSchedules().subscribe(schedules =>{
//             schedules.forEach(element => {
//                 this.program.getProgramHeaderDeatailsByID(element.ProgramPK).subscribe(
//                     program =>{
//                         var event = {
//                             id : element.SchedulePK,
//                             title : program.Name,                            
//                             start : new Date(element.Date + 'T' + element.StartTime),
//                             end : new Date(element.Date + 'T' + element.EndTime)                        
//                         }
//                         this.allSchedules.push(event)
//                     }                    
//                 )                
//             });
//         })        
//         this.allEvents = this.allSchedules
//     }
// }
export class ViewScheduleComponent {
    public selectedDate: Date = new Date();    
    public allEvents: SchedulerEvent[]
    allSchedules: any = []

    d1 = new Date('2020-04-09T09:00:00')
    d2 = new Date('2020-04-16T09:00:00')
    exceptionDate: Date[] = []

    baseData: any[] = [
    {
        "SchedulePK": 4,
        "ProgramPK": 2,
        "Title": "Bowling tournament",
        "Description": "",
        "StartTimezone": null,
        "Start": "2020-04-02T09:00:00",
        "End": "2020-04-02T10:00:00",
        "EndTimezone": null,
        //repeat weekly on Monday, end after 2 occurent
        "RecurrenceRule": "FREQ=WEEKLY;BYDAY=MO,TH;COUNT=2",
        "RecurrenceID": null,
        "RecurrenceException":  this.exceptionDate,
        "IsAllDay": false,
        "dummy": ""
    },
    {
        "SchedulePK": 5,
        "ProgramPK": 3,
        "Title": "Take the dog to the vet",
        "Description": "",
        "StartTimezone": null,
        "Start": "2020-04-02T09:00:00",
        "End": "2020-04-02T10:00:00",
        "EndTimezone": null,
        "RecurrenceRule": "FREQ=DAILY",
        "RecurrenceID": null,
        "RecurrenceException": null,
        "IsAllDay": false,
        "dummy": ""
    }]

    public eventFields: SchedulerModelFields = {
        id: 'dummy', //point id to dummy to avoid bug 
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

    public lastTile = undefined;

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

        const displayDate = new Date(currentYear, 5, 24);

        const sampleData = this.baseData.map(dataItem => (
            <SchedulerEvent> {
                id: dataItem.SchedulePK,
                programPK: dataItem.ProgramPK,
                start: parseAdjust(dataItem.Start),
                startTimezone: dataItem.startTimezone,
                end: parseAdjust(dataItem.End),
                endTimezone: dataItem.endTimezone,
                isAllDay: dataItem.IsAllDay,
                title: dataItem.Title,
                description: dataItem.Description,
                recurrenceRule: dataItem.RecurrenceRule,
                recurrenceId: dataItem.RecurrenceID,
                recurrenceException: dataItem.RecurrenceException                
            }
        ));

        const sampleDataWithCustomSchema = this.baseData.map(dataItem => (
            {
                ...dataItem,
                SchedulePK: dataItem.SchedulePK,
                ProgramPK: dataItem.ProgramPK,
                Title: dataItem.Title,
                Description: dataItem.Description,
                StartTimezone: dataItem.StartTimezone,
                Start: parseAdjust(dataItem.Start),
                End: parseAdjust(dataItem.End),   
                EndTimezone: dataItem.EndTimezone,
                RecurrenceRule: dataItem.RecurrenceRule,
                RecurrenceID: dataItem.RecurrenceID,
                RecurrenceException: dataItem.RecurrenceException,
                IsAllDay: dataItem.IsAllDay                      
            }
        ));
            
        this.allEvents = sampleDataWithCustomSchema
        console.log(sampleDataWithCustomSchema)
    }

    public eventClick = (e) => {
        console.log(e.event.dataItem)
       
      }
}
