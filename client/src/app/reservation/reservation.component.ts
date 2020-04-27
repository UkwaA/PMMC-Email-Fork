import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProgramServices } from "../services/program.services";
import { ProgramData } from "../data/program-data";
import { ProgramScheduleService } from "../services/schedule.services";
import {
  SchedulerEvent,
  SchedulerModelFields,
  EventStyleArgs,
} from "@progress/kendo-angular-scheduler";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { QuantiyFormData } from "../data/quantity-form-data";
import { ProgramScheduleData } from "../data/program-schedule-data";
import { MatDialog } from "@angular/material";
import { LoginPromptModal } from "../components/login-prompt-modal/login-prompt-modal.component";
import { AuthenticationService } from "../authentication.service";
import { AppConstants } from "../constants";
import { MatStepper } from "@angular/material/stepper";

/*************  BOOKING GROUP PROGRAM  ******************* */
import { BookingGroupData } from "../data/booking-group-data";
import { BookingIndividualData } from "../data/booking-individual-data";
import { ReservationHeader } from "../data/reservation-header";
import { ValidationErrors } from "@angular/forms";
import { ReservationGroupDetails } from "../data/reservation-group-details";
import { ReservationIndividualDetails } from '../data/reservation-individual-details';
import { addDays } from '@progress/kendo-date-math';

@Component({
  templateUrl: "./reservation.component.html",
  styleUrls: ["./reservation.component.css"],
})
export class ReservationComponent implements OnInit {
  @ViewChild('stepper', { static: false }) private myStepper: MatStepper;

  ProgramPK: number;
  stepOneIsCompleted = false;
  stepTwoIsCompleted = false;
  stepThreeIsCompleted = false;

  // Data Model to store User Input
  reservationHeader = new ReservationHeader();
  reservationIndividualDetails = new ReservationIndividualDetails();
  reservationGroupDetails = new ReservationGroupDetails();

  // Program Requirement for Display
  bookingGroup = new BookingGroupData();
  bookingIndividual = new BookingIndividualData();

  // FormGroup for User input the program 
  registerForm: FormGroup;
  submitted = false;

  programDetails: ProgramData;
  programName: string;
  programDesc: string;
  ProgramType: number;
  SchedulePK: number;
  // isDisable = true;

  // Schedule View Variables
  public selectedDate: Date = new Date();
  customerSelectDate: string;
  customerSelectTime: string;
  tempDate: Date;
  //This option for displaying the date to customer view
  options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  //Define this day arr to hide past event
  dayOfWeekStr = ["SU","MO","TU","WE","TH","FR","SA"]
  //Define time format option for blackout date
  timeFormatOptions = {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		hour12: false
  };

  public allEvents: SchedulerEvent[];
  allBlackoutDateException:any = []
  quantityData: QuantiyFormData;
  quantityForm: FormGroup;
  currTotalQuantity = 0;
  availability: number;  
  
  currentSession: ProgramScheduleData = {
    SchedulePK: 0,
    SessionDetailsPK: 0,
    ProgramPK: 0,
    Start: "",
    End: "",
    MaximumParticipant: 0,
    CurrentNumberParticipant: 0,
    CreatedBy: 0,
    IsActive: true,
  };

  //Define Schedule Module for Kendo schedule
  public eventFields: SchedulerModelFields = {
    id: "CreatedBy", //point id to dummy to avoid bug
    title: "Title",
    description: "Description",
    startTimezone: "StartTimezone",
    start: "Start",
    end: "End",
    endTimezone: "EndTimezone",
    isAllDay: "IsAllDay",
    recurrenceRule: "RecurrenceRule",
    recurrenceId: "RecurrenceID",
    recurrenceExceptions: "RecurrenceException",
  };

  /**************************************************************/
  constructor(private route: ActivatedRoute,
              private service: ProgramServices,
              private programScheduleServices: ProgramScheduleService,
              private fb: FormBuilder,
              public matDialog: MatDialog,
              private auth: AuthenticationService,
              private router: Router) {
    this.quantityForm = this.fb.group({
      AdultQuantity: [
        { value: "0", disabled: true },
        [Validators.required, Validators.min(0)],
      ],
      Age57Quantity: [
        { value: "0", disabled: true },
        [Validators.required, Validators.min(0)],
      ],
      Age810Quantity: [
        { value: "0", disabled: true },
        [Validators.required, Validators.min(0)],
      ],
      Age1112Quantity: [
        { value: "0", disabled: true },
        [Validators.required, Validators.min(0)],
      ],
      Age1314Quantity: [
        { value: "0", disabled: true },
        [Validators.required, Validators.min(0)],
      ],
      Age1415Quantity: [
        { value: "0", disabled: true },
        [Validators.required, Validators.min(0)],
      ],
      Age1517Quantity: [
        { value: "0", disabled: true },
        [Validators.required, Validators.min(0)],
      ],
      TotalQuantity: ["0", [Validators.required, Validators.min(1)]],
      CustomerSelectDate: ["",[Validators.required]],
      CustomerSelectTime: ["",[Validators.required]],
      Availability: ["",[Validators.required]],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((val) => {
      this.ProgramPK = val.id;
    });

     /******************PROGRAM SCHEDULE*************************/
     this.service.getProgramHeaderDeatailsByID(this.ProgramPK).subscribe((details) => {
      this.programDetails = details;
      this.ProgramType = details.ProgramType;
      this.programDesc = this.programDetails.Description;
      this.programName = this.programDetails.Name;


      switch(this.ProgramType) {
        /*************  GET THE GROUP PROGRAM REQUIREMENT ******************* */
        case AppConstants.PROGRAM_TYPE_CODE.GROUP_PROGRAM:
          this.service.getProgramRequirementDetails("g", this.ProgramPK).subscribe((program) => {
              this.bookingGroup = program;
              
              this.registerForm = this.fb.group({
                ProgramRestriction: ["", Validators.required],
                OrganizationName: ["", [Validators.required, Validators.minLength(3)]],
                GradeLevel: ["", Validators.required],
                TeacherName: ["", [Validators.required, Validators.minLength(3)]],
                TeacherEmail: [""],
                AlternativeDate: ["", [Validators.required, Validators.minLength(5)]],
                TeacherPhoneNo: ["", [Validators.required, Validators.min(1000000000)]],
                EducationPurpose: ["", [Validators.required, Validators.minLength(5)]],
              });
  
              //Clear the Validator for unavailable field
              if(!this.bookingGroup.ProgramRestriction) {
                this.clearFormControlValidator(this.registerForm.get("ProgramRestriction"))
              }
              if(!this.bookingGroup.OrganizationName) {
                this.clearFormControlValidator(this.registerForm.get("OrganizationName"))
              }
              if(!this.bookingGroup.GradeLevel) {
                this.clearFormControlValidator(this.registerForm.get("GradeLevel"))
              }
              if(!this.bookingGroup.TeacherName) {
                this.clearFormControlValidator(this.registerForm.get("TeacherName"))
              }
              if(!this.bookingGroup.TeacherEmail) {
                this.clearFormControlValidator(this.registerForm.get("TeacherEmail"))
              }
              if(!this.bookingGroup.TeacherPhoneNo) {
                this.clearFormControlValidator(this.registerForm.get("TeacherPhoneNo"))
              }
              if(!this.bookingGroup.AlternativeDate) {
                this.clearFormControlValidator(this.registerForm.get("AlternativeDate"))
              }
              if(!this.bookingGroup.EducationPurpose) {
                this.clearFormControlValidator(this.registerForm.get("EducationPurpose"))
              }
             
          });
          
          break;

        /*************  GET THE INDIVIDUAL PROGRAM REQUIREMENT  ******************* */
        case AppConstants.PROGRAM_TYPE_CODE.INDIVIDUAL_PROGRAM:
          this.service.getProgramRequirementDetails("i", this.ProgramPK).subscribe((program) => {
            this.bookingIndividual = program;
          });

          this.registerForm = this.fb.group({
            ParticipantName: ['', [Validators.required, Validators.minLength(3)]],
            ParticipantAge: ['', Validators.required],
            Gender: ['', Validators.required],
            MerchSize: ['', Validators.required],
            AllergyInfo: [''],
            SpecialInfo: [''],
            InsureProviderName: ['', [Validators.required, Validators.minLength(3)]],
            InsureRecipientName: ['', [Validators.required, Validators.minLength(3)]],
            InsurePolicyNo: ['',[Validators.required, Validators.minLength(5)]],
            InsurePhoneNo: ['',[Validators.required, Validators.maxLength(10)]],
            AuthorizedPickupName1: ['', [Validators.required, Validators.minLength(3)]],
            AuthorizedPickupPhone1: ['',[Validators.required, Validators.maxLength(10)]],
            AuthorizedPickupName2: ['', []],
            AuthorizedPickupPhone2: ['',[]],
            EarlyDropOff: [''],
            LatePickup: [''],
            MediaRelease: [false, Validators.requiredTrue],
            EmergencyMedicalRelease: [false, Validators.requiredTrue],
            LiabilityAgreement: [false, Validators.requiredTrue],
          });
          
          // Clear the Validator for unavailable field
          if(!this.bookingIndividual.AllergyInfo) {
            this.clearFormControlValidator(this.registerForm.get("EducationPurpose"));
          }
          if(!this.bookingIndividual.ParticipantAge) {
            this.clearFormControlValidator(this.registerForm.get("EducationPurpose"));
          }
          if(!this.bookingIndividual.ParticipantName) {
            this.clearFormControlValidator(this.registerForm.get("EducationPurpose"));
          }
          if(!this.bookingIndividual.Gender) {
            this.clearFormControlValidator(this.registerForm.get("EducationPurpose"));
          }
          if(!this.bookingIndividual.MerchSize) {
            this.clearFormControlValidator(this.registerForm.get("EducationPurpose"));
          }
          if(!this.bookingIndividual.SpecialInfo) {
            this.clearFormControlValidator(this.registerForm.get("EducationPurpose"));
          }
          if(!this.bookingIndividual.InsureProviderName) {
            this.clearFormControlValidator(this.registerForm.get("EducationPurpose"));
          }
          if(!this.bookingIndividual.InsureRecipientName) {
             this.clearFormControlValidator(this.registerForm.get('InsureRecipientName'));
          }
          if(!this.bookingIndividual.InsurePolicyNo) {
             this.clearFormControlValidator(this.registerForm.get('InsurePolicyNo'));
          }
          if(!this.bookingIndividual.InsurePhoneNo) {
             this.clearFormControlValidator(this.registerForm.get('InsurePhoneNo'));
          }
          if(!this.bookingIndividual.AuthorizedPickupName1) {
             this.clearFormControlValidator(this.registerForm.get('AuthorizedPickupName1'));
          }
          if(!this.bookingIndividual.AuthorizedPickupPhone1) {
             this.clearFormControlValidator(this.registerForm.get('AuthorizedPickupPhone1'));
          }
          if(!this.bookingIndividual.AuthorizedPickupName2) {
             this.clearFormControlValidator(this.registerForm.get('AuthorizedPickupName2'));
          }
          if(!this.bookingIndividual.AuthorizedPickupPhone2) {
             this.clearFormControlValidator(this.registerForm.get('AuthorizedPickupPhone2'));
          }  
          if(!this.bookingIndividual.EarlyDropOff) {
             this.clearFormControlValidator(this.registerForm.get('EarlyDropOff'));
          }
          if(!this.bookingIndividual.LatePickup) {
             this.clearFormControlValidator(this.registerForm.get('LatePickup'));
          }
          if(!this.bookingIndividual.MediaRelease) {
             this.clearFormControlValidator(this.registerForm.get('MediaRelease'));
          }
          if(!this.bookingIndividual.EmergencyMedicalRelease) {
             this.clearFormControlValidator(this.registerForm.get('EmergencyMedicalRelease'));
          }
          if(!this.bookingIndividual.LiabilityAgreement) {
             this.clearFormControlValidator(this.registerForm.get('LiabilityAgreement'));
          }
      
          // Clear Validator for QuantityForm when Individual Program is loadded.
          this.clearFormControlValidator(this.quantityForm.get("AdultQuantity"));
          this.clearFormControlValidator(this.quantityForm.get("Age57Quantity"));
          this.clearFormControlValidator(this.quantityForm.get("Age810Quantity"));
          this.clearFormControlValidator(this.quantityForm.get("Age1112Quantity"));
          this.clearFormControlValidator(this.quantityForm.get("Age1314Quantity"));
          this.clearFormControlValidator(this.quantityForm.get("Age1415Quantity"));
          this.clearFormControlValidator(this.quantityForm.get("Age1517Quantity"));
          this.clearFormControlValidator(this.quantityForm.get("TotalQuantity"));
          break;
      }
  });   // End Select Program header and initialize FormGroup

    //Define and create to get schedule by ProgramPk
    const currentYear = new Date().getFullYear();
    const parseAdjust = (eventDateTime: string, RepeatDay: string): Date => {
      var date = new Date(eventDateTime);
      date.setFullYear(currentYear);
      //Set the event Start and End to today dates if the Start/End is before today date
      var eventStartTime = (new Date(eventDateTime)).toLocaleString('en-US', this.timeFormatOptions);
      let todayDate = (new Date((new Date()).toISOString().slice(0,10) + "T" + eventStartTime))
      let dayIndex = todayDate.getDay()
      //If date is before today's date and today's day is in the repeat day of the session
      if(date < todayDate){
          if(RepeatDay.indexOf(this.dayOfWeekStr[dayIndex]) >= 0){
              date = todayDate
          }
          else{
              for(var d = addDays(todayDate,1), i = 0; i < 6; i++, d.setDate(d.getDate() + 1)){
                  if(RepeatDay.indexOf(this.dayOfWeekStr[d.getDay()]) >= 0){
                      date = d;
                      break;
                  }
              }
              
          }                
      }
      return date;
  }; 

    //GET ALL BLACK-OUT DATES
    this.programScheduleServices.getAllBlackoutDateException().subscribe(res =>{
          this.allBlackoutDateException = res      
          console.log(res)
        // INITIALIZE THE SCHEDULE
        this.programScheduleServices.getSessionDetailsById(this.ProgramPK).subscribe((schedules) => {
          const sampleDataWithCustomSchema = schedules.map((dataItem) => ({
            ...dataItem,
            SessionDetailsPK: dataItem.SessionDetailsPK,
            ScheduleSettingPK: dataItem.ScheduleSettingPK,
            ProgramPK: dataItem.ProgramPK,
            Title: dataItem.Title,
            Description: dataItem.Description,
            StartTimezone: dataItem.StartTimezone,
            Start: parseAdjust(dataItem.Start, dataItem.RepeatDay),
            End: parseAdjust(dataItem.End, dataItem.RepeatDay),
            EndTimezone: dataItem.EndTimezone,
            MaximumParticipant: this.programDetails.MaximumParticipant,
            CurrentParticipant: 0,
            RecurrenceRule: dataItem.RecurrenceRule,
            EndRepeatDate: dataItem.EndRepeatDate,
            RecurrenceID: dataItem.RecurrenceID,
            RecurrenceException: [],//Date object array
            Color: dataItem.Color,
            CreatedBy: dataItem.CreatedBy,
            CreatedDate: dataItem.CreatedDate,
            IsActive: dataItem.IsActive,
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
          this.allEvents = sampleDataWithCustomSchema;
        });
      })
    
  } // End NgOninit()

  // Helper Function for select FormGroup Control
  get f() {
    return this.quantityForm.controls;
  }

  // Clear data when click on input field
  onFocus(event) {
    if (event.target.value == 0) event.target.value = "";
  }

  // Restore data when lose focus on input field
  lostFocus(event) {
    if (event.target.value === 0 || event.target.value === "") {
      event.target.value = 0;
    }
    this.calculateTotalQuantity();
  }

  // Helper function to calculate total attendee
  calculateTotalQuantity() {
    this.currTotalQuantity =
      parseInt(this.quantityForm.get("AdultQuantity").value) +
      parseInt(this.quantityForm.get("Age57Quantity").value) +
      parseInt(this.quantityForm.get("Age810Quantity").value) +
      parseInt(this.quantityForm.get("Age1112Quantity").value) +
      parseInt(this.quantityForm.get("Age1314Quantity").value) +
      parseInt(this.quantityForm.get("Age1415Quantity").value) +
      parseInt(this.quantityForm.get("Age1517Quantity").value);

    this.quantityForm.get("TotalQuantity").setValue(this.currTotalQuantity);
  }

  // Enable Quantity Field after User choose a schedule
  enableQuantityField() {
    this.quantityForm.get("AdultQuantity").enable();
    this.quantityForm.get("Age57Quantity").enable();
    this.quantityForm.get("Age810Quantity").enable();
    this.quantityForm.get("Age1112Quantity").enable();
    this.quantityForm.get("Age1314Quantity").enable();
    this.quantityForm.get("Age1415Quantity").enable();
    this.quantityForm.get("Age1517Quantity").enable();
  }

  //This function to capture and get the info of selected event
  public eventClick = (e) => {
    // this.isDisable = false;
    this.enableQuantityField();

    var eventStart = e.event.dataItem.Start.toISOString();
    var eventEnd = e.event.dataItem.End.toISOString();
    var programPK = e.event.dataItem.ProgramPK;
    var sessionDetailsPK = e.event.dataItem.SessionDetailsPK;

    this.programScheduleServices
      .getScheduleByIdStartEnd(
        sessionDetailsPK,
        programPK,
        eventStart,
        eventEnd
      )
      .subscribe((res) => {
        if (res) {
          // There is a schedule in the database
          this.tempDate = new Date(res.Start);
          let end = new Date(res.End);
          this.currentSession = res;
          this.customerSelectDate = this.tempDate.toDateString();
          this.customerSelectTime = this.tempDate
            .toLocaleString("en-US", this.options)
            .concat(" - ", end.toLocaleString("en-US", this.options));

          this.availability = res.MaximumParticipant - res.CurrentNumberParticipant;

          this.quantityForm
            .get("CustomerSelectDate")
            .setValue(this.customerSelectDate);
          this.quantityForm
            .get("CustomerSelectTime")
            .setValue(this.customerSelectTime);
          this.quantityForm.get("Availability").setValue(this.availability);

          // Pass SchedulePK for Booking Page
          this.SchedulePK = res.SchedulePK;
        } else {
          this.customerSelectDate = e.event.dataItem.Start.toDateString();
          this.customerSelectTime = e.event.dataItem.Start.toLocaleString(
            "en-US",
            this.options
          ).concat(
            " - ",
            e.event.dataItem.End.toLocaleString("en-US", this.options)
          );

          this.availability = e.event.dataItem.MaximumParticipant;

          this.quantityForm
            .get("CustomerSelectDate")
            .setValue(this.customerSelectDate);
          this.quantityForm
            .get("CustomerSelectTime")
            .setValue(this.customerSelectTime);
          this.quantityForm.get("Availability").setValue(this.availability);

          // Pass SchedulePK for Booking Page
          this.SchedulePK = e.event.dataItem.SchedulePK;

          this.currentSession.SchedulePK = 0;   // SchedulePK is AutoIncrement
          this.currentSession.ProgramPK = e.event.dataItem.ProgramPK;
          this.currentSession.SessionDetailsPK = e.event.dataItem.SessionDetailsPK;
          this.currentSession.Start = e.event.dataItem.Start.toISOString();
          this.currentSession.End = e.event.dataItem.End.toISOString();
          this.currentSession.MaximumParticipant = e.event.dataItem.MaximumParticipant;
          this.currentSession.CurrentNumberParticipant = 0;
          this.currentSession.IsActive = true;
          this.currentSession.CreatedBy = AppConstants.SYSTEM_USER_PK; // UserPk represent for System Auto Create Data
        }

        if(this.ProgramType == AppConstants.PROGRAM_TYPE_CODE.GROUP_PROGRAM) {
          // Set Validator for TotalQuantity
          const totalQuantControl = this.quantityForm.get("TotalQuantity");
          totalQuantControl.clearValidators();
          totalQuantControl.setValidators([
            Validators.required,
            Validators.min(1),
            Validators.max(this.availability),
          ]);
          totalQuantControl.updateValueAndValidity();
        }
      });
  };


  openLoginModal() {
    const loginModal = this.matDialog.open(
      LoginPromptModal,
      AppConstants.LOGIN_DIALOG_CONFIG
    );
    loginModal.afterClosed().subscribe((result) => {
      if (result == "Yes") {
        console.log("Login Modal");
      }
    });
  }

  /**************************************************************************************************************************/

  /************************* BOOKING GROUP PROGRAM *****************************
   Booking a Group Program will associate below tables:
    - ReservationHeader
    - ReservationGroupDetails
    - PaymentHeader 
    - MarketingInformation     
    Data will be stored in the LocalStorage and insert at the end                               
  **********************************************************/
 
  // Helper function to check validator
  getFormValidationErrors() {
    Object.keys(this.registerForm.controls).forEach((key) => {
      const controlErrors: ValidationErrors = this.registerForm.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach((keyError) => {
          console.log(
            "Key control: " + key + ", keyError: " + keyError + ", err value: ",
            controlErrors[keyError]
          );
        });
      }
    });
  }

  get g() {
    return this.registerForm.controls;
  }


  // Helper Function to remove Validator of Control
  clearFormControlValidator(control: any) {
    control.clearValidators();
    control.updateValueAndValidity();
  }

  addFormControlValidator(control: any, type: any) {
    control.setValidators(type);
  }
  /******************************************************************************/

  // This function will apply for both Group and Individual Program
  quantityProgramStepperNext(stepper: MatStepper, type: string) {
    var balance = this.programDetails.PricePerParticipant;
    // Add quantity data for Group Program only.
    if(type == "g") {
      this.reservationGroupDetails.AdultQuantity =this.quantityForm.get("Age57Quantity").value;
      this.reservationGroupDetails.Age810Quantity =this.quantityForm.get("Age810Quantity").value;
      this.reservationGroupDetails.Age1112Quantity =this.quantityForm.get("Age1112Quantity").value;
      this.reservationGroupDetails.Age1314Quantity =this.quantityForm.get("Age1314Quantity").value;
      this.reservationGroupDetails.Age1415Quantity =this.quantityForm.get("Age1415Quantity").value;
      this.reservationGroupDetails.Age1517Quantity =this.quantityForm.get("Age1517Quantity").value;
      this.reservationGroupDetails.TotalQuantity =this.quantityForm.get("TotalQuantity").value;
      balance = this.currTotalQuantity * this.programDetails.PricePerParticipant;
    }

    // Create new schedule record and insert into the database
    if(this.currentSession.SchedulePK == 0) {
      this.programScheduleServices.addNewSchedule(this.currentSession)
      .subscribe((res) => {
        this.SchedulePK = res.SchedulePK;
      });
    }

    // Update data for Reservation Header.
    this.reservationHeader.SchedulePK =  this.SchedulePK;
    this.reservationHeader.UserPK = this.auth.getUserDetails().UserPK;
    this.reservationHeader.ReservationStatus = AppConstants.RESERVATION_STATUS_CODE.ON_GOING;
    this.reservationHeader.NumberOfParticipant = this.currTotalQuantity;
    this.reservationHeader.RemainingBalance = balance;
    this.stepOneIsCompleted = true;
    stepper.next();
  }

  registerStepperNext(stepper: MatStepper) {
    // this.getFormValidationErrors();

     // Add User Input data to ReservationGroupDetails
     this.reservationGroupDetails.ProgramRestriction = this.registerForm.get("ProgramRestriction").value;
     this.reservationGroupDetails.OrganizationName = this.registerForm.get("OrganizationName").value;
     this.reservationGroupDetails.GradeLevel = this.registerForm.get("GradeLevel").value;
     this.reservationGroupDetails.TeacherName = this.registerForm.get("TeacherName" ).value;
     this.reservationGroupDetails.TeacherEmail = this.registerForm.get("TeacherEmail" ).value;
     this.reservationGroupDetails.TeacherPhoneNo = this.registerForm.get("TeacherPhoneNo" ).value;
     this.reservationGroupDetails.AlternativeDate = this.registerForm.get("AlternativeDate").value;
     this.reservationGroupDetails.EducationPurpose = this.registerForm.get("EducationPurpose").value;
     this.stepTwoIsCompleted = true;
     
      stepper.next();
  }
  
  registerIndividualStepperNext(stepper: MatStepper) {
    // Add User Input data to ReservationIndividualDetails
    this.reservationIndividualDetails.ParticipantName = this.registerForm.get("ParticipantName").value;
    this.reservationIndividualDetails.ParticipantAge = this.registerForm.get("ParticipantAge").value;
    this.reservationIndividualDetails.Gender = this.registerForm.get("Gender").value;
    this.reservationIndividualDetails.MerchSize = this.registerForm.get("MerchSize").value;
    this.reservationIndividualDetails.AllergyInfo = this.registerForm.get("AllergyInfo").value;
    this.reservationIndividualDetails.SpecialInfo = this.registerForm.get("SpecialInfo").value;
    this.reservationIndividualDetails.InsureProviderName = this.registerForm.get("InsureProviderName").value;
    this.reservationIndividualDetails.InsureRecipientName = this.registerForm.get("InsureRecipientName").value;
    this.reservationIndividualDetails.InsurePolicyNo = this.registerForm.get("InsurePolicyNo").value;
    this.reservationIndividualDetails.InsurePhoneNo = this.registerForm.get("InsurePhoneNo").value;
    this.reservationIndividualDetails.AuthorizedPickupName1 = this.registerForm.get("AuthorizedPickupName1").value;
    this.reservationIndividualDetails.AuthorizedPickupPhone1 = this.registerForm.get("AuthorizedPickupPhone1").value;
    this.reservationIndividualDetails.AuthorizedPickupName2 = this.registerForm.get("AuthorizedPickupName2").value;
    this.reservationIndividualDetails.AuthorizedPickupPhone2 = this.registerForm.get("AuthorizedPickupPhone2").value;
    this.reservationIndividualDetails.EarlyDropOff = this.registerForm.get("EarlyDropOff").value;
    this.reservationIndividualDetails.LatePickup = this.registerForm.get("LatePickup").value;
    this.reservationIndividualDetails.MediaRelease = this.registerForm.get("MediaRelease").value;
    this.reservationIndividualDetails.EmergencyMedicalRelease = this.registerForm.get("EmergencyMedicalRelease").value;
    this.stepTwoIsCompleted = true;

     stepper.next();
 }
}
