import { OnInit, Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ReservationService } from '../../services/reservation.services'

@Component ({
    selector: 'app-admin-reservations-modal-dialog',
    templateUrl: './admin-reservations-modal-dialog.component.html',
    styleUrls: ['./admin-reservations-modal-dialog.component.css'],
})

export class AdminReservationsModalDialogComponent implements OnInit {
    reservations = [];
    ReservationStatus: string;
    p: number;
    constructor(public dialogRef: MatDialogRef<AdminReservationsModalDialogComponent>, public matDialog: MatDialog,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private reservationService: ReservationService) {}

    ngOnInit() {
        this.reservations = this.data[1];
        this.ReservationStatus = this.data[0];
    }

    closeModal() {
        this.dialogRef.close('No');
        if (this.ReservationStatus === 'Pending'){
            window.location.reload();
        }
    }

  /*   actionFunction() {
        console.log('Modal closing');
        this.dialogRef.close('Yes');
    } */

    // Accept Pending Reservation Method
    acceptReservation(ReservationPK: number) {
        this.reservationService.acceptPendingReservation(ReservationPK).subscribe((result) => {
            console.log("Update Succesfull");
        })
        this.reservations = this.reservations.filter(function( obj ) {
            return obj.ReservationPK != ReservationPK;
        });
    }

     // Cancel Pending Reservation Method
    cancelReservation(ReservationPK: number) {
        this.reservationService.cancelPendingReservation(ReservationPK).subscribe((result) => {
            console.log("Update Succesfull");
        })
        this.reservations = this.reservations.filter(function( obj ) {
            return obj.ReservationPK != ReservationPK;
        });
    }
}
