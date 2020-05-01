import { Component, ChangeDetectorRef, Renderer2 } from '@angular/core'
import { ProgramData } from '../../data/program-data';
import { ProgramServices } from '../../services/program.services'
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalDialogComponent } from '../../components/modal-dialog/modal-dialog.component';
import { SchedulerEvent, SchedulerModelFields, CreateFormGroupArgs, SlotClassArgs, EventStyleArgs, DateChangeEvent  } from '@progress/kendo-angular-scheduler';
import { ProgramScheduleData } from '../../data/program-schedule-data';
import { ProgramScheduleService } from '../../services/schedule.services';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import '@progress/kendo-date-math/tz/America/Los_Angeles';
import { ActivatedRoute } from '@angular/router';
import { ActiveColorClickEvent } from '@progress/kendo-angular-inputs';
import { addDays } from '@progress/kendo-date-math';
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

    currentSessionDetails: any = {
        SchedulePK: 0,
        SessionDetailsPK: 0,
        ProgramPK: 0,
        Title: "",
        Start: "",
        End: "",
        MaximumParticipant: 0,
        Availability: 0,
        AgeRange: "-",
        NumChildren: 0,
        NumChaparones: 0,
        CreatedBy: 0,
        IsActive: true,
        tempDate: "",
        tempStart:"",
        tempEnd:""
      };

    constructor (private programService : ProgramServices, private programScheduleServices: ProgramScheduleService,
        private formBuilder: FormBuilder, private route: ActivatedRoute, private cd: ChangeDetectorRef,
        private reservationService: ReservationService) {           
        }
    
    ngOnInit(){
        console.log(this.todayDate)
        this.choice = "0"
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
        const parseAdjust = (eventDateTime: string, RepeatDay: string): Date => {
            
            var date = new Date(eventDateTime);
            date.setFullYear(currentYear);
            //NOTE: uncomment these lines below to hide the past events on admin's calendar
            //Set the event Start and End to today dates if the Start/End is before today date
            // var eventStartTime = (new Date(eventDateTime)).toLocaleString('en-US', this.timeFormatOptions);
            // let todayDate:Date = (new Date((new Date()).toISOString().slice(0,10) + "T" + eventStartTime))
            // let dayIndex = todayDate.getDay()
            // //If date is before today's date and today's day is in the repeat day of the session
            // if(date < todayDate){
            //     if(RepeatDay.indexOf(this.dayOfWeekStr[dayIndex]) >= 0){
            //         date = todayDate
            //     }
            //     else{
            //         for(var d = addDays(todayDate,1), i = 0; i < 6; i++, d.setDate(d.getDate() + 1)){
            //             if(RepeatDay.indexOf(this.dayOfWeekStr[d.getDay()]) >= 0){
            //                 date = d;
            //                 break;
            //             }
            //         }
                    
            //     }                
            // }
            return date;
        };       

        this.programScheduleServices.getAllBlackoutDateException().subscribe(res =>{
            this.allBlackoutDateException = res      

            this.programScheduleServices.getAllSessionDetails().subscribe((schedules) =>{                
                const sampleDataWithCustomSchema = schedules.map(dataItem => (                                
                    {
                        ...dataItem,
                        ScheduleSettingPK: dataItem.ScheduleSettingPK,
                        ProgramPK: dataItem.ProgramPK,
                        Title: dataItem.Title,
                        Description: dataItem.Description,
                        StartTimezone: dataItem.StartTimezone,
                        Start: parseAdjust(dataItem.Start, dataItem.RepeatDay),
                        End: parseAdjust(dataItem.End, dataItem.RepeatDay),
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
                        IsActive: dataItem.IsActive,
                        tempStart: (new Date(dataItem.Start)).toLocaleString('en-US', this.displayTimeFormatOption),
                        tempEnd: (new Date(dataItem.End)).toLocaleString('en-US', this.displayTimeFormatOption),
                        tempDate: (new Date(dataItem.Start)).toLocaleDateString()
                    }
                ));  
                //Create Date array for each event in RecurrenceException
                sampleDataWithCustomSchema.forEach(item =>{
                    //Just check repeated sessions, skip additional sessions (since it happens once)
                    if(item.ScheduleSettingPK != 0){
                        var result = this.allBlackoutDateException.filter(x => x.ProgramPK == item.ProgramPK);
                        //get the time of the session
                        var timezoneOffset = (new Date(item.Start)).getTimezoneOffset()*60000
                        var eventStartTime = (new Date(item.Start)).toLocaleString('en-US', this.timeFormatOptions);
                        //var eventEndTime = (new Date(item.End)).toLocaleString('en-US', this.timeFormatOptions);
                        var eventStartDate = (new Date(item.Start - timezoneOffset)).toISOString().slice(0,10)
                        //1. Add recurrence exception to each session based on Blackout Date
                        //add the start date to the recurrence exception to avoid Kendo UI bug
                        let newStartDateTime = new Date(eventStartDate+"T"+eventStartTime)
                        item.RecurrenceException.push(new Date(eventStartDate+"T"+eventStartTime))
                        //if this session has blackout-date => add to recurenceException
                        if(result.length > 0){ 
                            //add each of the date in exceptionDateArr to recurence exception                        
                            result[0].exceptionDateArr.forEach(exceptionDate =>{
                                item.RecurrenceException.push(new Date(exceptionDate+"T"+eventStartTime))
                            })
                        }
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
       //Reset the current session view on card
       this.currentSessionDetails.ProgramPK = 0
       this.currentSessionDetails.Title = ""
       $("#matcard").css("border","")
    }

    onChangeSelectedProgram(program: any){
        this.selectedProgramPK = program.target.value
        if(this.selectedProgramPK != 0){
            this.programs.forEach(program =>{
                if(program.ProgramPK == this.selectedProgramPK){
                    this.events = program.eventList
                    this.currentSessionDetails.Title = program.Name
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
            this.currentSessionDetails.Title = ""            
        }  
        //Reset the current session view on card
        this.currentSessionDetails.ProgramPK = 0    
        this.currentSessionDetails.MaximumParticipant = 0
        this.currentSessionDetails.Availability = 0
        //reset card border
        $("#matcard").css("border","")
    }

    //Display event info when clicked on calendar
    public eventClick = (e) => {
        
        var eventStart = e.event.dataItem.Start.toISOString();
        var eventEnd = e.event.dataItem.End.toISOString();
        var programPK = e.event.dataItem.ProgramPK;
        //Get program data info
        var ProgramDataObj:any = this.allPrograms.filter(x => x.ProgramPK == programPK);
        if(ProgramDataObj[0].ProgramType == AppConstants.PROGRAM_TYPE_CODE.GROUP_PROGRAM){
            this.programType = "group"
        }
        else{
            this.programType = "individual"
        }
        var sessionDetailsPK = e.event.dataItem.SessionDetailsPK;        
        //Get schedule info from schedule table
        this.programScheduleServices.getScheduleByIdStartEnd(sessionDetailsPK,programPK,eventStart,eventEnd).subscribe(res =>{
            //if there is a record in schedule table, get the info and replace selected event info with response
            if(res){
                this.currentSessionDetails = res
                this.currentSessionDetails.MaximumParticipant = res.MaximumParticipant
                this.currentSessionDetails.Availability = res.MaximumParticipant - res.CurrentNumberParticipant
                this.currentSessionDetails.AgeRange = "-"
                this.currentSessionDetails.NumChildren = 0
                if(this.programType == "group"){
                    this.currentSessionDetails.NumChaparones = 0
                    this.currentSessionDetails.Age57 = 0
                    this.currentSessionDetails.Age810 = 0
                    this.currentSessionDetails.Age1112 = 0
                    this.currentSessionDetails.Age1314 = 0
                    this.currentSessionDetails.Age1415 = 0
                    this.currentSessionDetails.Age1517 = 0
                }
                else{
                    this.currentSessionDetails.AgeRange = ""
                }
                //Get a Reservation Header object with reservation info
                let requestBody = {
                    SchedulePK: this.currentSessionDetails.SchedulePK,
                    ProgramPK: e.event.dataItem.ProgramPK,
                    ProgramType: ProgramDataObj[0].ProgramType
                }
                console.log(requestBody)
                this.reservationService.getAllReservationDetailsForViewSchedule(requestBody.SchedulePK,requestBody.ProgramPK, requestBody.ProgramType)
                .subscribe(res => {
                    console.log(res)
                    if(!res.error && res.length > 0){
                        var minAge = res[0].ParticipantAge
                        var maxAge = res[0].ParticipantAge
                        res.forEach(item =>{
                            if(this.programType == "group"){
                                this.currentSessionDetails.NumChildren += item.Age57Quantity + item.Age810Quantity 
                                                                        + item.Age1112Quantity + item.Age1314Quantity
                                                                        + item.Age1415Quantity + item.Age1517Quantity
                                this.currentSessionDetails.NumChaparones += item.AdultQuantity
                                this.currentSessionDetails.Age57 += item.Age57Quantity
                                this.currentSessionDetails.Age810 += item.Age810Quantity
                                this.currentSessionDetails.Age1112 += item.Age1112Quantity
                                this.currentSessionDetails.Age1314 += item.Age1314Quantity
                                this.currentSessionDetails.Age1415 += item.Age1415Quantity
                                this.currentSessionDetails.Age1517 += item.Age1517Quantity
                            }
                            else{                                
                                if(item.ParticipantAge <= 18){
                                    this.currentSessionDetails.NumChildren += 1
                                    if(item.ParticipantAge > maxAge){
                                        maxAge = item.ParticipantAge
                                    }
                                    else if(item.ParticipantAge < minAge)
                                    {
                                        minAge = item.ParticipantAge
                                    }
                                }
                            }                               
                        })
                        this.currentSessionDetails.AgeRange = String(minAge) + "-" + String(maxAge)
                    }                                        
                })
            }
            //otherwise, use the info from the selected event
            else{
                this.currentSessionDetails.SchedulePK = 0;   // SchedulePK is AutoIncrement
                this.currentSessionDetails.ProgramPK = e.event.dataItem.ProgramPK;
                this.currentSessionDetails.SessionDetailsPK = e.event.dataItem.SessionDetailsPK;
                this.currentSessionDetails.Start = e.event.dataItem.Start.toISOString();
                this.currentSessionDetails.End = e.event.dataItem.End.toISOString();
                this.currentSessionDetails.MaximumParticipant = ProgramDataObj[0].MaximumParticipant; //FINDME, need to fix it
                this.currentSessionDetails.Availability = ProgramDataObj[0].MaximumParticipant;
                this.currentSessionDetails.AgeRange = "-"
                this.currentSessionDetails.NumChildren = 0
                this.currentSessionDetails.NumChaparones = 0
                this.currentSessionDetails.Age57 = 0
                this.currentSessionDetails.Age810 = 0
                this.currentSessionDetails.Age1112 = 0
                this.currentSessionDetails.Age1314 = 0
                this.currentSessionDetails.Age1415 = 0
                this.currentSessionDetails.Age1517 = 0
                this.currentSessionDetails.AgeRange = "-"
                this.currentSessionDetails.IsActive = true;
                this.currentSessionDetails.CreatedBy = AppConstants.SYSTEM_USER_PK;                
            }
            this.currentSessionDetails.Title = e.event.dataItem.Title
            this.currentSessionDetails.tempDate = e.event.dataItem.Start.toLocaleDateString()
            this.currentSessionDetails.tempStart = (new Date(e.event.dataItem.Start)).toLocaleString('en-US', this.displayTimeFormatOption)
            this.currentSessionDetails.tempEnd = (new Date(e.event.dataItem.End)).toLocaleString('en-US', this.displayTimeFormatOption)

            if(e.event.dataItem.Start.toISOString() < this.todayDate){
                //set card border to orange for past event
                $("#matcard").css("border","2px solid #eb8817");
            }
            else{
                $("#matcard").css("border","");
            }
        })
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
