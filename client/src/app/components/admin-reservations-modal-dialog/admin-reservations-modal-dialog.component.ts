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
    range = {start: '', end: ''};
    constructor(public dialogRef: MatDialogRef<AdminReservationsModalDialogComponent>, public matDialog: MatDialog,
                @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit() {
        this.reservations = this.data.reservations;
        this.range.start = this.data.range.start.toDateString();
        this.range.end = this.data.range.end.toDateString();
    }

    closeModal() {
        this.dialogRef.close('No');
    }

    actionFunction() {
        console.log('Modal closing');
        this.dialogRef.close('Yes');
    }
}
