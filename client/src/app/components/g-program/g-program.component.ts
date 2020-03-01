import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProgramServices } from 'src/app/services/program.services';
import { BookingGroupData } from 'src/app/data/booking-group-data';
import { Router } from '@angular/router'
import { AuthenticationService } from '../../authentication.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
@Component({
  selector: 'g-program',
  templateUrl: './g-program.component.html',
  styleUrls: ['./g-program.component.css']
})
export class GProgramComponent implements OnInit {
  @Input() ProgramPK: number;
  @Output() data: EventEmitter<any> = new EventEmitter();
  bookingGroup: BookingGroupData;
  varLabels:Array<Object>;
  //TODO: inject the service

  constructor(private auth: AuthenticationService, 
              private service:ProgramServices,
              private router: Router,
              public matDialog: MatDialog) { }

  ngOnInit() {
    this.bookingGroup = new BookingGroupData(true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,true, true);
    this.varLabels = [
      {var: "AdultQuantity", label: "Adult Quantity"},
      {var: "Age57Quantity", label: "Age 5-7 Quantity"},
      {var: "Age810Quantity" ,label: "Age 8-10 Quantity"},
      {var: "Age1113Quantity" ,label: "Age 11-13 Quantity"},
      {var: "TotalQuantity" ,label: "Total Quantity"},
      {var: "Price" ,label: "Price"},
      {var: "Deposit" ,label: "Deposit"},
      {var: "EducationFK" ,label: "Education Content"},
      {var: "ProgramRestriction" ,label: "Program Restriction"},
      {var: "DepositAmount" ,label: "Deposit Amount"},
      {var: "FullAmount" ,label: "Full Amount"},
      {var: "MaximumParticipant" ,label: "Maximum Participant"},
      {var: "OrganizationName" ,label: "Organization Name"},
      {var: "GradeLevel" ,label: "Grade Level"},
      {var: "ScoutProgram" ,label: "Scout Program"},
      {var: "TeacherName" ,label: "Teacher Name"},
      {var: "TeacherEmail" ,label: "Teacher Email"},
      {var: "TeacherPhoneNo" ,label: "Teacher Phone Number"}
    ]
    this.bookingGroup.GroupProgramPK = this.ProgramPK
    this.bookingGroup.CreatedBy = this.auth.getUserDetails().UserPK
  }

  //Configure Modal Dialog
  openModal(){    
    //Configure Modal Dialog
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose =true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "250px";
    dialogConfig.width = "430px";
    dialogConfig.data = {
        title: "Update Group Program Details",
        description: "All information is correct?",            
        actionButtonText: "Confirm",            
      }
      // https://material.angular.io/components/dialog/overview
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result =>{
        if(result == "Yes"){
            //call register function                
            this.submit()
        }
        else{
            console.log("stop")                
        }
    })
}

  submit(){
    this.service.updateProgramLayoutDetails('g', this.bookingGroup)
      .subscribe((response) => {
        this.router.navigateByUrl("/profile/program-management")
      })
  }
}