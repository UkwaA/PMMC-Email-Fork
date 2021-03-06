import {Component, OnInit, Input, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PaletteSettings } from '@progress/kendo-angular-inputs';
import { ProgramScheduleService } from 'src/app/services/schedule.services';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalDialogComponent } from '../../components/modal-dialog/modal-dialog.component';
import { Session } from 'protractor';
import { AppConstants } from "../../constants";
import { ConnectedPositionStrategy } from '@angular/cdk/overlay';

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
	allSessions: any = []
	allEditedSessions: any = []

	todayDate:any = new Date();
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

	currentBlackoutDate = {
		ProgramBlackoutDatePK: 0,
		ProgramPK: 0,
		Description: "",
		Start: "",
		End: "",
		CreatedBy: 0,
		IsActive: true
	}


    constructor(public dialogRef: MatDialogRef<AddScheduleModalDialogComponent>,
        private fb: FormBuilder, private programScheduleServices: ProgramScheduleService,
        private router: Router, public matDialog: MatDialog,
        @Inject(MAT_DIALOG_DATA) public modalData: any){}

    ngOnInit(){
      switch(this.modalData.mode){
			case "newschedule":
				this.startDate = new Date()
				this.endDate = new Date()
				this.scheduleSettingName = ""
				break;
				
			case "editschedule":
				this.startDate = new Date(this.modalData.currentScheduleSetting.Start)
				this.endDate = new Date(this.modalData.currentScheduleSetting.End)
				this.scheduleSettingName = this.modalData.currentScheduleSetting.ScheduleSettingName
				this.allSessions = this.modalData.allSessions
				this.allSessions.forEach(session =>{
					if(session.ScheduleSettingPK == this.modalData.currentScheduleSetting.ScheduleSettingPK){
						this.allEditedSessions.push(session)
					}
				})
				break;
				
			case "editsession":
				this.startDate = this.modalData.currentScheduleSetting.Start
				this.endDate = new Date(this.modalData.currentSession.EndRepeatDate+"T23:00:00")
				this.startTime = new Date(this.modalData.currentSession.Start)
				this.endTime = new Date(this.modalData.currentSession.End)
				this.minTime = new Date(this.startTime.toISOString().slice(0,10) + "T07:00:00")
				this.maxTime = new Date(this.startTime.toISOString().slice(0,10) + "T18:00:00")
				this.eventDescription = this.modalData.currentSession.Description
				this.dayArr.forEach(day =>{
					if(this.modalData.currentSession.RepeatDay.indexOf(day.value) >= 0){
						day.selected = true
					}
					else{
						day.selected = false
					}
				})
				break;

			case "newsession":
				this.startDate = this.modalData.currentScheduleSetting.Start
				this.endDate = this.modalData.currentScheduleSetting.End
				this.startTime = new Date('2020-04-01T09:00:00')
				this.endTime = new Date('2020-04-01T10:00:00')
				this.minTime = new Date('2020-04-01T07:00:00')
				this.maxTime = new Date('2020-04-01T18:00:00')
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

			case "newadditionalsession":
				this.startDate = new Date()
				this.startTime = new Date('2020-04-01T09:00:00')
				this.endTime = new Date('2020-04-01T10:00:00')
				this.minTime = new Date('2020-04-01T07:00:00')
				this.maxTime = new Date('2020-04-01T18:00:00')
				break;

			case "editadditionalsession":
				this.startDate = new Date(this.modalData.currentSession.Start)
				this.startTime = new Date(this.modalData.currentSession.Start)
				this.endTime = new Date(this.modalData.currentSession.End)
				this.minTime = new Date(this.startTime.toISOString().slice(0,10) + "T07:00:00")
				this.maxTime = new Date(this.startTime.toISOString().slice(0,10) + "T18:00:00")
				break;
			
			case "editsingleschedule":
				this.startDate = new Date(this.modalData.currentScheduleDetails.Start)
				this.startTime = new Date(this.modalData.currentScheduleDetails.Start)
				this.endTime = new Date(this.modalData.currentScheduleDetails.End)
				this.minTime = new Date(this.startTime.toISOString().slice(0,10) + "T07:00:00")
				this.maxTime = new Date(this.startTime.toISOString().slice(0,10) + "T18:00:00")				
				break;

			case "addblackoutdate":
				this.startDate = new Date()
				this.endDate = new Date()				
				break;
			
			case "editblackoutdate":
				this.startDate = new Date(this.modalData.currentBlackoutDate.Start)
				this.endDate = new Date(this.modalData.currentBlackoutDate.End)
				this.eventDescription = this.modalData.currentBlackoutDate.Description
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
		if(event < this.startTime){
			this.endTime = this.startTime
			this.endTimeErrorMessage = "End Time must be after Start Time"
		}
		else{
			this.endTimeErrorMessage = ""
		}
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
      var dateEndRepeat = (new Date(this.endDate)).toISOString().slice(0,10)
      
      var eventStartDateTime = (new Date(eventStartDate + "T" + eventStartTime)).toISOString()
      var eventEndDateTime = (new Date(eventStartDate + "T" + eventEndTime)).toISOString()   

      //Set up recurrence rule
      this.recurrenceRule = "FREQ=WEEKLY" + ";BYDAY=" + this.weeklyRepeatOnDayArr.join(",") 
                              + ";UNTIL=" + dateEndRepeat + "T23:00:00"

      this.currentSessionDetail = {
			SessionDetailsPK: 0,			
			ProgramPK: this.modalData.programPK,
			ScheduleSettingPK: AppConstants.ADDITIONAL_SESSION_DETAIL,
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
          (this.modalData.mode == "newsession" || this.modalData.mode == "editsession")){        
        	this.repeatOnErrorMessage = "Must select at least one day."
      }
      else{
			this.currentScheduleSetting = {
				ScheduleSettingPK: 0,
				ProgramPK: this.modalData.programPK,
				ScheduleSettingName: this.scheduleSettingName,
				Start: (new Date(eventStartDate + "T06:00:00")).toISOString(),
				End: (new Date(dateEndRepeat + "T16:59:00")).toISOString(),
				IsActive: true,
				CreatedBy: this.modalData.userPK
				}

			this.currentBlackoutDate = {
				ProgramBlackoutDatePK: 0,
				ProgramPK: this.modalData.programPK,
				Description: this.eventDescription,
				Start: "",
				End: "",
				CreatedBy: this.modalData.userPK,
				IsActive: true
				}
        	switch(this.modalData.mode){
				//======= ADD NEW SCHEDULE ===========
				case "newschedule":									
						if(this.currentScheduleSetting.ScheduleSettingName){
							this.programScheduleServices.addNewScheduleSetting(this.currentScheduleSetting).subscribe(res => {
								if(res.error){
									this.isDisabled = true
									this.newScheduleErrorMessage = res.error
								}
								else{										
									this.isDisabled = false
									this.currentScheduleSetting.ScheduleSettingPK = res
									if(!this.isDisabled){
										this.dialogRef.close("Yes")
									}   
								}
							})			
						}
						else{
							this.scheduleNameErrorMessage = "Schedule Name is required."
						}
						break;
				
				//======= UPDATE CURRENT SCHEDULE ===========
				case "editschedule":			
						this.currentScheduleSetting.ScheduleSettingPK = this.modalData.currentScheduleSetting.ScheduleSettingPK
						//3. Update all records in sessiondetails table associated with this ScheduleSettingPK
						this.allEditedSessions.forEach(session =>{
							var tempStartDate = this.startDate.toISOString().slice(0,10)
							var tempEndDate = this.endDate.toISOString().slice(0,10) //End repeatdate
							var tempStartTime = (new Date(session.Start)).toLocaleString('en-US', this.timeFormatOptions)
							var tempEndTime = (new Date(session.End)).toLocaleString('en-US', this.timeFormatOptions)
							
							//Edit the Start, End, EndRepeatDate
							session.Start = (new Date(tempStartDate + "T" + tempStartTime)).toISOString()
							session.End = (new Date(tempStartDate + "T" + tempEndTime)).toISOString()
							session.EndRepeatDate = tempEndDate
							//Edit the RecurrenceRule
							var tempIndex = session.RecurrenceRule.indexOf("UNTIL")
							session.RecurrenceRule = session.RecurrenceRule.substring(0,tempIndex+6) + tempEndDate + "T23:00:00"

						})					
						
						if(this.currentScheduleSetting.ScheduleSettingName){
						//1. Check if the new Start/End Date are within any other schedule							
							//2. Then update the record in schedulesetting table
							this.programScheduleServices.updateScheduleSetting(this.currentScheduleSetting).subscribe(res =>{
								if(res.error){
									this.isDisabled = true
									this.newScheduleErrorMessage = res.error        
								}
								else{
									this.isDisabled = false
									if(!this.isDisabled){
										this.dialogRef.close("Yes")
									}              
								} 
							})

							//3. Update all records in sessiondetails table associated with this ScheduleSettingPK
							this.programScheduleServices.updateScheduleSettingSessionDetails(this.allEditedSessions).subscribe(res =>{
								console.log(res)
							})					
						}
						else{
							this.scheduleNameErrorMessage = "Schedule Name is required."
						}
						break;

				//======= ADD NEW SESSION ===========
				case "newsession":
					this.currentSessionDetail.ScheduleSettingPK = this.modalData.currentScheduleSetting.ScheduleSettingPK
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
				//======= EDIT SESSION ===========
				case "editsession":
					this.currentSessionDetail.ScheduleSettingPK = this.modalData.currentSession.ScheduleSettingPK
					this.currentSessionDetail.SessionDetailsPK = this.modalData.currentSession.SessionDetailsPK					
					this.programScheduleServices.updateSessionDetails(this.currentSessionDetail).subscribe(res => {
						if(res.error){
							this.isDisabled = true
							this.errorMessage = res.error            
						}
						//if there is no error
						else{							
							//updateSessionDetails return array of schedules, 
							//then call UpdateScheduleinBulks to update records in schedule table
							this.programScheduleServices.updateSchedulesInBulk(res).subscribe(result =>{
								if(!result.error)
								{
									this.isDisabled = false
									if(!this.isDisabled){
										this.dialogRef.close("Yes")
									}
								}
							})						              
						}  
					})
					break;
				//======= ADD NEW ADDITIONAL SESSION ===========
				case "newadditionalsession":
					this.currentSessionDetail.RecurrenceRule = ""
					this.currentSessionDetail.EndRepeatDate = null
					this.currentSessionDetail.RepeatDay = ""					
					this.programScheduleServices.addNewAdditionalSessionDetails(this.currentSessionDetail).subscribe(res=>{
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
				
				//======= EDIT ADDITIONAL SESSION ===========
				case "editadditionalsession":
					this.currentSessionDetail.ScheduleSettingPK = this.modalData.currentSession.ScheduleSettingPK
					this.currentSessionDetail.SessionDetailsPK = this.modalData.currentSession.SessionDetailsPK	
					this.currentSessionDetail.RecurrenceRule = ""
					this.currentSessionDetail.EndRepeatDate = null
					this.currentSessionDetail.RepeatDay = ""
					this.programScheduleServices.updateAdditionalSessionDetails(this.currentSessionDetail).subscribe(res =>{
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

				//======= EDIT SINGLE SCHEDULE (in View Schedule Page) ===========
				case "editsingleschedule":
					var newStartEndTimeObject:any = {
						SchedulePK: this.modalData.currentScheduleDetails.SchedulePK,
						ProgramName: this.modalData.currentScheduleDetails.Name,
						Start: eventStartDateTime,
						End: eventEndDateTime
					};
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
						title: "Update Schedule",
						description: this.modalData.description,
						mode: "editsingleschedule",
						actionButtonText: "Confirm",
						numberOfButton: "2"
						}
					const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
					modalDialog.afterClosed().subscribe(result =>{
						if(result == "Yes"){
							this.programScheduleServices.updateSingleScheduleAndSendEmail(newStartEndTimeObject).subscribe(res =>{
								if(res.error){
									this.isDisabled = true;
									this.endTimeErrorMessage = res.error;
								}
								else{
									this.endTimeErrorMessage = "";
									this.isDisabled = false
									if(!this.isDisabled){
										this.dialogRef.close(newStartEndTimeObject)
									}              
								}
							})							
						}
						else{
							console.log("stop")                
						}
					})
					
					break;
				
				//======= ADD BLACKOUT DATE ===========
				case "addblackoutdate":
					this.currentBlackoutDate.Start = (new Date(eventStartDate + "T06:00:00")).toISOString()
					this.currentBlackoutDate.End = (new Date(dateEndRepeat + "T16:59:00")).toISOString()
					
					this.programScheduleServices.addBlackoutDate(this.currentBlackoutDate).subscribe(res =>{
						if(res.error){
							this.isDisabled = true
							this.newScheduleErrorMessage = res.error            
						}
						else{
							this.isDisabled = false
							if(!this.isDisabled){
								this.dialogRef.close("Yes")
							}              
						}
					})				
					break;
				
				//======= EDIT BLACKOUT DATE ===========					
				case "editblackoutdate":
					this.currentBlackoutDate.ProgramBlackoutDatePK = this.modalData.currentBlackoutDate.ProgramBlackoutDatePK
					this.currentBlackoutDate.Start = (new Date(eventStartDate + "T06:00:00")).toISOString()
					this.currentBlackoutDate.End = (new Date(dateEndRepeat + "T16:59:00")).toISOString()
					this.programScheduleServices.updateBlackoutDate(this.currentBlackoutDate).subscribe(res => {
						if(res.error){
							this.isDisabled = true
							this.newScheduleErrorMessage = res.error            
						}
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