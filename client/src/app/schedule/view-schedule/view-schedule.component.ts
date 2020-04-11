import { Component } from '@angular/core'
import { ProgramData } from '../../data/program-data';
import { ProgramServices } from '../../services/program.services'
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalDialogComponent } from '../../components/modal-dialog/modal-dialog.component';
import { SchedulerEvent, SchedulerModelFields, CreateFormGroupArgs, SlotClassArgs, EventStyleArgs  } from '@progress/kendo-angular-scheduler';
import { ProgramScheduleData } from '../../data/program-schedule-data';
import { ProgramScheduleService } from '../../services/schedule.services';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { AuthenticationService } from '../../authentication.service';
import '@progress/kendo-date-math/tz/America/Los_Angeles';
import { ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
    templateUrl: './view-schedule.component.html',
    styleUrls: ['./view-schedule.component.css']
})

export class ViewScheduleComponent {
    selectedDate: Date = new Date();    
    events: any[] = []
    allEvents: SchedulerEvent[] = []
    individualEvent: SchedulerEvent[] = []
    groupEvent: SchedulerEvent[] = []

    selectedProgramPK: number = 0
    programs : any[] = [];
    allPrograms : any[] = [];
    individualProgram: any[] = [];
    groupProgram: any[] = [];
    
    programCategories: Array<Object> = [
        { id: 0, name: "All Programs" },
        { id: 1, name: "Group Programs" },
        { id: 2, name: "Individual Programs" }
    ]

    d1 = new Date('2020-04-09T09:00:00')
    d2 = new Date('2020-04-16T09:00:00')
    exceptionDate: Date[] = []    
    choice:any = 0
    currentMode = ""
    startTime: Date = new Date()

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

    constructor (private programService : ProgramServices, private programScheduleServices: ProgramScheduleService,
        private formBuilder: FormBuilder, private route: ActivatedRoute) {           
        }
    
    ngOnInit(){
        this.programCategories.forEach(e => {
            $("#programCat").append(new Option(e['name'], e['id']));
        });
        // Service call to get data from server
        this.programService.getAllPrograms().then((result) =>{
            this.programs = result;
            this.allPrograms = result

            // Filter program into Group and Individual
            this.programs.forEach(e => {
                if(e.ProgramType == 0) {
                    this.groupProgram.push(e);
                } else {
                    this.individualProgram.push(e);
                }
            });
        })

        this.route.params.subscribe(val => {
            this.currentMode = val.mode 
            if(this.currentMode != "viewAllSchedule"){
                this.selectedProgramPK = val.mode
            }
         }) 

        const currentYear = new Date().getFullYear();
        const parseAdjust = (eventDate: string): Date => {
            const date = new Date(eventDate);
            date.setFullYear(currentYear);
            return date;
        };       

        this.programScheduleServices.getAllScheduleSetting().subscribe((schedules) =>{            
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
                    RecurrenceRule: dataItem.RecurrenceRule,
                    RecurrenceID: dataItem.RecurrenceID,
                    RecurrenceException: dataItem.RecurrenceException,
                    Color: dataItem.Color,
                    CreatedBy: dataItem.CreatedBy,
                    CreatedDate: dataItem.CreatedDate,
                    IsActive: dataItem.IsActive                 
                }
            ));
            this.events = sampleDataWithCustomSchema
            this.allEvents = sampleDataWithCustomSchema
            console.log(this.events)
            //Loop through all events
            this.events.forEach(event =>{
                //for each event, loop through all programs and compare ProgramPK
                this.allPrograms.forEach(program =>{
                    if(event.ProgramPK == program.ProgramPK){
                        if(program.ProgramType == 0){
                            this.groupEvent.push(event)
                        }
                        else{
                            this.individualEvent.push(event)
                        }
                        //Create new eventList record in program object
                        if(!program.eventList){
                            program.eventList = []
                        }
                        program.eventList.push(event)
                    }
                })                
            }) 
            if(this.currentMode != "viewAllSchedule"){
                this.programs.forEach(program =>{
                    if(program.ProgramPK == this.selectedProgramPK){
                        this.events = program.eventList
                    }
                })
            }
        })
    }

    //Capture the filter option
    selectChangeHandler(event: any) {
        this.choice = event.target.value;
        // Update the data of table
        switch(this.choice) {
            case '0':
                this.events = this.allEvents
                this.programs = this.allPrograms
                break;
            case '1':
                this.events = this.groupEvent
                this.programs = this.groupProgram
                break;
            case '2':
                this.events = this.individualEvent
                this.programs = this.individualProgram
                break;
       }
    }

    onChangeSelectedProgram(program: any){
        this.selectedProgramPK = program.target.value
        if(this.selectedProgramPK != 0){
            this.programs.forEach(program =>{
                if(program.ProgramPK == this.selectedProgramPK){
                    this.events = program.eventList
                }
            })
        }
        else{
            if(this.choice == "1"){
                this.events = this.groupEvent
            }
            else{
                this.events = this.individualEvent
            }
        }        
    }

    public eventClick = (e) => {
        console.log(e.event)             
        // var timezoneOffset = e.event.start.getTimezoneOffset()*60000
        // var eventStart = (new Date(e.event.start - timezoneOffset)).toISOString().slice(0,19)
        // var eventEnd = (new Date(e.event.end - timezoneOffset)).toISOString().slice(0,19)
        // var programPK = e.event.dataItem.ProgramPK
        
      }

    //get all events in a selected view
    public getEventClass(args: EventStyleArgs ){        
        return args.event.dataItem.type;
        //need to included this [eventClass]="getEventClass" in html kendo
      }

    getEventStyles(args: EventStyleArgs){
        return { backgroundColor: args.event.dataItem.Color };
    }
}
