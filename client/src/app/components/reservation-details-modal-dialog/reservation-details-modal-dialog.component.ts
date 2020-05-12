import { OnInit, Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CustomerService } from 'src/app/services/customer.services';
import { ReservationService } from 'src/app/services/reservation.services';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReservationGroupDetails } from 'src/app/data/reservation-group-details';

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

    constructor(public dialogRef: MatDialogRef<ReservationDetailsModalDialog>, public matDialog: MatDialog,
                @Inject(MAT_DIALOG_DATA) private modalData: any, public customerService: CustomerService,
                public reservationService: ReservationService, private fb: FormBuilder) {}
    ngOnInit() {
        this.data = this.modalData;
        console.log(this.data);
        this.paid = this.data.Total - this.data.RemainingBalance;
        this.customerService.getCustomerInfoByID(this.data.UserPK).subscribe((info) => {
            this.customerDetails = info;
        });

        this.customerInfoForm = this.fb.group({
            FirstName: [''],
            LastName: [''],
            PhoneNo: [''],
            Address: [''],
            City: [''],
            State: [''],
            Zipcode: [''],
            Subscribe: []
        });

        if (this.data.ProgramType === 0){
            this.reservationService.getGroupReservationDetailsByReservationPK(this.data.ReservationPK).subscribe((group) => {
                this.groupDetails = group;
                console.log(this.groupDetails);
                console.log(this.groupDetails.ProgramRestriction);
            })
        } else {
            this.reservationService.getIndividualReservationDetailsByReservationPK(this.data.ReservationPK).subscribe((individual) => {
                this.individualDetails = individual;
            })
        }

        this.generalForm = this.fb.group({
            ReservationPK: [''],
            ProgramName: [''],
            ReservationStatus: [''],
            Date: ['']
        });

        this.groupForm = this.fb.group({
                AdultQuantity: [''],
                Age57Quantity: [''],
                Age810Quantity: [''],
                Age1112Quantity: [''],
                Age1314Quantity: [''],
                Age1415Quantity: [''],
                Age1517Quantity: [''],
                TotalQuantity: [''],
                ProgramRestriction: [''],
                OrganizationName: [''],
                GradeLevel: [''],
                TeacherName: [''],
                TeacherEmail: [''],
                TeacherPhoneNo: [''],
                AlternativeDate: [''],
                EducationPurpose: ['']
            });
        
        this.individualForm = this.fb.group({
            ParticipantName: [''],
            ParticipantAge: [''],
            Gender: [''],
            MerchSize: [''],
            AllergyInfo: [''],
            SpecialInfo: [''],
            InsureProviderName: [''],
            InsureRecipientName: [''],
            InsurePolicyNo: [''],
            InsurePhoneNo: [''],
            AuthorizedPickupName1: [''],
            AuthorizedPickupPhone1: [''],
            AuthorizedPickupName2: [''],
            AuthorizedPickupPhone2: [''],
            EarlyDropOff: [''],
            LatePickUp: [''],
        });
        this.paymentForm = this.fb.group({
            Total: [''],
            Paid: [''],
            RemainingBalance: ['']
        });
    }


    closeModal() {
        this.dialogRef.close('No');
    }

    actionFunction() {
        console.log('Modal closing');
        this.dialogRef.close('Yes');
    }
}
