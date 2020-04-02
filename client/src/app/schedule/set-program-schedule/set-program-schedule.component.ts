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
    dataChange: EventEmitter<any> = new EventEmitter();
    isChecked = false;
    errorMessage = '';

    startDate: any;
    endDate: any
    startTime = new Date('2020-04-01T09:00:00');
    endTime = new Date('2020-04-01T10:00:00');

    //WARNING: DO NOT CHANGE THE ORDER OF DAY
    repeatDay = [
        {day: "Sunday", value: false, start: this.startTime, end: this.endTime },
        {day: "Monday", value: false, start: this.startTime, end: this.endTime },
        {day: "Tuesday", value: false, start: this.startTime, end: this.endTime },
        {day: "Wednesday", value: false, start: this.startTime, end: this.endTime },
        {day: "Thursday", value: false, start: this.startTime, end: this.endTime },
        {day: "Friday", value: false, start: this.startTime, end: this.endTime },
        {day: "Saturday", value: false, start: this.startTime, end: this.endTime },
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
            dayCheck:['', [Validators.required]]            
          })
        
        this.auth.profile().subscribe(user =>{
            this.currentSession.CreatedBy = user.UserPK
        })

        this.route.params.subscribe(val =>{
            this.ProgramPK = val.id
            
            this.programServices.getProgramHeaderDeatailsByID(this.ProgramPK).subscribe(program =>{
                this.programData = program;                
            })
        })
    }

    // convenience getter for easy access to form fields
    get f() { return this.SetProgramScheduleForm.controls; }  

    updateStartDate(event: MatDatepickerInputEvent<Date>){        
        this.startDate = event.value
    }

    updateEndDate(event: MatDatepickerInputEvent<Date>){        
        this.endDate = event.value
    }

    //Update Start Time of a specific day
    updateStartTime(value: Date, day:number){
        this.repeatDay[day].start = value    
    }

    //Update End Time of a specific day
    updateEndTime(value: Date, day:number){
        this.repeatDay[day].end = value
    }

    //If checkbox is checked, the timepicker will be enabled
    updateCheckBox(event: MatCheckboxChange, day:number){
        this.isChecked = event.checked
        this.repeatDay[day].value = event.checked
    }

    openModal(){
        //Form validation
        this.submitted = true;      

        //validate input form
        if (this.SetProgramScheduleForm.invalid) {
            return;
        }
        
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
        //Re-initialize currentSession before send to back-end
        this.currentSession.ProgramPK = this.ProgramPK                
        this.currentSession.MaximumParticipant = this.programData.MaximumParticipant
        //Loop through all day from StartDate to EndDate, if the day is selected to repeat 
        // AND if that day is not a Blackout-day ==> add to Schedule table in database
        var dayIndex = 0;
        for (var d = this.startDate; d <= this.endDate; d.setDate(d.getDate() + 1)) {
            dayIndex = d.getDay()
            //TO-DO: need to check if it's not in black out dates
            if(this.repeatDay[dayIndex].value){
                //Get the date format "YYYY-MM-DD" of the full date
                this.currentSession.Date = d.toISOString().slice(0,10)
                //Get Datetime as this format YYYY-MM-DD HH:MM:SS     
                this.currentSession.StartTime = this.repeatDay[dayIndex].start.toTimeString().slice(0,5) + ":00"
                this.currentSession.EndTime = this.repeatDay[dayIndex].end.toTimeString().slice(0,5) + ":00"
                
                this.programScheduleServices.addNewProgramSchedule(this.currentSession).subscribe(res =>{
                })
            }
        }
        
        this.router.navigateByUrl("/profile/schedule-management")
    }
}