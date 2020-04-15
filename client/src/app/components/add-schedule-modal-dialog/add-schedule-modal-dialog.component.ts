import {Component, OnInit, Input, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PaletteSettings } from '@progress/kendo-angular-inputs';
import { ProgramScheduleService } from 'src/app/services/schedule.services';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalDialogComponent } from '../../components/modal-dialog/modal-dialog.component';

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
	endDateErrorMessage = ""
	newScheduleErrorMessage = ""
	scheduleNameErrorMessage = ""
	isDisabled = false
	submitted = false

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
    
	currentSessionDetail = {
		SessionDetailsPK: 0,		
		ProgramPK: 0,
		ScheduleSettingPK: 0,
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

	scheduleSettingName = ""
	currentScheduleSetting = {
      ScheduleSettingPK: 0,
      ProgramPK: 0,
      ScheduleSettingName: "",
      Start: "",
      End: "",
      IsActive: true,
      CreatedBy: 0
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
        private router: Router, public matDialog: MatDialog,
        @Inject(MAT_DIALOG_DATA) private modalData: any){}

    ngOnInit(){
      switch(this.modalData.mode){
          case "newschedule":
            this.startDate = new Date()
            this.endDate = new Date()
            this.scheduleSettingName = ""
            break;
          
          case "editsession":
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
              break;

          case "addsession":
              this.startDate = this.modalData.currentScheduleSetting.Start;
              this.endDate = this.modalData.currentScheduleSetting.End;
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
              break;
      }      

      this.recurrenceRule = ""
      this.endTimeErrorMessage = ""
      this.startTimeErrorMessage = ""
      this.repeatOnErrorMessage = ""
      this.errorMessage = ""
      this.endDateErrorMessage = ""
		this.newScheduleErrorMessage = ""
		this.scheduleNameErrorMessage = ""
      this.isDisabled = false
      this.weeklyRepeatOnDayArr = []      

      this.dayArr.forEach(day =>{
        if(day.selected){
            this.weeklyRepeatOnDayArr.push(day.value)
        }
    	})

      this.SetProgramScheduleForm = this.fb.group({    
        programName: [],
        scheduleName: ['', Validators.required],
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

  onChangeEndDate(event){
    if(event < this.startDate){
        this.endDate = this.startDate
        this.endDateErrorMessage = "End Date must be after Start Date"
    }      
    else{
        this.endDateErrorMessage = ""
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

    removeSchedule(){
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
          title: "Delete schedule",
          description: "Are you sure to delete this schedule?",            
          actionButtonText: "Confirm",   
          numberOfButton: "2"         
          }
      const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
      modalDialog.afterClosed().subscribe(result =>{
          if(result == "Yes"){
            //TODO:
            //1. Set IsActive in schedulesetting to 0 (false)
            //2. Set IsActive in schedule to 0 (how to get all entries in schedule? maybe add ScheduleSettingPK to schedule table)
            //3. Send email to all customer that currently are in the reservation relating this schedule
            let scheduleToDeactivate = {
              ScheduleSettingPK: this.modalData.event.ScheduleSettingPK
            }
            
            this.programScheduleServices.deactivateSessionDetails(scheduleToDeactivate).subscribe(res=>{
              console.log(res)
            })
            this.isDisabled = false
            if(!this.isDisabled){
              this.dialogRef.close("Yes")
            }
          }
          else{
              console.log("stop")                
          }
      })      
    }

    setSchedule(){
      // this.submitted = true;
      //   if (this.SetProgramScheduleForm.invalid) {
      //       return;
      //   }          
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

      this.currentSessionDetail = {
			SessionDetailsPK: 0,			
			ProgramPK: this.modalData.programPK,
			ScheduleSettingPK: this.modalData.currentScheduleSetting.ScheduleSettingPK,
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
      
      if(this.weeklyRepeatOnDayArr.length == 0 && 
          (this.modalData.mode == "addsession" || this.modalData.mode == "editsession")){        
        this.repeatOnErrorMessage = "Must select at least one day."
      }
      else{
        	switch(this.modalData.mode){
          	case "newschedule":
					this.currentScheduleSetting = {
							ScheduleSettingPK: 0,
							ProgramPK: this.modalData.programPK,
							ScheduleSettingName: this.scheduleSettingName,
							Start: this.startDate.toString(),
							End: this.endDate.toString(),
							IsActive: true,
							CreatedBy: this.modalData.userPK
					}
					//console.log(this.currentScheduleSetting)
					if(this.currentScheduleSetting.ScheduleSettingName){
						if(this.endDate < this.modalData.allScheduleSetting[this.modalData.allScheduleSetting.length - 1].Start
							|| this.startDate > this.modalData.allScheduleSetting[0].End){                
								this.programScheduleServices.addNewScheduleSetting(this.currentScheduleSetting).subscribe(res => {
									if(!res.message){
										this.isDisabled = true
									}
									else{
										this.isDisabled = false
										if(!this.isDisabled){
											this.dialogRef.close("Yes")
										}   
									}
								})
						}
						else{
							this.isDisabled = true
							this.newScheduleErrorMessage = "The Start/End date falls between existing schedules. Please select another Start/End Date."
						}
					}
					else{
						this.scheduleNameErrorMessage = "Schedule Name is required."
					}
					break;

			case "addsession":
				this.programScheduleServices.addNewSessionDetails(this.currentSessionDetail).subscribe(res=>{
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
				break;

			case "editsession":
				this.currentSessionDetail.ScheduleSettingPK = this.modalData.event.ScheduleSettingPK
				this.programScheduleServices.updateSessionDetails(this.currentSessionDetail).subscribe(res => {
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
				break;
			}         
      }        
    }
    
}