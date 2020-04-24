import { Component, EventEmitter } from '@angular/core'
import { ProgramData } from '../../data/program-data';
import { ProgramServices } from '../../services/program.services'
import { MatDialogConfig, MatDialog, MatCard, MatSelect, MatDatepickerInputEvent, MatCheckboxChange } from '@angular/material';
import { AddScheduleModalDialogComponent } from '../../components/add-schedule-modal-dialog/add-schedule-modal-dialog.component';
import { ModalDialogComponent } from "../../components/modal-dialog/modal-dialog.component";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProgramScheduleData } from '../../data/program-schedule-data';
import { ProgramScheduleService } from '../../services/schedule.services';
import { AuthenticationService} from '../../authentication.service';
import { PaletteSettings } from '@progress/kendo-angular-inputs';
import { SchedulerModelFields } from '@progress/kendo-angular-scheduler';
import { AppConstants } from "../../constants";
declare var $: any;
@Component({
    templateUrl: './set-program-schedule.component.html',
    styleUrls: ['./set-program-schedule.component.css']
})

export class SetProgramScheduleComponent {
	ProgramPK = 0;
	currentUserPK = 0;
	allBlackoutDates: any[] = []
	allSessions: any[] = [];
	allAdditionalSessions:any[] = [];
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

    allScheduleSettings: any = []
    currentScheduleSetting = {
        ScheduleSettingPK: -1,
        ProgramPK: 0,
        ScheduleSettingName: "",
        Start: "",
        End: "",
        IsActive: true,
        CreatedBy: 0,
        tempStart: "",
        tempEnd: "",
        IsSelected: true
    }

	currentSessionDetails = {
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
	hasSchedule = false;
	hasSession = false; 
	hasAdditionalSession = false;
	hasBlackoutDate = false;

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
	programColorMessage = ""
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
	
	/********************************************
	 * FUNCTION DECLARATION
	*********************************************/
	reloadAllScheduleSettingsByProgramPK(){
		this.hasSchedule = false
		this.programScheduleServices.getAllScheduleSettingsByProgram(this.ProgramPK).subscribe(res =>{
			if(!res.error){
				this.allScheduleSettings = res
				if(this.allScheduleSettings.length > 0){
					this.hasSchedule = true
					this.allScheduleSettings.forEach(schedule => {
							schedule.tempStart = (new Date(schedule.Start)).toLocaleDateString()
							schedule.tempEnd = (new Date(schedule.End)).toLocaleDateString()
							schedule.Start = new Date(schedule.Start)
							schedule.End = new Date(schedule.End)
					})
					//Fix error when there's only 1 schedule setting
					if(this.allScheduleSettings.length == 1){
						this.currentScheduleSetting = this.allScheduleSettings[0]
						this.currentScheduleSetting.IsSelected = true
					}
					else if(this.allScheduleSettings.length > 1){																						
						this.allScheduleSettings.forEach(schedule =>{
							if(schedule.ScheduleSettingPK == this.currentScheduleSetting.ScheduleSettingPK){
								schedule.IsSelected = true
								this.currentScheduleSetting = schedule
							}
						})

					}												
				}
			}	
		})
	}

	reloadAllSessions(){
		this.hasSession = false
		this.hasAdditionalSession = false
		this.programScheduleServices.getSessionDetailsById(this.ProgramPK).subscribe((schedules) =>{
			const sampleDataWithCustomSchema = schedules.map(dataItem => (                                
				{
					...dataItem,
					SessionDetailsPK: dataItem.SessionDetailsPK,
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
					tempEnd: (new Date(dataItem.End)).toLocaleString('en-US', this.timeFormatOptions),
					tempDate: (new Date(dataItem.Start)).toLocaleDateString(),
					tempFullDate: (new Date(dataItem.Start))
				}
			));			
			this.allSessions = sampleDataWithCustomSchema
			
			//Reload the session table with selected schedule
			this.dayArr.forEach(day =>{
				day.eventList = []
			})
			this.allAdditionalSessions = []
			this.allSessions.forEach(session =>{
				if(session.ScheduleSettingPK == this.currentScheduleSetting.ScheduleSettingPK){
				//for each event, check if the Repeat Day is in the list of dayArr => yes, append to eventList
					this.hasSession = true
					this.dayArr.forEach(day =>{
						if(session.RepeatDay.indexOf(day.value) >= 0){
								day.eventList.push(session)
						}                        
					})
				}
				else if(session.ScheduleSettingPK == AppConstants.ADDITIONAL_SESSION_DETAIL){
					this.allAdditionalSessions.push(session)
					this.hasAdditionalSession = true
				}
			})
			//Sort allAdditionalSessions array by date
			this.allAdditionalSessions.sort(function(a,b){
				// Turn your strings into dates, and then subtract them
				// to get a value that is either negative, positive, or zero.
				return b.tempFullDate - a.tempFullDate;
			});					
	})
	}

	reloadAllBlackoutDates(){
		this.programScheduleServices.getAllBlackoutDatesByProgram(this.ProgramPK).subscribe(res =>{
			this.allBlackoutDates = res
			if(this.allBlackoutDates.length > 0)
			{
				this.hasBlackoutDate = true;
				this.allBlackoutDates.forEach(date =>{
				date.tempStart = (new Date(date.Start)).toLocaleDateString()
				date.tempEnd = (new Date(date.End)).toLocaleDateString()
				})
			}
		})
	}
	/*********************  END FUNCTION DECLARATION **********************/

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
			this.currentSessionDetails.CreatedBy = user.UserPK
		}) 
		
		//Get current program header info
		this.route.params.subscribe(val =>{
			this.ProgramPK = val.id
			//Get all current schedule settings			
			this.programScheduleServices.getAllScheduleSettingsByProgram(this.ProgramPK).subscribe(res =>{
				if(!res.error){
					this.allScheduleSettings = res
					if(this.allScheduleSettings.length > 0){
						this.hasSchedule = true
						this.allScheduleSettings.forEach(schedule => {
								schedule.tempStart = (new Date(schedule.Start)).toLocaleDateString()
								schedule.tempEnd = (new Date(schedule.End)).toLocaleDateString()
								schedule.Start = new Date(schedule.Start)
								schedule.End = new Date(schedule.End)
						})									
						this.currentScheduleSetting = this.allScheduleSettings[0]
						this.allScheduleSettings[0].IsSelected = true
					}
				}	
			})

			this.programScheduleServices.getSessionDetailsById(this.ProgramPK).subscribe((schedules) =>{
					const sampleDataWithCustomSchema = schedules.map(dataItem => (                                
						{
							...dataItem,
							SessionDetailsPK: dataItem.SessionDetailsPK,
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
							tempEnd: (new Date(dataItem.End)).toLocaleString('en-US', this.timeFormatOptions),
							tempDate: (new Date(dataItem.Start)).toLocaleDateString(),
							tempFullDate: (new Date(dataItem.Start))
						}
					));
					this.allSessions = sampleDataWithCustomSchema
					if(this.allSessions.length > 0){
						this.selectedColor = this.allSessions[0].Color						
					}
					//Loop through all allSessions
					this.allSessions.forEach(session =>{
						if(session.ScheduleSettingPK == this.currentScheduleSetting.ScheduleSettingPK){
						//for each event, check if the Repeat Day is in the list of dayArr => yes, append to eventList	
							this.hasSession = true
							this.dayArr.forEach(day =>{
								if(session.RepeatDay.indexOf(day.value) >= 0){
										day.eventList.push(session)
								}                        
							})
						}
						else if(session.ScheduleSettingPK == AppConstants.ADDITIONAL_SESSION_DETAIL){
							this.allAdditionalSessions.push(session)
							this.hasAdditionalSession = true
						}
					})				

					//Sort allAdditionalSessions array by date
					this.allAdditionalSessions.sort(function(a,b){
						// Turn your strings into dates, and then subtract them
						// to get a value that is either negative, positive, or zero.
						return b.tempFullDate - a.tempFullDate;
					});					
				})

			this.programServices.getProgramHeaderDeatailsByID(this.ProgramPK).subscribe(res =>{
				this.programData = res
			})	
			this.programScheduleServices.getAllBlackoutDatesByProgram(this.ProgramPK).subscribe(res =>{
				this.allBlackoutDates = res
				if(this.allBlackoutDates.length > 0)
				{
					this.hasBlackoutDate = true;
					this.allBlackoutDates.forEach(date =>{
						date.tempStart = (new Date(date.Start)).toLocaleDateString()
						date.tempEnd = (new Date(date.End)).toLocaleDateString()
					})
				}
			})		
		})
	}

    // convenience getter for easy access to form fields
	get f() { return this.SetProgramScheduleForm.controls; }
    
	viewSchedule(schedule){
		console.log(schedule)        
		this.allScheduleSettings.forEach(schedule => {
			schedule.IsSelected = false
		})
		schedule.IsSelected = true
		this.currentScheduleSetting = schedule
		//Reload the session table with selected schedule
		this.dayArr.forEach(day =>{
			day.eventList = []
		})
		
		this.allSessions.forEach(session =>{
			if(session.ScheduleSettingPK == this.currentScheduleSetting.ScheduleSettingPK){
			//for each event, check if the Repeat Day is in the list of dayArr => yes, append to eventList
				this.dayArr.forEach(day =>{
					if(session.RepeatDay.indexOf(day.value) >= 0){
							day.eventList.push(session)
					}                        
				})
			}
		})
	}

	/**********************************
	 * SCHEDULE SETTING
	***********************************/
    addNewScheduleModal(){
        //Configure Modal Dialog
        const dialogConfig = new MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose = true;
        dialogConfig.id = "add-schedule-modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "600px";
        dialogConfig.width = "700px";
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            title: "Add new schedule",
            mode: "newschedule",
            description: "",
            programPK: this.ProgramPK,
            name: this.programData.Name,
            userPK: this.currentUserPK,
            color: this.selectedColor,
            currentScheduleSetting: this.currentScheduleSetting,
            allScheduleSetting: this.allScheduleSettings,            
            actionButtonText: "Save",   
            numberOfButton: "2"         
            }
        const addScheduleModalDialog = this.matDialog.open(AddScheduleModalDialogComponent, dialogConfig);
        addScheduleModalDialog.afterClosed().subscribe(res =>{
            if(res == "Yes"){
				this.reloadAllScheduleSettingsByProgramPK()
            }
            else{
                console.log("stop")                
            }
        })
    }

	editScheduleModal(currentScheduleSetting){
		//Configure Modal Dialog
		const dialogConfig = new MatDialogConfig();
		// The user can't close the dialog by clicking outside its body
		dialogConfig.disableClose = true;
		dialogConfig.id = "edit-schedule-modal-component";
		dialogConfig.height = "auto";
		dialogConfig.maxHeight = "600px";
		dialogConfig.width = "700px";
		dialogConfig.autoFocus = false;
		dialogConfig.data = {
			 title: "Edit schedule",
			 mode: "editschedule",
			 description: "",
			 programPK: this.ProgramPK,
			 name: this.programData.Name,
			 userPK: this.currentUserPK,
			 currentScheduleSetting: currentScheduleSetting,
			 allScheduleSetting: this.allScheduleSettings,  
			 allSessions: this.allSessions,          
			 actionButtonText: "Save",   
			 numberOfButton: "2"         
			 }
		const addScheduleModalDialog = this.matDialog.open(AddScheduleModalDialogComponent, dialogConfig);
		addScheduleModalDialog.afterClosed().subscribe(res =>{
			if(res == "Yes"){
				this.reloadAllScheduleSettingsByProgramPK()
				this.reloadAllSessions()
			}
			else{
				console.log("stop")                
			}
		})
	}

	removeScheduleSetting(scheduleSetting){
		//Configure Modal Dialog
        const dialogConfig = new MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose = true;
        dialogConfig.id = "remove-schedule-modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "600px";
        dialogConfig.width = "350px";
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            title: "Remove schedule",
            mode: "removeschedule",
			description: "This action will also affect the sessions that are currently reserved by customers. "
				+ "Customers will receive emails about this cancellation. Are you sure to remove this session?",
            actionButtonText: "Remove",
            numberOfButton: "2"            
            }
        const addScheduleModalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
        addScheduleModalDialog.afterClosed().subscribe(result =>{
            if(result == "Yes"){
				//Set IsActive to false in schedulesetting, sessiondetail, and schedule table
				this.programScheduleServices.deactiveScheduleSetting(scheduleSetting).subscribe(res =>{
					if(res.message){
						this.reloadAllScheduleSettingsByProgramPK()
						this.reloadAllSessions()
					}					
				})
            }
            else{
                console.log("stop")                
            }
        })
	}

	/**********************************
	 * SESSION DETAILS
	***********************************/
	addNewSessionDetailsModal(){
		//Configure Modal Dialog
		const dialogConfig = new MatDialogConfig();
		// The user can't close the dialog by clicking outside its body
		dialogConfig.disableClose = true;
		dialogConfig.id = "add-session-modal-component";
		dialogConfig.height = "auto";
		dialogConfig.maxHeight = "600px";
		dialogConfig.width = "700px";
		dialogConfig.autoFocus = false;
		dialogConfig.data = {
			title: "Add new session",
			mode: "newsession",
			description: "",
			programPK: this.ProgramPK,
			name: this.programData.Name,
			userPK: this.currentUserPK,
			color: this.selectedColor,
			currentScheduleSetting: this.currentScheduleSetting,
			actionButtonText: "Save",   
			numberOfButton: "2"         
			}
		const addScheduleModalDialog = this.matDialog.open(AddScheduleModalDialogComponent, dialogConfig);
		addScheduleModalDialog.afterClosed().subscribe(result =>{
			if(result == "Yes"){				
				this.reloadAllSessions()
			}
			else{
					console.log("stop")                
			}
		})
    }

    updateSessionDetailsModal(session){
        //Configure Modal Dialog
        const dialogConfig = new MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose = true;
        dialogConfig.id = "update-session-modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "600px";
        dialogConfig.width = "700px";
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            title: "Edit session",
            mode: "editsession",
            description: "This action will also affect the sessions that are currently reserved by customers. "
			+ "Customers will receive emails about this change. Are you sure to edit this session?",
            programPK: this.ProgramPK,
            name: this.programData.Name,
			userPK: this.currentUserPK,			
			currentSession: session,
			currentScheduleSetting: this.currentScheduleSetting,			
            actionButtonText: "Update",   
            numberOfButton: "2"            
            }
        const addScheduleModalDialog = this.matDialog.open(AddScheduleModalDialogComponent, dialogConfig);
        addScheduleModalDialog.afterClosed().subscribe(result =>{
            if(result == "Yes"){
                this.reloadAllSessions()
            }
            else{
                console.log("stop")                
            }
        })
    }

	//Set record in sessiondetails and schedule table that are associated to the SessionDetailsPK (IsActive: false)
	removeSessionDetailsModal(session){
		//Configure Modal Dialog
        const dialogConfig = new MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose = true;
        dialogConfig.id = "remove-session-modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "600px";
        dialogConfig.width = "350px";
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            title: "Remove session",
            mode: "removesession",
			description: "This action will also affect the sessions that are currently reserved by customers. "
				+ "Customers will receive emails about this cancellation. Are you sure to remove this session?",
            actionButtonText: "Remove",
            numberOfButton: "2"            
            }
        const addScheduleModalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
        addScheduleModalDialog.afterClosed().subscribe(result =>{
            if(result == "Yes"){
				//Set IsActive to false in sessiondetail table
				this.programScheduleServices.deactivateSessionDetails(session).subscribe(res =>{
					console.log(res.message)
					this.reloadAllSessions()
				})
                
            }
            else{
                console.log("stop")                
            }
        })
	}

	/**********************************
	 * ADDTIONAL SESSION DETAILS
	***********************************/
	addNewAdditionalSessionDetailsModal(){
		//Configure Modal Dialog
		const dialogConfig = new MatDialogConfig();
		// The user can't close the dialog by clicking outside its body
		dialogConfig.disableClose = true;
		dialogConfig.id = "add-additional-session-modal-component";
		dialogConfig.height = "auto";
		dialogConfig.maxHeight = "600px";
		dialogConfig.width = "700px";
		dialogConfig.autoFocus = false;
		dialogConfig.data = {
			title: "Add new additional session",
			mode: "newadditionalsession",
			description: "",
			programPK: this.ProgramPK,
			name: this.programData.Name,
			userPK: this.currentUserPK,
			color: this.selectedColor,
			currentScheduleSetting: this.currentScheduleSetting,
			actionButtonText: "Save",   
			numberOfButton: "2"         
			}
		const addScheduleModalDialog = this.matDialog.open(AddScheduleModalDialogComponent, dialogConfig);
		addScheduleModalDialog.afterClosed().subscribe(result =>{
			if(result == "Yes"){				
				this.reloadAllSessions()
			}
			else{
				console.log("stop")                
			}
		})
	}

	updateAdditionalSessionDetailsModal(session){
		//Configure Modal Dialog
        const dialogConfig = new MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose = true;
        dialogConfig.id = "edit-additional-session-modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "600px";
        dialogConfig.width = "700px";
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            title: "Edit additional session",
            mode: "editadditionalsession",
            description: "This action will also affect the sessions that are currently reserved by customers. "
			+ "Customers will receive emails about this change. Are you sure to edit this session?",
            programPK: this.ProgramPK,
            name: this.programData.Name,
			userPK: this.currentUserPK,			
			currentSession: session,			
            actionButtonText: "Update",   
            numberOfButton: "2"            
            }
        const addScheduleModalDialog = this.matDialog.open(AddScheduleModalDialogComponent, dialogConfig);
        addScheduleModalDialog.afterClosed().subscribe(result =>{
            if(result == "Yes"){
                this.reloadAllSessions()
            }
            else{
                console.log("stop")                
            }
        })
	}

	removeAdditionalSessionDetailsModal(session){
		//Configure Modal Dialog
        const dialogConfig = new MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose = true;
        dialogConfig.id = "remove-additional-session-modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "600px";
        dialogConfig.width = "350px";
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            title: "Remove additional session",
            mode: "removeadditionalsession",
			description: "This action will also affect the sessions that are currently reserved by customers. "
				+ "Customers will receive emails about this cancellation. Are you sure to remove this session?",
            actionButtonText: "Remove",
            numberOfButton: "2"            
            }
        const addScheduleModalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
        addScheduleModalDialog.afterClosed().subscribe(result =>{
            if(result == "Yes"){
				//Set IsActive to false in sessiondetail table
				this.programScheduleServices.deactivateSessionDetails(session).subscribe(res =>{
					console.log(res.message)
					this.reloadAllSessions()
				})                
            }
            else{
                console.log("stop")                
            }
        })
	}

	/**********************************
	 * BLACKOUT DATE
	***********************************/
	addBlackoutDateModal(){
		//Configure Modal Dialog
        const dialogConfig = new MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose = true;
        dialogConfig.id = "add-black-out-modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "600px";
        dialogConfig.width = "700px";
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            title: "Add Blackout Date",
            mode: "addblackoutdate",
			description: "",
			programPK: this.ProgramPK,
			name: this.programData.Name,
			userPK: this.currentUserPK,
            actionButtonText: "Save",
            numberOfButton: "2"            
			}			

        const addScheduleModalDialog = this.matDialog.open(AddScheduleModalDialogComponent, dialogConfig);
        addScheduleModalDialog.afterClosed().subscribe(result =>{
            if(result == "Yes"){
				this.reloadAllBlackoutDates()				
            }
            else{
                console.log("stop")                
            }
        })
	}


    setProgramColor(){      
		//save new color in schedulesetting table
		const programColor = {
			ProgramPK: this.ProgramPK,
			selectedColor: this.selectedColor
		}
        this.programScheduleServices.setProgramColor(programColor).subscribe(res =>{
			if(res.message){
				this.programColorMessage = res.message
			}
			else{
				this.programColorMessage = res.error
			}
			setTimeout(()=>{ 
				this.programColorMessage = "";
		   }, 3000);
		})
	}
	
	saveInfo(){

	}
	
}