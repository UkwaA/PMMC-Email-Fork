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

    currentSession: ProgramScheduleData = {
        SchedulePK: 0,
        ProgramPK: 0,
        Date: '',    
        StartTime: '',
        EndTime: '',
        MaximumParticipant: 0,
        CurrentNumberParticipant: 0,
        IsActive: true,
        CreatedBy: 0
    }

    SetProgramScheduleForm: FormGroup;
    submitted = false;
    errorMessage = '';

    //Define variable for End Repeat on
    endRepeatArr:any = {type: "Never"}
    isRadioChecked:boolean = true

    //Define variable for Repeat on day
    seletedRecurrenceType:string = "Never"
    recurrenceTypeArr:any = [
        {type:"Never", freq: "", value:"" },
        {type: "Daily", freq: "DAILY", value: "day(s)"},
        {type: "Weekly", freq: "WEEKLY", value: "week(s)"},
        {type: "Monthly", freq: "MONTHLY", value: "month(s)"},
        {type: "Yearly", freq: "YEARLY", value: "year(s)"}];
    displayedInterval: String;
    startDate:Date = new Date();
    endDate:Date = new Date();
    startTime:Date = new Date('2020-04-01T09:00:00');
    endTime:Date = new Date('2020-04-01T10:00:00');
    
    //Define variable needed for event creation
    interval:number = 1
    intervalType:String = ""
    repeatOnDay:String[] = []
    endRepeatAfterNoOccurence:number = 0;
    //WARNING: DO NOT CHANGE THE ORDER OF DAY
    dayArr = [
        {day: "Sunday", value: "SU"},
        {day: "Monday", value: "MO"},
        {day: "Tuesday", value: "TU"},
        {day: "Wednesday", value: "WE"},
        {day: "Thursday", value: "TH"},
        {day: "Friday", value: "FR"},
        {day: "Saturday", value: "SA"},
    ]
        
    constructor (private formBuilder: FormBuilder, public matDialog: MatDialog, private fb: FormBuilder,
        private route: ActivatedRoute, private router: Router, private programServices: ProgramServices,
        private programScheduleServices: ProgramScheduleService, private auth: AuthenticationService) {}

    ngOnInit(){ 
        this.errorMessage = ''    
        this.SetProgramScheduleForm = this.fb.group({    
            programName: [],
            startDate: ['', [Validators.required]],
            endDate: ['', [Validators.required]],
            dayCheck:['', [Validators.required]],
            endrepeat:[]         
          })
        
        //Get current user info
        this.auth.profile().subscribe(user =>{
            this.currentSession.CreatedBy = user.UserPK
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
    onChangeRecurrentType(event,type){        
        this.seletedRecurrenceType = type.type
        this.recurrenceTypeArr.forEach(element => {
            if(element.type == this.seletedRecurrenceType){
                this.intervalType = element.freq
                this.displayedInterval = element.value
            }
        });
    }

    //Get value for repeat on day for Weekly recurrence
    onChangeRepeatOnDay(event, day){
        if(event){
            if(this.repeatOnDay.indexOf(day.value) < 0){
                this.repeatOnDay.push(day.value)
            }
        }
        else{
            var tempIndex =this.repeatOnDay.indexOf(day.value)
            if(tempIndex > -1){
                this.repeatOnDay.splice(tempIndex,1)
            }
        }
    }

    

    openModal(){
        // //Form validation
        // this.submitted = true;      

        // //validate input form
        // if (this.SetProgramScheduleForm.invalid) {
        //     return;
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
        console.log(this.repeatOnDay)
        console.log(this.intervalType)
        console.log(this.endRepeatArr)
    }
}