import { OnInit, Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CustomerService } from 'src/app/services/customer.services';
import { ReservationService } from 'src/app/services/reservation.services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReservationGroupDetails } from 'src/app/data/reservation-group-details';
import { ReservationHeader } from 'src/app/data/reservation-header';
import { ProgramScheduleService } from 'src/app/services/schedule.services';

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

    constructor(public dialogRef: MatDialogRef<ReservationDetailsModalDialog>, public matDialog: MatDialog,
                @Inject(MAT_DIALOG_DATA) private modalData: any, public customerService: CustomerService,
                public reservationService: ReservationService, private fb: FormBuilder,
                public scheduleService: ProgramScheduleService) {}
    ngOnInit() {
        this.data = this.modalData;
        console.log(this.data);
        this.paid = this.data.Total - this.data.RemainingBalance;
        this.customerService.getCustomerInfoByID(this.data.UserPK).subscribe((info) => {
            this.customerDetails = info;
        });

        this.scheduleService.getScheduleById(this.data.SchedulePK).subscribe((schedule) => {
            this.ProgramPK = schedule[0].ProgramPK;
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
            AdultQuantity: [''],
            Age57Quantity: [''],
            Age810Quantity: [''],
            Age1112Quantity: [''],
            Age1314Quantity: [''],
            Age1415Quantity: [''],
            Age1517Quantity: [''],
            TotalQuantity: [''],
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

    actionFunction() {
        console.log('Modal closing');
        this.dialogRef.close('Yes');
    }
}
