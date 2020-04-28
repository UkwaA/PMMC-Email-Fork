import { OnInit, Component, Input } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalDialogComponent } from '../components/modal-dialog/modal-dialog.component';
import { Router, ActivatedRoute } from '@angular/router';

import { ProgramServices } from '../services/program.services';
import { ReservationService } from '../services/reservation.services';
import { ReservationHeader } from '../data/reservation-header';
import { ReservationGroupDetails } from "../data/reservation-group-details";
import { ReservationIndividualDetails } from '../data/reservation-individual-details';
import { AppConstants } from '../constants';
// import Stripe from 'stripe';

@Component({
    selector: 'payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit{
    @Input() reservationDetails: any;
    @Input() reservationHeader: ReservationHeader;
    @Input() ProgramPK: number;
    
    // stripe = new Stripe('sk_test_...', {
    //     apiVersion: '2020-03-02',
    //   });
      
    userDetails: UserDetails
    paymentForm: FormGroup;
    submitted = false;
    ProgramType: number;

    constructor(public auth: AuthenticationService,
        private fb: FormBuilder, public matDialog: MatDialog, 
        private route: ActivatedRoute, private router: Router,
        private program: ProgramServices,
        private reservation : ReservationService){}

    ngOnInit(){
        this.program.getProgramHeaderDeatailsByID(this.ProgramPK).subscribe((result) => {
            this.ProgramType = result.ProgramType;
        })

        this.userDetails = this.auth.getUserDetails();

        this.paymentForm = this.fb.group({
            FirstName: ["", [Validators.required]],
            LastName: ["", [Validators.required]],
            Address: ["", [Validators.required]],
            City: ["", [Validators.required]],
            State: ["", [Validators.required]],
            Zipcode: ["", [Validators.required]],
            NameOnCard: ["", [Validators.required]],
            CardNumber: ["", [Validators.required]],
            Expiration: ["", [Validators.required]],
            CVV: ["", [Validators.required]],
        })

        // this.reservation.addNewReservationHeader(this.reservationHeader).subscribe((result) => {
        //     console.log("ReservationPK: " + result);
        // });

        switch(this.ProgramType) {
            case AppConstants.PROGRAM_TYPE_CODE.GROUP_PROGRAM:
               
                break;
            case AppConstants.PROGRAM_TYPE_CODE.INDIVIDUAL_PROGRAM:

                break;
        }
    }

    get f() {
        return this.paymentForm.controls;
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
    }

    payment(){
        this.submitted = true;
        if (this.paymentForm.invalid) {
            console.log("invalid");
            return;
        }
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
            title: "Check out",
            description: "Are you sure to check out?",            
            actionButtonText: "Confirm",   
            numberOfButton: "2"         
        }

        const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
        modalDialog.afterClosed().subscribe(result =>{
            if(result == "Yes"){
                //Save data here

                //route to the confirmation page
                this.router.navigateByUrl("/confirmation/" + this.ProgramPK);
            }
            else{
                //otherwise, do nothing               
            }
        })
    }
}