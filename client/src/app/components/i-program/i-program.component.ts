import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ProgramServices } from 'src/app/services/program.services';
import { BookingIndividualData } from 'src/app/data/booking-individual-data';
import { Router } from '@angular/router'
import { AuthenticationService } from '../../authentication.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';

declare var $: any;

@Component({
  selector: 'i-program',
  templateUrl: './i-program.component.html',
  styleUrls: ['./i-program.component.css']
})
export class IProgramComponent implements OnInit {
  @Input() ProgramPK: number;
  @Input() formData: FormData;
  @Output() dataChange: EventEmitter<BookingIndividualData> = new EventEmitter();
  varLabels:Array<Object>;
  bookingIndividual: BookingIndividualData

  constructor(private auth: AuthenticationService, 
              private service:ProgramServices,
              private router: Router,
              public matDialog: MatDialog) { }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip()
    this.service.getProgramRequirementByID('i', this.ProgramPK)
    .subscribe((res) => {
      this.bookingIndividual = res
    })

    this.varLabels = [
      {var: "ParticipantName" , label: "Participant Name", tooltip: ""},
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
      {var: "LiabilityAgreement" , label: "Liability Agreement", tooltip: "Require User to sign the Liability Agreement"}
    ]
    this.bookingIndividual.IndividualProgramPK = this.ProgramPK
    this.bookingIndividual.CreatedBy = this.auth.getUserDetails().UserPK
  }

  
  chkbDataChange(event) {
    this.dataChange.emit(this.bookingIndividual)
  }

  //Configure Modal Dialog
  openModal(){    
    //Configure Modal Dialog
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose =true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "auto";
    dialogConfig.maxHeight = "500px";
    dialogConfig.width = "430px";
    dialogConfig.data = {
        title: "Update Individual Program Details",
        description: "All information is correct?",            
        actionButtonText: "Confirm",
        numberOfButton: "2"
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