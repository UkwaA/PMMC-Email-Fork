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
import { ActiveColorClickEvent } from '@progress/kendo-angular-inputs';
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
    allBlackoutDateException:any = [];
    programs : any[] = [];
    allPrograms : any[] = [];
    individualProgram: any[] = [];
    groupProgram: any[] = [];
    
    programCategories: Array<Object> = [
        { id: 0, name: "All Programs" },
        { id: 1, name: "Group Programs" },
        { id: 2, name: "Individual Programs" }
    ]

    d1 = new Date('2020-04-20T09:00:00')
    d2 = new Date('2020-04-16T09:00:00')
    exceptionDate: Date[] = []    
    choice:any = 0
    currentMode = ""
    
    timeFormatOptions = {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		hour12: false
	};

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

        this.programScheduleServices.getAllBlackoutDateException().subscribe(res =>{
            this.allBlackoutDateException = res      
            console.log(res)  

            this.programScheduleServices.getAllSessionDetails().subscribe((schedules) =>{                
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
                        EndRepeatDate: dataItem.EndRepeatDate,
                        RepeatDay: dataItem.RepeatDay,
                        RecurrenceID: dataItem.RecurrenceID,
                        RecurrenceException: [], //Date object array
                        //RecurrenceException: [new Date("2020-04-20T09:00:00"), new Date("2020-04-20T10:00:00")],
                        Color: dataItem.Color,
                        CreatedBy: dataItem.CreatedBy,
                        CreatedDate: dataItem.CreatedDate,
                        IsActive: dataItem.IsActive                 
                    }
                ));  
                //Create Date array for each event in RecurrenceException
                sampleDataWithCustomSchema.forEach(item =>{
                    var result = this.allBlackoutDateException.filter(x => x.ProgramPK == item.ProgramPK);
                    //Just check repeated sessions, skip additional sessions (since it happens once)
                    if(result.length > 0 && item.ScheduleSettingPK != 0){
                        //get the time of the session
                        var timezoneOffset = (new Date(item.Start)).getTimezoneOffset()*60000
                        var eventStartTime = (new Date(item.Start)).toLocaleString('en-US', this.timeFormatOptions);
                        var eventStartDate = (new Date(item.Start - timezoneOffset)).toISOString().slice(0,10)
                        
                        //add the start date to the recurrence exception to avoid Kendo UI bug
                        item.RecurrenceException.push(new Date(eventStartDate+"T"+eventStartTime))
                        
                        //add each of the date in exceptionDateArr to recurence exception                        
                        result[0].exceptionDateArr.forEach(exceptionDate =>{
                            item.RecurrenceException.push(new Date(exceptionDate+"T"+eventStartTime))
                        })
                    }
                })
                
                this.events = sampleDataWithCustomSchema
                this.allEvents = sampleDataWithCustomSchema
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
            switch(this.choice) {
                case '0':
                    this.events = this.allEvents                    
                    break;
                case '1':
                    this.events = this.groupEvent                    
                    break;
                case '2':
                    this.events = this.individualEvent                    
                    break;   
            }         
        }        
    }

    public eventClick = (e) => {
        console.log(e.event)
      }

    //get all events in a selected view
    public getEventClass(args: EventStyleArgs ){        
        
        // var todayDate = (new Date()).toDateString();     
        // var startDate = (new Date(args.event.start)).toDateString();
        // if(startDate < todayDate){
        //     console.log(startDate)
        //     args.event.dataItem.RecurrenceException = [(new Date(startDate))]
        //     args.event.recurrenceExceptions = [(new Date(startDate))]            
        // }
                
        //return args.event.dataItem.type;        
        //need to included this [eventClass]="getEventClass" in html kendo
      }
 
    getEventStyles(args: EventStyleArgs){
        return { backgroundColor: args.event.dataItem.Color };
    }
}
