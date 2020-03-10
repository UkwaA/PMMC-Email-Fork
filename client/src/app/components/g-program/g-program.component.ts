import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProgramServices } from 'src/app/services/program.services';
import { BookingGroupData } from 'src/app/data/booking-group-data';
import { Router } from '@angular/router'
import { AuthenticationService } from '../../authentication.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
declare var $: any;

@Component({
  selector: 'g-program',
  templateUrl: './g-program.component.html',
  styleUrls: ['./g-program.component.css']
})
export class GProgramComponent implements OnInit {
  @Input() ProgramPK: number;
  @Input() formData: FormData;
  @Output() dataChange: EventEmitter<BookingGroupData> = new EventEmitter();
  
  bookingGroup: BookingGroupData;
  varLabels: Array<Object>; 

  constructor(private auth: AuthenticationService,
    private service: ProgramServices,
    private router: Router,
    public matDialog: MatDialog) { }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip()
    this.service.getProgramRequirementByID('g', this.ProgramPK)
      .subscribe((res) => {
        this.bookingGroup = res
      })

    this.varLabels = [
      { var: "AdultQuantity", label: "Adult Quantity" },
      { var: "Age57Quantity", label: "Age 5-7 Quantity" },
      { var: "Age810Quantity", label: "Age 8-10 Quantity" },
      { var: "Age1112Quantity", label: "Age 11-12 Quantity" },
      { var: "Age1314Quantity", label: "Age 13-14 Quantity" },
      { var: "Age1415Quantity", label: "Age 14-15 Quantity" },
      { var: "Age1517Quantity", label: "Age 15-17 Quantity" },
      { var: "TotalQuantity", label: "Total Quantity" },
      { var: "ProgramRestriction", label: "Program Restriction" },
      { var: "OrganizationName", label: "Organization Name" },
      { var: "GradeLevel", label: "Grade Level" },
      { var: "TeacherName", label: "Teacher Name" },
      { var: "TeacherEmail", label: "Teacher Email" },
      { var: "TeacherPhoneNo", label: "Teacher Phone Number" },
      { var: "AlternativeDate", label: "Alternative Date" },
      { var: "EducationPurpose", label: "Education Purpose" }
    ]
    this.bookingGroup.GroupProgramPK = this.ProgramPK
    this.bookingGroup.CreatedBy = this.auth.getUserDetails().UserPK

  }

  // Event Handler for checkbox
  // Pass checkbox data to EventEmitter for Parent component
  // type: 'g' - Group Program
  //       'i' - Individual Program
  // data: actual data for the checkbox

  chkbDataChange(event) {
    this.dataChange.emit(this.bookingGroup)
  }

  //Configure Modal Dialog
  openModal() {
    //Configure Modal Dialog
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "auto";
    dialogConfig.maxHeight = "500px";
    dialogConfig.width = "430px";
    dialogConfig.data = {
      title: "Update Group Program Details",
      description: "All information is correct?",
      actionButtonText: "Confirm",
      numberOfButton: "2"
    }
    // https://material.angular.io/components/dialog/overview
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result => {
      if (result == "Yes") {
        //call register function                
        this.submit()
      }
      else {
        console.log("stop")
      }
    })
  }

  submit() {
    this.service.updateProgramLayoutDetails('g', this.bookingGroup)
      .subscribe((response) => {
        this.router.navigateByUrl("/profile/program-management")
      })
  }
}