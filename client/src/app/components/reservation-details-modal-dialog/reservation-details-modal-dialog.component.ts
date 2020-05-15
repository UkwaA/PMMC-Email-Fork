import { OnInit, Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CustomerService } from 'src/app/services/customer.services';
import { ReservationService } from 'src/app/services/reservation.services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReservationGroupDetails } from 'src/app/data/reservation-group-details';
import { ReservationHeader } from 'src/app/data/reservation-header';
import { ProgramScheduleService } from 'src/app/services/schedule.services';
import { AuthenticationService } from 'src/app/authentication.service';

declare var $: any;

@Component ({
    selector: 'app-reservation-details-modal-dialog',
    templateUrl: './reservation-details-modal-dialog.component.html',
    styleUrls: ['./reservation-details-modal-dialog.component.css']
})

export class ReservationDetailsModalDialog implements OnInit{
    data: any;
    customerDetails: any;
    paymentDetails: any;
    groupDetails: any;
    individualDetails: any;
    customerInfoForm: FormGroup;
    groupForm: FormGroup;
    individualForm: FormGroup;
    paymentForm: FormGroup;
    paid: number;
    generalForm: FormGroup;
    isVerified: boolean;
    //For Payment Service 
    ProgramPK: number;
    // Intent Object
    paymentObj = {
        token: "",
        amount: 0,
        description: "",
        email: "",
    };
    valid: boolean = true;
    refundForm: FormGroup;
    currTotalQuantity: number;
    isDisabled: boolean = true;
    userRole: number;

    constructor(public dialogRef: MatDialogRef<ReservationDetailsModalDialog>, public matDialog: MatDialog,
                @Inject(MAT_DIALOG_DATA) private modalData: any, public customerService: CustomerService,
                public reservationService: ReservationService, private fb: FormBuilder,
                public scheduleService: ProgramScheduleService, private auth: AuthenticationService) {}
    ngOnInit() {
        this.data = this.modalData;
        console.log(this.data);
        this.paid = this.data.Total - this.data.RemainingBalance;
        this.customerService.getCustomerInfoByID(this.data.UserPK).subscribe((info) => {
            this.customerDetails = info;
        });

        this.scheduleService.getScheduleById(this.data.SchedulePK).subscribe((schedule) => {
            this.ProgramPK = schedule[0].ProgramPK;
        });

        this.auth.profile().subscribe(
            (user) => {
              this.userRole = user.Role_FK;
        })

        if (this.data.ProgramType === 0){
            this.reservationService.getGroupReservationDetailsByReservationPK(this.data.ReservationPK).subscribe((group) => {
                this.groupDetails = group;
            })
        } else {
            this.reservationService.getIndividualReservationDetailsByReservationPK(this.data.ReservationPK).subscribe((individual) => {
                this.individualDetails = individual;
            })
        }

        this.groupForm = this.fb.group({
            AdultQuantity: ['', [
                Validators.required,
                Validators.min(0)
            ]],
            Age57Quantity: ['', [
                Validators.required,
                Validators.min(0)
            ]],
            Age810Quantity: ['', [
                Validators.required,
                Validators.min(0)
            ]],
            Age1112Quantity: ['', [
                Validators.required,
                Validators.min(0)
            ]],
            Age1314Quantity: ['', [
                Validators.required,
                Validators.min(0)
            ]],
            Age1415Quantity: ['', [
                Validators.required,
                Validators.min(0)
            ]],
            Age1517Quantity: ['', [
                Validators.required,
                Validators.min(0)
            ]],
            TotalQuantity: ['', [
                Validators.required,
                Validators.min(0)
            ]],
        });
        this.paymentForm = this.fb.group({
            PaymentType: ['', [
                Validators.required
            ]],
            PaymentAmount: ['', [
                Validators.required,
                Validators.min(1),
                Validators.max(this.data.RemainingBalance),
            ]]
        });

        this.refundForm = this.fb.group({
            RefundReason: ['', [
                Validators.required
            ]],
            RefundAmount: ['', [
                Validators.required,
                Validators.min(1),
                Validators.max(this.paid),
            ]]
        });
    }

    lostFocus(event) {
        if (event.target.value === 0 || event.target.value === "") {
          event.target.value = "0";
        }
        this.calculateTotalQuantity();
        // console.log(this.quantityForm.value);
    }

    // Helper function to calculate total attendee
    calculateTotalQuantity() {
    this.currTotalQuantity =
        parseInt(this.groupForm.get("AdultQuantity").value, 10) +
        parseInt(this.groupForm.get("Age57Quantity").value, 10) +
        parseInt(this.groupForm.get("Age810Quantity").value, 10) +
        parseInt(this.groupForm.get("Age1112Quantity").value, 10) +
        parseInt(this.groupForm.get("Age1314Quantity").value, 10) +
        parseInt(this.groupForm.get("Age1415Quantity").value, 10) +
        parseInt(this.groupForm.get("Age1517Quantity").value, 10);

        this.groupForm.get("TotalQuantity").setValue(this.currTotalQuantity);
    }

    //view or edit quantity
    viewOrEditMode() {
        if (this.isDisabled) {
            this.isDisabled = false;
        } else {
            this.isDisabled = true;
        }
    }
    get paymentType() {
        return this.paymentForm.get('PaymentType');
    }

    getVerified(verified: boolean) {
        this.isVerified = verified;
    }

    dataChangedHandler(token: string) {
        // Update the pToken
        this.paymentObj.token = token;
    }
    
    closeModal() {
        this.dialogRef.close('No');
    }
}
