import { Component, EventEmitter } from '@angular/core'
import { ProgramData } from '../../data/program-data';
import { ProgramServices } from '../../services/program.services'
import { MatDialogConfig, MatDialog, MatCard, MatSelect, MatDatepickerInputEvent, MatCheckboxChange } from '@angular/material';
import { ModalDialogComponent } from '../../components/modal-dialog/modal-dialog.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProgramScheduleData } from '../../data/program-schedule-data';
import { ProgramScheduleService } from '../../services/schedule.services';
import { AuthenticationService} from '../../authentication.service';

@Component({
    templateUrl: './set-program-schedule.component.html',
    styleUrls: ['./set-program-schedule.component.css']
})

export class SetProgramScheduleComponent {
    ProgramPK = 0;
    currentUserPK = 0;
    programData: ProgramData = {
        ProgramPK: 0,
        Name: "",
        Description: "",
        DepositAmount: 0,
        PricePerParticipant: 0,
        MaximumParticipant: 0,
        ImgData: "",
        ProgramType: 0,
        CreatedDate: "",
        CreatedBy: 0,
        IsActive: true,
        SubProgramPK: 0        
    }

    currentScheduleSetting = {
        ScheduleSettingPK: 0,
        ProgramPK: 0,
        Title: "",
        Description: "",
        StartTimezone: "",
        Start: "",
        End: "",   
        EndTimezone: "",        
        RecurrenceRule: "",
        RecurrenceID: "",
        RecurrenceException: "",
        Color: "",
        CreatedBy: 0,        
        IsActive: true,
        IsAllDay: false
    }

    SetProgramScheduleForm: FormGroup;
    submitted = false;
    errorMessage = '';

    //Define variable for End Repeat on
    //endRepeatArr:any = {type: "Never"}
    //isRadioChecked:boolean = true

    //Define variable for Repeat on day
    // seletedRecurrenceType:string = "Never"
    // recurrenceTypeArr:any = [
    //     {type:"Never", freq: "NEVER", value:"" , selected: true},
    //     {type: "Weekly", freq: "WEEKLY", value: "week(s)", selected: false},
    //     {type: "Monthly", freq: "MONTHLY", value: "month(s)", selected: false},
    //     {type: "Yearly", freq: "YEARLY", value: "year(s)", selected: false}
    // ];
    //displayedInterval: String;
    startDate:any = new Date();
    endDate:any = new Date();
    startTime:any = new Date('2020-04-01T09:00:00');
    endTime:any = new Date('2020-04-01T10:00:00');
    timeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      };

    //Define variable needed for MONTHLY repeat    
    // selectedDayOfMonthArr = [];
    // selectedDay:number = 1

    // //Define variable needed for YEARLY repeat
    // selectedDayOfMonth:number = 1
    // selectedMonthOfYear:any = {
    //     month: "January",
    //     value: 1,
    //     max: 31
    // };
    // monthsOfYearArr = [
    //     {month:"January", value: 1, max: 31 },
    //     {month:"February", value: 2, max: 29 },
    //     {month:"March", value: 3, max: 31 },
    //     {month:"April", value: 4, max: 30 },
    //     {month:"May", value: 5, max: 31 },
    //     {month:"June", value: 6, max: 30 },
    //     {month:"July", value: 7, max: 31 },
    //     {month:"August", value: 8, max: 31 },
    //     {month:"September", value: 9, max: 30 },
    //     {month:"October", value: 10, max: 31 },
    //     {month:"November", value: 11, max: 30 },
    //     {month:"December", value: 12, max: 31 }
    // ]

    //Define variable needed for event creation
    interval:number = 1
    // frequency = "NEVER"
    weeklyRepeatOnDayArr:String[] = []
    // endRepeatAfterNoOccurence:number = 1;
    // endRepeatOnDate:any = new Date();
    eventDescription = "";
    recurrenceRule = "";
    //monthlyRepeatOnDayArr:String[] = []

    //WARNING: DO NOT CHANGE THE ORDER OF DAY
    dayArr = [
        {day: "Sunday", value: "SU", selected: false},
        {day: "Monday", value: "MO", selected: true},
        {day: "Tuesday", value: "TU", selected: false},
        {day: "Wednesday", value: "WE", selected: false},
        {day: "Thursday", value: "TH", selected: false},
        {day: "Friday", value: "FR", selected: false},
        {day: "Saturday", value: "SA", selected: false},
    ]
        
    constructor (private formBuilder: FormBuilder, public matDialog: MatDialog, private fb: FormBuilder,
        private route: ActivatedRoute, private router: Router, private programServices: ProgramServices,
        private programScheduleServices: ProgramScheduleService, private auth: AuthenticationService) {}

    ngOnInit(){ 
        this.errorMessage = ''
        this.dayArr.forEach(day =>{
            if(day.selected){
                this.weeklyRepeatOnDayArr.push(day.value)
            }
        })
        
        this.SetProgramScheduleForm = this.fb.group({    
            programName: [],
            startDate: [],
            endDate: [],
            endrepeat: [],            
            dayOfMonthOfYear: [1, [Validators.min(1)]],
            description:[]
          })
        
        //Get current user info
        this.auth.profile().subscribe(user =>{
            this.currentUserPK = user.UserPK
            this.currentScheduleSetting.CreatedBy = user.UserPK
        })

        //Get current program header info
        this.route.params.subscribe(val =>{
            this.ProgramPK = val.id
            
            this.programServices.getProgramHeaderDeatailsByID(this.ProgramPK).subscribe(program =>{
                this.programData = program;                
            })
        })
    }

    // convenience getter for easy access to form fields
    get f() { return this.SetProgramScheduleForm.controls; }

    //Get value for recurrence type
    // onChangeRecurrentType(event,type){        
    //     this.seletedRecurrenceType = type.type
    //     this.recurrenceTypeArr.forEach(element => {
    //         if(element.type == this.seletedRecurrenceType){
    //             this.frequency = element.freq
    //             this.displayedInterval = element.value
    //         }
    //     });
    // }

    //Get value for repeat on day for Weekly recurrence
    onChangeRepeatOnDay(event, day){
        if(event){
            if(this.weeklyRepeatOnDayArr.indexOf(day.value) < 0){
                this.weeklyRepeatOnDayArr.push(day.value)
            }
        }
        else{
            var tempIndex =this.weeklyRepeatOnDayArr.indexOf(day.value)
            if(tempIndex > -1){
                this.weeklyRepeatOnDayArr.splice(tempIndex,1)
            }
        }
    }

    onChangeStartDate(event){
        if(event > this.endDate){
            this.endDate = event
        }        
    }

    onChangeStartTime(event){
        if(event > this.endTime){
            this.endTime = event
        }
    }

    //Define this function to remove the Selected Day from the list
    // removeSelectedDayOfMonth(e: any): void {
    //     const index = this.selectedDayOfMonthArr.findIndex(c => c.label === e.sender.label);
    //     this.selectedDayOfMonthArr.splice(index, 1);
    // }

    //Define this function to add days to selectedDayOfMonthArr
    // addDays(day:number){
    //     //check if duplicate => true
    //     if(day > 0 && day <= 31){
    //         if(this.selectedDayOfMonthArr.some(item => item.label === day)){}            
    //         else{
    //             //not found
    //             var tempDayObj = {
    //                 label: day,
    //                 selected: false,
    //                 removable: true
    //             }
    //             this.selectedDayOfMonthArr.push(tempDayObj)
    //         }

    //         //Sort the selectedDayOfMonthArr to display in order
    //         this.selectedDayOfMonthArr.sort(function(a, b) {            
    //             if (a < b) {
    //             return -1;
    //             }
    //             if (a > b) {
    //             return 1;
    //             }                      
    //             return 0;
    //         });

    //         this.selectedDayOfMonthArr.sort(function (a, b) {
    //             return a.label - b.label;
    //         });
    //     }
    // }

    //Define the change of Selected Month Of Year
    // onChangeSelectedMonthOfYear(e: any){
    //     this.selectedMonthOfYear = e
    //     if(this.selectedDayOfMonth > this.selectedMonthOfYear.max){
    //         this.selectedDayOfMonth = 1
    //     }
    // }

    openModal(){
        //Form validation
        this.submitted = true;      

        //validate input form
        if (this.SetProgramScheduleForm.invalid) {
            return;
        }

        // if(this.frequency == "MONTHLY" && (this.selectedDayOfMonthArr.length == 0 
        //             || this.selectedDay < 1 || this.selectedDay > 31)){
        //     return
        // }

        // if(this.frequency == "YEARLY" && (this.selectedDayOfMonth > this.selectedMonthOfYear.max 
        //             || this.selectedDayOfMonth < 1)){
        //     return
        // }
        
        //Configure Modal Dialog
        const dialogConfig = new MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose =true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "500px";
        dialogConfig.width = "350px";
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            title: "Set Program Schedule",
            description: "All information is correct?",            
            actionButtonText: "Confirm",   
            numberOfButton: "2"         
            }
        const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
        modalDialog.afterClosed().subscribe(result =>{
            if(result == "Yes"){
                //call register function                
                this.setSchedule()
            }
            else{
                console.log("stop")                
            }
        })
    }

    setSchedule(){               
        //Get Start Date Time and End Date Time
        var timezoneOffset = this.startDate.getTimezoneOffset()*60000        
        var eventStartDate = (new Date(this.startDate - timezoneOffset)).toISOString().slice(0,10)
        //var eventEndDate = (new Date(this.endDate - timezoneOffset)).toISOString().slice(0,10)        
        var eventStartTime = this.startTime.toLocaleString('en-US', this.timeFormatOptions);
        var eventEndTime = this.endTime.toLocaleString('en-US', this.timeFormatOptions);
        var dateEndRepeat = (new Date(this.endDate - timezoneOffset)).toISOString().slice(0,19)
        
        var eventStartDateTime = (new Date(eventStartDate + "T" + eventStartTime)).toString()
        var eventEndDateTime = (new Date(eventStartDate + "T" + eventEndTime)).toString()

        //Set up the recurrent rule for event
        // if(this.frequency != "NEVER")
        // {
        //     this.recurrenceRule = "FREQ=" + this.frequency + ";INTERVAL=" + this.interval
        //     if(this.frequency == "WEEKLY"){
        //         //BYDAY
        //         this.recurrenceRule += ";BYDAY=" + this.weeklyRepeatOnDayArr.join(",")
        //     }
        //     else if(this.frequency == "MONTHLY"){
        //         //BYMONTHDAY
        //         if(this.selectedDayOfMonthArr.length > 0){
        //             this.recurrenceRule += ";BYMONTHDAY="
        //             for(var i = 0; i < this.selectedDayOfMonthArr.length; i++){
        //                 if(i != this.selectedDayOfMonthArr.length - 1){
        //                     this.recurrenceRule += this.selectedDayOfMonthArr[i].label + ",";
        //                 }
        //                 else{
        //                     this.recurrenceRule += this.selectedDayOfMonthArr[i].label
        //                 }
        //             }                    
        //         }
        //     }
        //     else if(this.frequency == "YEARLY"){
        //         this.recurrenceRule += ";BYMONTH=" + this.selectedMonthOfYear.value 
        //                     + ";BYMONTHDAY=" + this.selectedDayOfMonth
        //     }
        //     //COUNT
        //     if(this.endRepeatArr.type == "After" && this.endRepeatAfterNoOccurence > 0){
        //         this.recurrenceRule += ";COUNT=" + this.endRepeatAfterNoOccurence;
        //     }
        //     //UNTIL
        //     else if(this.endRepeatArr.type == "On"){
        //         this.recurrenceRule += ";UNTIL=" + dateEndRepeat;
        //     }
        // }         

        //Set up recurrence rule
        this.recurrenceRule += "FREQ=WEEKLY" + ";BYDAY=" + this.weeklyRepeatOnDayArr.join(",") 
                                + ";UNTIL=" + dateEndRepeat

        this.currentScheduleSetting = {
            ScheduleSettingPK: 0,
            ProgramPK: this.programData.ProgramPK,
            Title: this.programData.Name,
            Description: this.eventDescription,
            StartTimezone: "",
            Start: eventStartDateTime,
            End: eventEndDateTime,   
            EndTimezone: "",            
            RecurrenceRule: this.recurrenceRule,
            RecurrenceID: "",
            RecurrenceException: "",
            Color: "",
            CreatedBy: this.currentUserPK,        
            IsActive: true,
            IsAllDay: false
        };
        console.log(this.currentScheduleSetting)
        // this.programScheduleServices.addNewScheduleSetting(this.currentScheduleSetting).subscribe(res=>{
        //     this.router.navigateByUrl("/profile/schedule-management")
        // })
        
    }
}