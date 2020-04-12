import { Component, EventEmitter } from '@angular/core'
import { ProgramData } from '../../data/program-data';
import { ProgramServices } from '../../services/program.services'
import { MatDialogConfig, MatDialog, MatCard, MatSelect, MatDatepickerInputEvent, MatCheckboxChange } from '@angular/material';
import { AddScheduleModalDialogComponent } from '../../components/add-schedule-modal-dialog/add-schedule-modal-dialog.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProgramScheduleData } from '../../data/program-schedule-data';
import { ProgramScheduleService } from '../../services/schedule.services';
import { AuthenticationService} from '../../authentication.service';
import { PaletteSettings } from '@progress/kendo-angular-inputs';
import { SchedulerModelFields } from '@progress/kendo-angular-scheduler';

@Component({
    templateUrl: './set-program-schedule.component.html',
    styleUrls: ['./set-program-schedule.component.css']
})

export class SetProgramScheduleComponent {
    ProgramPK = 0;
    currentUserPK = 0;
    events: any[] = [];
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

    //WARNING: DO NOT CHANGE THE ORDER OF DAY
    dayArr = [
        {day: "Sunday", value: "SU", eventList:[]},
        {day: "Monday", value: "MO", eventList:[]},
        {day: "Tuesday", value: "TU", eventList:[]},
        {day: "Wednesday", value: "WE", eventList:[]},
        {day: "Thursday", value: "TH", eventList:[]},
        {day: "Friday", value: "FR", eventList:[]},
        {day: "Saturday", value: "SA", eventList:[]},
    ]
        
    timeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      };

    selectedColor: string = "";

    public settings: PaletteSettings = {
        palette: [
          "#e76c36", "#ffbc00", "#edafb7", "#a18aab",
          "#f9d9ab", "#c87d0e", "#c6d9f0", "#8db3e2", 
          "#548dd4", "#a29a36"
        ],
        columns: 5,
        tileSize: 30
    }
    
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

    tempStart = ""
    tempEnd = ""
    constructor (private formBuilder: FormBuilder, public matDialog: MatDialog, private fb: FormBuilder,
        private route: ActivatedRoute, private router: Router, private programServices: ProgramServices,
        private programScheduleServices: ProgramScheduleService, private auth: AuthenticationService) {}

    ngOnInit(){ 
        this.errorMessage = '' 

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
            this.programScheduleServices.getScheduleSettingById(this.ProgramPK).subscribe((schedules) =>{
                const sampleDataWithCustomSchema = schedules.map(dataItem => (                                
                    {
                        ...dataItem,
                        ScheduleSettingPK: dataItem.ScheduleSettingPK,
                        ProgramPK: dataItem.ProgramPK,
                        Title: dataItem.Title,
                        Description: dataItem.Description,
                        StartTimezone: dataItem.StartTimezone,
                        Start: dataItem.Start,
                        End: dataItem.End,
                        EndTimezone: dataItem.EndTimezone,                    
                        RecurrenceRule: dataItem.RecurrenceRule,
                        EndRepeatDate: dataItem.EndRepeatDate,
                        RepeatDay: dataItem.RepeatDay,
                        RecurrenceID: dataItem.RecurrenceID,
                        RecurrenceException: dataItem.RecurrenceException,
                        Color: dataItem.Color,
                        CreatedBy: dataItem.CreatedBy,
                        CreatedDate: dataItem.CreatedDate,
                        IsActive: dataItem.IsActive,
                        tempStart: (new Date(dataItem.Start)).toLocaleString('en-US', this.timeFormatOptions),
                        tempEnd: (new Date(dataItem.End)).toLocaleString('en-US', this.timeFormatOptions)
                    }
                ));
                this.events = sampleDataWithCustomSchema
                if(this.events.length > 0){
                    this.selectedColor = this.events[0].Color
                }
                var newLength = 0
                //Loop through all events
                this.events.forEach(event =>{
                    //for each event, check if the Repeat Day is in the list of dayArr => yes, append to eventList
                    this.dayArr.forEach(day =>{
                        if(event.RepeatDay.indexOf(day.value) >= 0){
                            day.eventList.push(event)
                        }                        
                    })
                })
                console.log(this.dayArr)

            })
            
            this.programServices.getProgramHeaderDeatailsByID(this.ProgramPK).subscribe(program =>{
                this.programData = program;                
            })
        })
    }

    // convenience getter for easy access to form fields
    get f() { return this.SetProgramScheduleForm.controls; }
    
    addNewScheduleModal(){
        //Configure Modal Dialog
        const dialogConfig = new MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose = true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "600px";
        dialogConfig.width = "700px";
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            title: "Add new schedule",
            mode: "add",
            description: "",
            programPK: this.ProgramPK,
            name: this.programData.Name,
            userPK: this.currentUserPK,
            color: this.selectedColor,            
            actionButtonText: "Save",   
            numberOfButton: "2"         
            }
        const addScheduleModalDialog = this.matDialog.open(AddScheduleModalDialogComponent, dialogConfig);
        addScheduleModalDialog.afterClosed().subscribe(result =>{
            if(result == "Yes"){
                window.location.reload();
            }
            else{
                console.log("stop")                
            }
        })
    }

    updateScheduleModal(item){
        //Configure Modal Dialog
        const dialogConfig = new MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose = true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "600px";
        dialogConfig.width = "700px";
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            title: "Edit schedule",
            mode: "edit",
            description: "",
            programPK: this.ProgramPK,
            name: this.programData.Name,
            userPK: this.currentUserPK,
            color: this.selectedColor,            
            actionButtonText: "Save",   
            numberOfButton: "2",
            //Add this for Editing
            event: item  
            }
        const addScheduleModalDialog = this.matDialog.open(AddScheduleModalDialogComponent, dialogConfig);
        addScheduleModalDialog.afterClosed().subscribe(result =>{
            if(result == "Yes"){
                window.location.reload();
            }
            else{
                console.log("stop")                
            }
        })
    }

    setSchedule(){      
        //save new color in schedulesetting table
        console.log(this.selectedColor)
    }
}