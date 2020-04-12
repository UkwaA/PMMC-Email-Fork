import { Component, OnInit } from "@angular/core";
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
import { ReservationHeaderData } from "../data/reservation-header-data";
import { QuantiyFormData } from "../data/quantity-form-data";
import { ProgramScheduleData } from "../data/program-schedule-data";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ModalDialogComponent } from "../components/modal-dialog/modal-dialog.component";
import { LoginPromptModal } from "../components/login-prompt-modal/login-prompt-modal.component";
import { AuthenticationService } from "../authentication.service";
import { AppConstants } from "../constants";

@Component({
  templateUrl: "./program-schedule.component.html",
  styleUrls: ["./program-schedule.component.css"],
})
export class ProgramScheduleComponent implements OnInit {
  ProgramPK: number;
  ProgramType: number;
  isDisable = true;
  programDetails: ProgramData;
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
  submitted = false;
  scheduleItem: any = {
    SchedulePK: 0,
    ProgramPK: 0,
    Start: "",
    End: "",
  };

  currentSession: ProgramScheduleData = {
    SchedulePK: 0,
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

    this.service
      .getProgramHeaderDeatailsByID(this.ProgramPK)
      .subscribe((details) => {
        this.programDetails = details;
        this.ProgramType = details.ProgramType;
        document.getElementById(
          "program_name"
        ).innerHTML = this.programDetails.Name;
        document.getElementById(
          "program_desc"
        ).innerHTML = this.programDetails.Description;
      });

    //Define and create to get schedule by ProgramPk
    const currentYear = new Date().getFullYear();
    const parseAdjust = (eventDate: string): Date => {
      const date = new Date(eventDate);
      date.setFullYear(currentYear);
      return date;
    };

    this.programScheduleServices
      .getScheduleSettingById(this.ProgramPK)
      .subscribe((schedules) => {
        const sampleDataWithCustomSchema = schedules.map((dataItem) => ({
          ...dataItem,
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
    });
  }

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

  enterQuantity() {
    this.submitted = true;
    if (this.quantityForm.invalid) {
      // console.log("invalid");
      return;
    }

    // console.log("valid");

    //Configure Modal Dialog
    const dialogConfig = new MatDialogConfig();

    // Check if user is logged in
    //
    if (!this.auth.getUserDetails()) {
      // //Configure Modal Dialog For Login Prompt
      // dialogConfig.disableClose = true;
      // dialogConfig.id = "modal-component";
      // dialogConfig.height = "600px";
      // dialogConfig.maxHeight = "600px";
      // dialogConfig.width = "500px";
      // dialogConfig.autoFocus = false;

      // dialogConfig.data = {
      //     title: "Log In",
      //     description:
      //       "You haven't chosen any program. Please choose one program first!",
      //     actionButtonText: "Try again",
      //     numberOfButton: "1",
      //   };
      const loginDialogConfig = new MatDialogConfig();
      loginDialogConfig.id = "modal-component";
      loginDialogConfig.height = "600px";
      loginDialogConfig.maxHeight = "600px";
      loginDialogConfig.width = "500px";
      loginDialogConfig.autoFocus = false;
      loginDialogConfig.data = {
        // title: "Register Confirmation",
        // firstName: this.customerInfoForm.get('firstName').value,
        // lastName: this.customerInfoForm.get('lastName').value,
        // phoneNo: this.customerInfoForm.get('phoneNum').value,
        // streetAddress: this.customerInfoForm.get('address_street').value,
        // // streetAddress2: '',
        // addressCity: this.customerInfoForm.get('address_city').value,
        // addressState: this.customerInfoForm.get('address_state').value,
        // addressZipCode: this.customerInfoForm.get('address_zipcode').value,
        // actionButtonText: "Confirm",
        // numberOfButton: "2"
      };
      const loginModal = this.matDialog.open(LoginPromptModal, loginDialogConfig);
      loginModal.afterClosed().subscribe((result) => {
        if (result == "Yes") {
          console.log("Login Modal");
        }
      });
    } else {
      // Proceed to next step
      // The user can't close the dialog by clicking outside its body
      dialogConfig.disableClose = true;
      dialogConfig.id = "modal-component";
      dialogConfig.height = "auto";
      dialogConfig.maxHeight = "600px";
      dialogConfig.width = "430px";
      dialogConfig.autoFocus = false;

      if (this.availability == null) {
        dialogConfig.data = {
          title: "Warning!",
          description:
            "You haven't chosen any program. Please choose one program first!",
          actionButtonText: "Try again",
          numberOfButton: "1",
        };
      } else if (this.currTotalQuantity > this.availability) {
        dialogConfig.data = {
          title: "Warning!",
          description:
            "The total quantity exceeds the availability of this program. Please try again!",
          actionButtonText: "Try again",
          numberOfButton: "1",
        };
      } else {
        dialogConfig.data = {
          title: "Confirmation",
          description:
            "Are you sure to book this program for " +
            this.currTotalQuantity +
            " attendees?",
          actionButtonText: "Confirm",
          numberOfButton: "2",
        };
      }

      const modalDialog = this.matDialog.open(
        ModalDialogComponent,
        dialogConfig
      );
      modalDialog.afterClosed().subscribe((result) => {
        if (result == "Yes") {
          //if exceed
          if (
            this.currTotalQuantity > this.availability ||
            this.availability == null
          ) {
            // if exceed, do nothing
          } else {
            //route to the booking page
            switch (this.ProgramType) {
              case AppConstants.PROGRAM_TYPE_CODE.INDIVIDUAL_PROGRAM:
                this.router.navigateByUrl(
                  "/booking-individual-program/" + this.ProgramPK
                );

                break;
              case AppConstants.PROGRAM_TYPE_CODE.GROUP_PROGRAM:
                // if(this.currentSession.SchedulePK == 0) {
                //     this.programScheduleServices.addNewSchedule(this.currentSession)
                //     .subscribe((res) => {
                //       console.log(res);
                //     });
                // }

                this.router.navigateByUrl(
                  "/booking-group-program/" + this.ProgramPK
                );
                break;
            }
          }
        } else {
          //otherwise, do nothing
        }
      });
    }
  }

  //This function to capture and get the info of selected event
  public eventClick = (e) => {
    this.isDisable = false;
    this.quantityForm.get("AdultQuantity").enable();
    this.quantityForm.get("Age57Quantity").enable();
    this.quantityForm.get("Age810Quantity").enable();
    this.quantityForm.get("Age1112Quantity").enable();
    this.quantityForm.get("Age1314Quantity").enable();
    this.quantityForm.get("Age1415Quantity").enable();
    this.quantityForm.get("Age1517Quantity").enable();

    var eventStart = e.event.dataItem.Start.toString();
    var eventEnd = e.event.dataItem.End.toString();
    var programPK = e.event.dataItem.ProgramPK;

    this.programScheduleServices
      .getScheduleByIdStartEnd(programPK, eventStart, eventEnd)
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

          console.log(res);
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

          this.currentSession.SchedulePK = 0;
          this.currentSession.ProgramPK = e.event.dataItem.ProgramPK;
          this.currentSession.Start = e.event.dataItem.Start.toString();
          this.currentSession.End = e.event.dataItem.End.toString();
          this.currentSession.MaximumParticipant =
            e.event.dataItem.MaximumParticipant;
          this.currentSession.CurrentNumberParticipant = 0;
          this.currentSession.IsActive = true;
          this.currentSession.CreatedBy = AppConstants.SYSTEM_USER_PK;
          console.log(e.event);
        }
      });
  };
}
