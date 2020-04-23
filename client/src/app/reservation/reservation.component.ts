import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
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
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ModalDialogComponent } from "../components/modal-dialog/modal-dialog.component";
import { LoginPromptModal } from "../components/login-prompt-modal/login-prompt-modal.component";
import { AuthenticationService } from "../authentication.service";
import { AppConstants } from "../constants";
import { MatStepperModule, MatStepper } from "@angular/material/stepper";
import { StepperServices } from "../services/stepper.services";

/*************  BOOKING GROUP PROGRAM  ******************* */
import { BookingGroupData } from "../data/booking-group-data";
import { ReservationHeader } from "../data/reservation-header";
import { ValidationErrors } from "@angular/forms";
import { ReservationGroupDetails } from "../data/reservation-group-details";

@Component({
  templateUrl: "./reservation.component.html",
  styleUrls: ["./reservation.component.css"],
  providers: [StepperServices],
})
export class ReservationComponent implements OnInit {
  @ViewChild('stepper', { static: false }) private myStepper: MatStepper;

  myForm: Array<string>;
  ProgramPK: number;
  isCompleted = false;

  /*************  BOOKING GROUP PROGRAM  ******************* */
  reservationHeader: ReservationHeader;
  reservationGroupDetails = new ReservationGroupDetails();
  bookingGroup = new BookingGroupData();
  registerForm: FormGroup;
  submitted = false;
  programDetails: ProgramData;
  total: number;
  num_submits: number;
  edit_clicked: boolean;

  /******************PROGRAM SCHEDULE*************************/
  programName: string;
  programDesc: string;
  ProgramType: number;
  SchedulePK: number;
  isDisable = true;
  public selectedDate: Date = new Date();
  customerSelectDate: string;
  customerSelectTime: string;
  tempDate: Date;
  options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  public allEvents: SchedulerEvent[];
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

  constructor(
    private route: ActivatedRoute,
    private service: ProgramServices,
    private programScheduleServices: ProgramScheduleService,
    private fb: FormBuilder,
    public matDialog: MatDialog,
    private auth: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((val) => {
      this.ProgramPK = val.id;
    });

    /*************  BOOKING GROUP PROGRAM  ******************* */
    // reservationHeader: ReservationHeader;
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

    this.service
      .getProgramRequirementDetails("g", this.ProgramPK)
      .subscribe((program) => {
        this.bookingGroup = program;
        this.setRegisterFormValidators();
      });

    // this.service.getProgramHeaderDeatailsByID(this.ProgramPK)
    //     .subscribe(details => {
    //     this.programDetails = details;
    //     // document.getElementById("program_name").innerHTML = this.programDetails.Name;
    //     })

    /**************************************************************/

    /******************PROGRAM SCHEDULE*************************/
    this.service
      .getProgramHeaderDeatailsByID(this.ProgramPK)
      .subscribe((details) => {
        this.programDetails = details;
        this.ProgramType = details.ProgramType;
        this.programDesc = this.programDetails.Description;
        this.programName = this.programDetails.Name;
      });

    //Define and create to get schedule by ProgramPk
    const currentYear = new Date().getFullYear();
    const parseAdjust = (eventDate: string): Date => {
      const date = new Date(eventDate);
      date.setFullYear(currentYear);
      return date;
    };

    this.programScheduleServices
      .getSessionDetailsById(this.ProgramPK)
      .subscribe((schedules) => {
        const sampleDataWithCustomSchema = schedules.map((dataItem) => ({
          ...dataItem,
          SessionDetailsPK: dataItem.SessionDetailsPK,
          ScheduleSettingPK: dataItem.ScheduleSettingPK,
          ProgramPK: dataItem.ProgramPK,
          Title: dataItem.Title,
          Description: dataItem.Description,
          StartTimezone: dataItem.StartTimezone,
          Start: parseAdjust(dataItem.Start),
          End: parseAdjust(dataItem.End),
          EndTimezone: dataItem.EndTimezone,
          MaximumParticipant: this.programDetails.MaximumParticipant,
          CurrentParticipant: 0,
          RecurrenceRule: dataItem.RecurrenceRule,
          EndRepeatDate: dataItem.EndRepeatDate,
          RecurrenceID: dataItem.RecurrenceID,
          RecurrenceException: dataItem.RecurrenceException,
          Color: dataItem.Color,
          CreatedBy: dataItem.CreatedBy,
          CreatedDate: dataItem.CreatedDate,
          IsActive: dataItem.IsActive,
        }));
        this.allEvents = sampleDataWithCustomSchema;
      });

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
      CustomerSelectDate: [],
      CustomerSelectTime: [],
      Availability: [],
    });
  } // End NgOninit()

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

  enableQuantityField() {
    this.quantityForm.get("AdultQuantity").enable();
    this.quantityForm.get("Age57Quantity").enable();
    this.quantityForm.get("Age810Quantity").enable();
    this.quantityForm.get("Age1112Quantity").enable();
    this.quantityForm.get("Age1314Quantity").enable();
    this.quantityForm.get("Age1415Quantity").enable();
    this.quantityForm.get("Age1517Quantity").enable();
  }

  //   enterQuantity() {
  //     this.submitted = true;
  //     if (this.quantityForm.invalid) {
  //       return;
  //     }
  //     //Configure Modal Dialog
  //     const dialogConfig = new MatDialogConfig();

  //     // Check if user is logged in
  //     if (!this.auth.isLoggedIn()) {
  //       //Configure Modal Dialog For Login Prompt

  //       const loginDialogConfig = new MatDialogConfig();
  //       loginDialogConfig.id = "modal-component";
  //       loginDialogConfig.height = "500px";
  //       // loginDialogConfig.maxHeight = "600px";
  //       loginDialogConfig.width = "500px";
  //       loginDialogConfig.autoFocus = false;
  //       loginDialogConfig.data = {
  //         routerRedirect: true,
  //         routerURL: "/booking-group-program/" + this.ProgramPK,
  //       };
  //       const loginModal = this.matDialog.open(
  //         LoginPromptModal,
  //         loginDialogConfig
  //       );
  //       loginModal.afterClosed().subscribe((result) => {
  //         if (result == "Yes") {
  //           console.log("Login Modal");
  //         }
  //       });
  //     } else {
  //       // Proceed to next step
  //       // The user can't close the dialog by clicking outside its body
  //       dialogConfig.disableClose = true;
  //       dialogConfig.id = "modal-component";
  //       dialogConfig.height = "auto";
  //       dialogConfig.maxHeight = "600px";
  //       dialogConfig.width = "430px";
  //       dialogConfig.autoFocus = false;

  //       if (this.availability == null) {
  //         dialogConfig.data = {
  //           title: "Warning!",
  //           description:
  //             "You haven't chosen any program. Please choose one program first!",
  //           actionButtonText: "Try again",
  //           numberOfButton: "1",
  //         };
  //       } else if (this.currTotalQuantity > this.availability) {
  //         dialogConfig.data = {
  //           title: "Warning!",
  //           description:
  //             "The total quantity exceeds the availability of this program. Please try again!",
  //           actionButtonText: "Try again",
  //           numberOfButton: "1",
  //         };
  //       } else {
  //         dialogConfig.data = {
  //           title: "Confirmation",
  //           description:
  //             "Are you sure to book this program for " +
  //             this.currTotalQuantity +
  //             " attendees?",
  //           actionButtonText: "Confirm",
  //           numberOfButton: "2",
  //         };
  //       }

  //       const modalDialog = this.matDialog.open(
  //         ModalDialogComponent,
  //         dialogConfig
  //       );
  //       modalDialog.afterClosed().subscribe((result) => {
  //         if (result == "Yes") {
  //           //if exceed
  //           if (
  //             this.currTotalQuantity > this.availability ||
  //             this.availability == null
  //           ) {
  //             // if exceed, do nothing
  //           } else {
  //             //route to the booking page
  //             switch (this.ProgramType) {
  //               case AppConstants.PROGRAM_TYPE_CODE.INDIVIDUAL_PROGRAM:
  //                 this.router.navigateByUrl(
  //                   "/booking-individual-program/" + this.ProgramPK
  //                 );

  //                 break;
  //               case AppConstants.PROGRAM_TYPE_CODE.GROUP_PROGRAM:
  //                 // SchedulePK == 0 when there is no current schedule in Database
  //                 if (this.currentSession.SchedulePK == 0) {
  //                   this.programScheduleServices
  //                     .addNewSchedule(this.currentSession)
  //                     .subscribe((res) => {});
  //                 }

  //                 // Pass data of Quantity FormControl to the object
  //                 this.quantityData = new QuantiyFormData(
  //                   this.quantityForm.value.AdultQuantity,
  //                   this.quantityForm.value.Age57Quantity,
  //                   this.quantityForm.value.Age810Quantity,
  //                   this.quantityForm.value.Age1112Quantity,
  //                   this.quantityForm.value.Age1314Quantity,
  //                   this.quantityForm.value.Age1415Quantity,
  //                   this.quantityForm.value.Age1517Quantity,
  //                   this.quantityForm.value.TotalQuantity,
  //                   this.SchedulePK,
  //                   this.quantityForm.value.CustomerSelectDate,
  //                   this.quantityForm.value.CustomerSelectTime,
  //                   this.currentSession.MaximumParticipant -
  //                     this.currentSession.CurrentNumberParticipant
  //                 );

  //                 // Add QuantityForm Data to localStorage
  //                 localStorage.setItem(
  //                   "QuantityFormLocal",
  //                   JSON.stringify(this.quantityData)
  //                 );
  //                 //this._data.data = this.quantityData
  //                 //  this.router.navigateByUrl( "/booking-group-program/" + this.ProgramPK);
  //                 break;
  //             }
  //           }
  //         } else {
  //           //otherwise, do nothing
  //         }
  //       });
  //     }
  //   }

  //This function to capture and get the info of selected event
  public eventClick = (e) => {
    this.isDisable = false;
    this.enableQuantityField();

    var eventStart = e.event.dataItem.Start.toString();
    var eventEnd = e.event.dataItem.End.toString();
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

          this.availability =
            res.MaximumParticipant - res.CurrentNumberParticipant;

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
          // Create new schedule record and insert into the databse
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

          this.currentSession.SchedulePK = 0;
          this.currentSession.ProgramPK = e.event.dataItem.ProgramPK;
          this.currentSession.SessionDetailsPK = e.event.dataItem.SessionDetailsPK;
          this.currentSession.Start = e.event.dataItem.Start.toString();
          this.currentSession.End = e.event.dataItem.End.toString();
          this.currentSession.MaximumParticipant = e.event.dataItem.MaximumParticipant;
          this.currentSession.CurrentNumberParticipant = 0;
          this.currentSession.IsActive = true;
          this.currentSession.CreatedBy = AppConstants.SYSTEM_USER_PK; // UserPk represent for System Auto Create Data
        }

        // Set Validator for TotalQuantity
        const totalQuantControl = this.quantityForm.get("TotalQuantity");
        totalQuantControl.clearValidators();
        totalQuantControl.setValidators([
          Validators.required,
          Validators.min(1),
          Validators.max(this.availability),
        ]);
        totalQuantControl.updateValueAndValidity();
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
    - PaymentDetails
    - MarketingInformation     
    Data will be stored in the LocalStorage and insert at the end                               
  **********************************************************/
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

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.registerForm.invalid) {
      this.getFormValidationErrors();
      return;
    } else {
      alert(
        "SUCCESS!! :-)\n\n" + JSON.stringify(this.registerForm.value, null, 4)
      );

     
     
      // Add ReservationGroupDetails to localStorage
      localStorage.setItem(
        "ReservationGroupLocal",
        JSON.stringify(this.reservationGroupDetails)
      );

      //route to the payment page
      this.router.navigateByUrl("/payment/" + this.ProgramPK);
    }

    console.log("submitted");

    console.log("valid");
  }

  setRegisterFormValidators() {
    const ProgRestrictionControl = this.registerForm.get("ProgramRestriction");
    const OrgNameControl = this.registerForm.get("OrganizationName");
    const GradeLevelControl = this.registerForm.get("GradeLevel");
    const TeacherNameControl = this.registerForm.get("TeacherName");
    const TeacherEmailControl = this.registerForm.get("TeacherEmail");
    const TeacherPhoneNoControl = this.registerForm.get("TeacherPhoneNo");

    if (this.bookingGroup.ProgramRestriction != true)
      ProgRestrictionControl.clearValidators();
    if (this.bookingGroup.OrganizationName != true) {
      OrgNameControl.clearValidators();
    }
    if (this.bookingGroup.GradeLevel != true)
      GradeLevelControl.clearValidators();
    if (this.bookingGroup.TeacherName != true)
      TeacherNameControl.clearValidators();
    if (this.bookingGroup.TeacherEmail == true) {
      TeacherEmailControl.setValidators([
        Validators.required
      ]);
    }
    if (this.bookingGroup.TeacherPhoneNo != true)
      TeacherPhoneNoControl.clearValidators();

    ProgRestrictionControl.updateValueAndValidity();
    OrgNameControl.updateValueAndValidity();
    GradeLevelControl.updateValueAndValidity();
    TeacherNameControl.updateValueAndValidity();
    TeacherEmailControl.updateValueAndValidity;
    TeacherPhoneNoControl.updateValueAndValidity();
  }

  /******************************************************************************/

  quantityStepperNext(stepper: MatStepper) {
    this.reservationGroupDetails.AdultQuantity =this.quantityForm.get("Age57Quantity").value;
    this.reservationGroupDetails.Age810Quantity =this.quantityForm.get("Age810Quantity").value;
    this.reservationGroupDetails.Age1112Quantity =this.quantityForm.get("Age1112Quantity").value;
    this.reservationGroupDetails.Age1314Quantity =this.quantityForm.get("Age1314Quantity").value;
    this.reservationGroupDetails.Age1415Quantity =this.quantityForm.get("Age1415Quantity").value;
    this.reservationGroupDetails.Age1517Quantity =this.quantityForm.get("Age1517Quantity").value;
    this.reservationGroupDetails.TotalQuantity =this.quantityForm.get("TotalQuantity").value;
    stepper.next();
  }

  registerStepperNext(stepper: MatStepper) {
     // Add User Input data to ReservationGroupDetails
     this.reservationGroupDetails.ProgramRestriction = this.registerForm.get("ProgramRestriction").value;
     this.reservationGroupDetails.OrganizationName = this.registerForm.get("OrganizationName").value;
     this.reservationGroupDetails.GradeLevel = this.registerForm.get("GradeLevel").value;
     this.reservationGroupDetails.TeacherName = this.registerForm.get("TeacherName" ).value;
     this.reservationGroupDetails.TeacherEmail = this.registerForm.get("TeacherEmail" ).value;
     this.reservationGroupDetails.TeacherPhoneNo = this.registerForm.get("TeacherPhoneNo" ).value;
     this.reservationGroupDetails.AlternativeDate = this.registerForm.get("AlternativeDate").value;
     this.reservationGroupDetails.EducationPurpose = this.registerForm.get("EducationPurpose").value;
     this.isCompleted = true;
      stepper.next();
  }
}
