import { Component, ChangeDetectorRef, Renderer2 } from '@angular/core'
import { ProgramData } from '../../data/program-data';
import { ProgramServices } from '../../services/program.services'
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalDialogComponent } from '../../components/modal-dialog/modal-dialog.component';
import { SchedulerEvent, SchedulerModelFields, CreateFormGroupArgs, SlotClassArgs, EventStyleArgs, DateChangeEvent} from '@progress/kendo-angular-scheduler';
import { ProgramScheduleService } from '../../services/schedule.services';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import '@progress/kendo-date-math/tz/America/Los_Angeles';
import { ActivatedRoute } from '@angular/router';
import { ActiveColorClickEvent } from '@progress/kendo-angular-inputs';
import { AppConstants } from 'src/app/constants';
import { ReservationService } from 'src/app/services/reservation.services';

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

    choice = "0"
    currentMode = ""
    programType = ""
    todayDate:string = (new Date()).toISOString()
    timeFormatOptions = {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		hour12: false
	};

    displayTimeFormatOption ={
        hour: 'numeric',
		minute: 'numeric',
		hour12: true
    };

    dayOfWeekStr = ["SU","MO","TU","WE","TH","FR","SA"]

    public eventFields: SchedulerModelFields = {
        id: "CreatedBy", //point id to dummy to avoid bug 
        title: 'Name',
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

    currentScheduleDetails: any = {}
    IsDisabled = true;

    constructor (private programService : ProgramServices, private programScheduleServices: ProgramScheduleService,
        private formBuilder: FormBuilder, private route: ActivatedRoute, private cd: ChangeDetectorRef,
        private reservationService: ReservationService) {           
        }
    
    ngOnInit(){
        this.choice = "0";
        this.IsDisabled = true;
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
        const parseAdjust = (eventDateTime: string): Date => {
            
            var date = new Date(eventDateTime);
            date.setFullYear(currentYear);            
            return date;
        };

        this.programScheduleServices.getAllScheduleWithReservationInfo().subscribe((schedules) =>{                
            const sampleDataWithCustomSchema = schedules.map(dataItem => (                                
                {
                    ...dataItem,
                    SessionDetailsPK: dataItem.SessionDetailsPK,
                    ProgramPK: dataItem.ProgramPK,
                    SchedulePK: dataItem.SchedulePK,
                    Start: new Date(dataItem.Start),
                    End: new Date(dataItem.End),
                    MaximumParticipant: dataItem.MaximumParticipant,
                    CurrentNumberParticipant: dataItem.CurrentNumberParticipant,
                    IsActive: dataItem.IsActive,
                    IsFull: dataItem.IsFull,
                    Name: dataItem.Name,
                    ProgramType: dataItem.ProgramType,
                    ReservationPK: dataItem.ReservationPK,
                    AdultQuantity: dataItem.AdultQuantity,
                    Age57Quantity: dataItem.Age57Quantity,
                    Age810Quantity: dataItem.Age810Quantity,
                    Age1112Quantity: dataItem.Age1112Quantity,
                    Age1314Quantity: dataItem.Age1314Quantity,
                    Age1415Quantity: dataItem.Age1415Quantity,
                    Age1517Quantity: dataItem.Age1517Quantity,
                    GroupTotalQuantity: dataItem.GroupTotalQuantity,
                    IndividualMinAge: dataItem.IndividualMinAge,
                    IndividualMaxAge: dataItem.IndividualMaxAge,
                    IndividualTotalQuantity: dataItem.IndividualTotalQuantity,
                    tempStart: (new Date(dataItem.Start)).toLocaleString('en-US', this.displayTimeFormatOption),
                    tempEnd: (new Date(dataItem.End)).toLocaleString('en-US', this.displayTimeFormatOption),
                    tempDate: (new Date(dataItem.Start)).toLocaleDateString()
                    // Color: dataItem.Color,

                    //************REMOVE WHEN DONE**************** */
                    // ScheduleSettingPK: dataItem.ScheduleSettingPK,
                    // ProgramPK: dataItem.ProgramPK,
                    // Title: dataItem.Title,
                    // Description: dataItem.Description,
                    // StartTimezone: dataItem.StartTimezone,
                    // Start: parseAdjust(dataItem.Start),
                    // End: parseAdjust(dataItem.End),
                    // EndTimezone: dataItem.EndTimezone,                    
                    // RecurrenceRule: dataItem.RecurrenceRule,
                    // EndRepeatDate: dataItem.EndRepeatDate,
                    // RepeatDay: dataItem.RepeatDay,
                    // RecurrenceID: dataItem.RecurrenceID,
                    // RecurrenceException: [], //Date object array
                    // //RecurrenceException: [new Date("2020-04-20T09:00:00"), new Date("2020-04-20T10:00:00")],
                    // Color: dataItem.Color,
                    // CreatedBy: dataItem.CreatedBy,
                    // CreatedDate: dataItem.CreatedDate,
                    // IsActive: dataItem.IsActive,
                    // tempStart: (new Date(dataItem.Start)).toLocaleString('en-US', this.displayTimeFormatOption),
                    // tempEnd: (new Date(dataItem.End)).toLocaleString('en-US', this.displayTimeFormatOption),
                    // tempDate: (new Date(dataItem.Start)).toLocaleDateString()
                }
            ));  
            //Create Date array for each event in RecurrenceException
            // sampleDataWithCustomSchema.forEach(item =>{
            //     //Just check repeated sessions, skip additional sessions (since it happens once)
            //     if(item.ScheduleSettingPK != 0){
            //         var result = this.allBlackoutDateException.filter(x => x.ProgramPK == item.ProgramPK);
            //         //get the time of the session
            //         var timezoneOffset = (new Date(item.Start)).getTimezoneOffset()*60000
            //         var eventStartTime = (new Date(item.Start)).toLocaleString('en-US', this.timeFormatOptions);
            //         //var eventEndTime = (new Date(item.End)).toLocaleString('en-US', this.timeFormatOptions);
            //         var eventStartDate = (new Date(item.Start - timezoneOffset)).toISOString().slice(0,10)
            //         //1. Add recurrence exception to each session based on Blackout Date
            //         //add the start date to the recurrence exception to avoid Kendo UI bug
            //         let newStartDateTime = new Date(eventStartDate+"T"+eventStartTime)
            //         //check if date exists in the RecurenceException arr
            //         if(!item.RecurrenceException.find(e => {return e.getTime() == newStartDateTime.getTime()})){
            //             item.RecurrenceException.push(new Date(eventStartDate+"T"+eventStartTime))
            //         }
                    
            //         //if this session has blackout-date => add to recurenceException
            //         if(result.length > 0){ 
            //             //add each of the date in exceptionDateArr to recurence exception                        
            //             result[0].exceptionDateArr.forEach(exceptionDate =>{
            //                 //check if date exists in the RecurenceException arr
            //                 if(!item.RecurrenceException.find(e => {return e.getTime() == (new Date(exceptionDate+"T"+eventStartTime)).getTime()})){
            //                     item.RecurrenceException.push(new Date(exceptionDate+"T"+eventStartTime))    
            //                 }                                
            //             })
            //         }
            //     }
            // })
            this.events = sampleDataWithCustomSchema
            this.allEvents = sampleDataWithCustomSchema
            console.log(sampleDataWithCustomSchema)
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
       //Reset the current session view on card
       //this.currentScheduleDetails.ProgramPK = 0
       this.currentScheduleDetails = {}
       this.IsDisabled = true;
       //this.currentScheduleDetails.Name = ""
       $("#matcard").css("border","")
    }

    onChangeSelectedProgram(program: any){
        this.selectedProgramPK = program.target.value
        if(this.selectedProgramPK != 0){
            this.programs.forEach(program =>{
                if(program.ProgramPK == this.selectedProgramPK){
                    this.events = program.eventList
                    this.currentScheduleDetails.Name = program.Name
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
            //Reset the current session view on card
            //this.currentScheduleDetails.Name = ""            
        }  
        //Reset the current session view on card
        //this.currentScheduleDetails.ProgramPK = 0    
        this.currentScheduleDetails = {}
        this.IsDisabled = true;
        //this.currentScheduleDetails.MaximumParticipant = 0
        //this.currentScheduleDetails.Availability = 0
        //reset card border
        $("#matcard").css("border","")
    }

    //Display event info when clicked on calendar
    public eventClick = (e) => {   
        this.IsDisabled = false;     
        this.currentScheduleDetails = e.event.dataItem;
        
        this.currentScheduleDetails.Availability = this.currentScheduleDetails.MaximumParticipant - this.currentScheduleDetails.CurrentNumberParticipant;
        this.currentScheduleDetails.NumChildren = parseInt(this.currentScheduleDetails.Age57Quantity) + parseInt(this.currentScheduleDetails.Age810Quantity)
                                                + parseInt(this.currentScheduleDetails.Age1112Quantity) + parseInt(this.currentScheduleDetails.Age1314Quantity)
                                                + parseInt(this.currentScheduleDetails.Age1415Quantity) + parseInt(this.currentScheduleDetails.Age1517Quantity)
        this.currentScheduleDetails.AgeRange = this.currentScheduleDetails.IndividualMinAge + "-" + this.currentScheduleDetails.IndividualMaxAge;        
        //Get program data info        
        if(this.currentScheduleDetails.ProgramType == AppConstants.PROGRAM_TYPE_CODE.GROUP_PROGRAM){
            this.programType = "group"
        }
        else{
            this.programType = "individual"
        }
        console.log(e.event)
        
        this.currentScheduleDetails.tempDate = e.event.start.toLocaleDateString()
        this.currentScheduleDetails.tempStart = (new Date(e.event.start)).toLocaleString('en-US', this.displayTimeFormatOption)
        this.currentScheduleDetails.tempEnd = (new Date(e.event.end)).toLocaleString('en-US', this.displayTimeFormatOption)
        

        if(e.event.start.toISOString() < this.todayDate){
            //set card border to orange for past event
            $("#matcard").css("border","2px solid #eb8817");
        }
        else{
            $("#matcard").css("border","");
        }        
      }

    //get all events in a selected view
    public getEventClass(args: EventStyleArgs ){        
        //console.log(args)
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

    // onDateChange(args: DateChangeEvent){
        
    // }
 
    getEventStyles(args: EventStyleArgs){
        return { backgroundColor: args.event.dataItem.Color };
    }
}
