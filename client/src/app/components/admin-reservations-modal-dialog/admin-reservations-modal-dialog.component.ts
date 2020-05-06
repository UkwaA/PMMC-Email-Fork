import { OnInit, Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component ({
    selector: 'app-admin-reservations-modal-dialog',
    templateUrl: './admin-reservations-modal-dialog.component.html',
    styleUrls: ['./admin-reservations-modal-dialog.component.css'],
})

export class AdminReservationsModalDialogComponent implements OnInit {
    reservations = [];
    p: number;
    constructor(public dialogRef: MatDialogRef<AdminReservationsModalDialogComponent>, public matDialog: MatDialog,
                @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit() {
        this.reservations = this.data;
    }

    closeModal() {
        this.dialogRef.close('No');
    }

    actionFunction() {
        console.log('Modal closing');
        this.dialogRef.close('Yes');
    }
}
