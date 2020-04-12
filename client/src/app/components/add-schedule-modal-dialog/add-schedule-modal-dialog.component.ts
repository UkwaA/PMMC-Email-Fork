import {Component, OnInit, Input, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PaletteSettings } from '@progress/kendo-angular-inputs';
import { ProgramScheduleService } from 'src/app/services/schedule.services';
import { Router } from '@angular/router';

@Component({
    selector: 'add-schedule-modal-dialog',
    templateUrl: './add-schedule-modal-dialog.component.html',
    styleUrls: ['./add-schedule-modal-dialog.component.css']
})

export class AddScheduleModalDialogComponent implements OnInit{
     modalHeader: String
     modalContent: String
    SetProgramScheduleForm: FormGroup
    endTimeErrorMessage = ""
    startTimeErrorMessage = ""
    errorMessage = ""
    repeatOnErrorMessage = ""
    isDisabled = false

    startDate:any = new Date();
    endDate:any = new Date();
    startTime:any = new Date('2020-04-01T09:00:00');
    endTime:any = new Date('2020-04-01T10:00:00');
    minTime:any = new Date('2020-04-01T07:00:00');
    maxTime:any = new Date('2020-04-01T18:00:00');
    timeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      };
    
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
        EndRepeatDate: new Date(),
        RepeatDay: "",
        RecurrenceID: "",
        RecurrenceException: "",
        Color: "",
        CreatedBy: 0,        
        IsActive: true,
        IsAllDay: false,
    }

    weeklyRepeatOnDayArr:String[] = []
    eventDescription = "";
    recurrenceRule = "";
    dayArr:any = [
      {day: "Sunday", value: "SU", selected: false},
      {day: "Monday", value: "MO", selected: true},
      {day: "Tuesday", value: "TU", selected: false},
      {day: "Wednesday", value: "WE", selected: false},
      {day: "Thursday", value: "TH", selected: false},
      {day: "Friday", value: "FR", selected: false},
      {day: "Saturday", value: "SA", selected: false},
    ]

    constructor(public dialogRef: MatDialogRef<AddScheduleModalDialogComponent>,
        private fb: FormBuilder, private programScheduleServices: ProgramScheduleService,
        private router: Router,
        @Inject(MAT_DIALOG_DATA) private modalData: any){}

    ngOnInit(){
      //Define these for Edit mode
      if(this.modalData.mode == "edit"){
        this.startDate = new Date(this.modalData.event.Start)
        this.endDate = new Date(this.modalData.event.EndRepeatDate)
        this.startTime = new Date(this.modalData.event.Start)
        this.endTime = new Date(this.modalData.event.End)
        this.minTime = new Date(this.startTime.toISOString().slice(0,10) + "T07:00:00")
        this.maxTime = new Date(this.startTime.toISOString().slice(0,10) + "T18:00:00")
        this.eventDescription = this.modalData.event.Description
        this.dayArr.forEach(day =>{
          if(this.modalData.event.RepeatDay.indexOf(day.value) >= 0){
            day.selected = true
          }
          else{
            day.selected = false
          }
        })
        
      }
      //Define there for Add mode (mode = "add")
      else{
        this.startDate = new Date();
        this.endDate = new Date();
        this.startTime = new Date('2020-04-01T09:00:00');
        this.endTime = new Date('2020-04-01T10:00:00');
        this.minTime = new Date('2020-04-01T07:00:00');
        this.maxTime = new Date('2020-04-01T18:00:00');
        this.dayArr = [
          {day: "Sunday", value: "SU", selected: false},
          {day: "Monday", value: "MO", selected: true},
          {day: "Tuesday", value: "TU", selected: false},
          {day: "Wednesday", value: "WE", selected: false},
          {day: "Thursday", value: "TH", selected: false},
          {day: "Friday", value: "FR", selected: false},
          {day: "Saturday", value: "SA", selected: false},
        ]
      }

      this.recurrenceRule = ""
      this.endTimeErrorMessage = ""
      this.startTimeErrorMessage = ""
      this.repeatOnErrorMessage = ""
      this.errorMessage = ""
      this.isDisabled = false
      this.weeklyRepeatOnDayArr = []
      

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
    }

    get f() { return this.SetProgramScheduleForm.controls; }
    
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
      if(event < this.minTime || event > this.maxTime){
        this.startTimeErrorMessage = "*From 7AM to 6PM"
      }
      else{
        this.startTimeErrorMessage = ""
      }
  }

  onChangeEndTime(event){
    if(event < this.minTime || event > this.maxTime){
      this.endTimeErrorMessage = "*From 7AM to 6PM"
    }
    else{
      this.endTimeErrorMessage = ""
    }

}

    closeModal() {
      this.dialogRef.close("No");
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

      //Set up recurrence rule
      this.recurrenceRule = "FREQ=WEEKLY" + ";BYDAY=" + this.weeklyRepeatOnDayArr.join(",") 
                              + ";UNTIL=" + dateEndRepeat

      this.currentScheduleSetting = {
          ScheduleSettingPK: 0,
          ProgramPK: this.modalData.programPK,
          Title: this.modalData.name,
          Description: this.eventDescription,
          StartTimezone: "",
          Start: eventStartDateTime,
          End: eventEndDateTime,   
          EndTimezone: "",            
          RecurrenceRule: this.recurrenceRule,
          EndRepeatDate: new Date(dateEndRepeat),
          RepeatDay: this.weeklyRepeatOnDayArr.join(","),
          RecurrenceID: "",
          RecurrenceException: "",
          Color: this.modalData.color,
          CreatedBy: this.modalData.userPK,        
          IsActive: true,
          IsAllDay: false
      };
      
      if(this.weeklyRepeatOnDayArr.length == 0){        
        this.repeatOnErrorMessage = "Must select at least one day."
      }
      else{
        //If the mode is "add"
        if(this.modalData.mode == "add"){
          this.programScheduleServices.addNewScheduleSetting(this.currentScheduleSetting).subscribe(res=>{
              if(res.error){
                this.isDisabled = true
                this.errorMessage = res.error            
              }
              else{
                this.isDisabled = false
                if(!this.isDisabled){
                  this.dialogRef.close("Yes")
                }              
              }            
            })
        }
        //If the mode is "edit"
        else{
          this.currentScheduleSetting.ScheduleSettingPK = this.modalData.event.ScheduleSettingPK
          this.programScheduleServices.updateScheduleSetting(this.currentScheduleSetting).subscribe(res => {
            console.log(res)
            if(res.error){
              this.isDisabled = true
              this.errorMessage = res.error            
            }
            //if there is no error
            else{            
              this.isDisabled = false
              if(!this.isDisabled){
                this.dialogRef.close("Yes")
              }              
            }  
          })
        }
      }        
    }
    
}