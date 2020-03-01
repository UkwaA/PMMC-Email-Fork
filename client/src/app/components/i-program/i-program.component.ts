import { Component, OnInit, Input} from '@angular/core';
import { ProgramServices } from 'src/app/services/program.services';
import { BookingIndividualData } from 'src/app/data/booking-individual-data';
import { Router } from '@angular/router'
import { AuthenticationService } from '../../authentication.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
@Component({
  selector: 'i-program',
  templateUrl: './i-program.component.html',
  styleUrls: ['./i-program.component.css']
})
export class IProgramComponent implements OnInit {
  @Input() ProgramPK: number;
  varLabels:Array<Object>;
  bookingIndividual: BookingIndividualData
  
  constructor(private auth: AuthenticationService, 
              private service:ProgramServices,
              private router: Router,
              public matDialog: MatDialog) { }

  ngOnInit() {
    this.bookingIndividual = new BookingIndividualData(true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true);
    this.varLabels = [
      {var: "ParticipantName" , label: "Participant Name"},
      {var: "ParticipantAge" , label: "Participant Age"},
      {var: "Gender" , label: "Gender"},
      {var: "MerchSize" , label: "T-Shirt Size"},
      {var: "AllergyInfo" , label: "Allergy Information"},
      {var: "SpecialInfo" , label: "Special Information"},
      {var: "InsureProviderName" , label: "Insurance Provider Name"},
      {var: "InsureRecipientName" , label: "Insured Recipient Name"},
      {var: "InsurePolicyNo" , label: "Insurance Policy Number"},
      {var: "InsurePhoneNo" , label: "Insurance Phone Number"},
      {var: "AuthorizedPickupName1" , label: "Authorized Pickup Name 1"},
      {var: "AuthorizedPickupPhone1" , label: "Authorized Pickup Phone 1"},
      {var: "AuthorizedPickupName2" , label: "Authorized Pickup Name 2"},
      {var: "AuthorizedPickupPhone2" , label: "Authorized Pickup Phone 2"},
      {var: "EarlyDropOff" , label: "Early Drop Off"},
      {var: "LatePickup" , label: "Late Pick-up"},
      {var: "MediaRelease" , label: "Media Release"},
      {var: "EmergencyMedicalRelease" , label: "Emergency Medical Release"},
      {var: "LiabilityAgreement" , label: "Liability Agreement"},
      {var: "FullAmount" , label: "Full Amount"}
    ]
    this.bookingIndividual.IndividualProgramPK = this.ProgramPK
    this.bookingIndividual.CreatedBy = this.auth.getUserDetails().UserPK
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
        title: "Update Individual Program Details",
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
    this.service.updateProgramLayoutDetails('i', this.bookingIndividual)
      .subscribe((response) => {
        this.router.navigateByUrl("/profile/program-management")
      })
  }
}