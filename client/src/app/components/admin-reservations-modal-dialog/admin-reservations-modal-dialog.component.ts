import { OnInit, Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component ({
    selector: 'admin-reservations-modal-dialog',
    templateUrl: './admin-reservations-modal-dialog.component.html',
    styleUrls: ['./admin-reservations-modal-dialog.component.css'],
    
})

export class AdminReservationsModalDialog implements OnInit{
    reservations = [];

    constructor(public dialogRef: MatDialogRef<AdminReservationsModalDialog>, public matDialog:MatDialog,
        @Inject(MAT_DIALOG_DATA) private data: any){}
    
    ngOnInit(){   
        this.reservations = this.data;
    }


    closeModal(){
        this.dialogRef.close("No");
    }

    actionFunction() {
        console.log("Modal closing");
        this.dialogRef.close("Yes");
    }

}