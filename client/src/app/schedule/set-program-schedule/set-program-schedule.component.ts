import { Component, EventEmitter } from '@angular/core'
import { ProgramData } from '../../data/program-data';
import { ProgramServices } from '../../services/program.services'
import { MatDialogConfig, MatDialog, MatDatepicker, MatSelect, MatDatepickerInputEvent } from '@angular/material';
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

    repeatDay = [
        {day: "Monday", value: false},
        {day: "Tuesday", value: false},
        {day: "Wednesday", value: false},
        {day: "Thursday", value: false},
        {day: "Friday", value: false},
        {day: "Saturday", value: false},
        {day: "Sunday", value: false},
    ]

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
    startDate: any;
    endDate: any
    startTime = new Date();
    endTime = new Date();
    dataChange: EventEmitter<any> = new EventEmitter();
    isChecked = false;
    errorMessage = '';
    
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

    updateStartTime(value: Date){
        this.startTime = value
    }

    updateEndTime(value: Date){
        this.endTime = value
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
        //Get Datetime as this format YYYY-MM-DD HH:MM:SS
        var formatDate = this.startDate.toISOString().slice(0,10)        
        var formatStartTime = this.startTime.toTimeString().slice(0,8)
        var formatEndTime = this.endTime.toTimeString().slice(0,8)

        //Re-initialize currentSession before send to back-end
        this.currentSession.ProgramPK = this.ProgramPK
        this.currentSession.Date = formatDate
        this.currentSession.StartTime = formatStartTime
        this.currentSession.EndTime = formatEndTime        
        this.currentSession.MaximumParticipant = this.programData.MaximumParticipant

        this.programScheduleServices.addNewProgramSchedule(this.currentSession).subscribe(res =>{
            console.log(res)
        })
    }
}