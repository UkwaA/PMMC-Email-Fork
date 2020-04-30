import { OnInit, Component } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';

declare var $: any;

@Component ({
    selector: 'reservation-details-modal-dialog',
    templateUrl: './reservation-details-modal-dialog.component.html',
    styleUrls: ['./reservation-details-modal-dialog.component.css'],
    
})

export class ReservationDetailsModalDialog implements OnInit{
    role:string;

    constructor(public dialogRef: MatDialogRef<ReservationDetailsModalDialog>, public matDialog:MatDialog){}
    
    ngOnInit(){
        $(".alert-success").hide()
        $(".alert-danger").hide()     
    }


    closeModal(){
        this.dialogRef.close("No");
    }

    actionFunction() {
        console.log("Modal closing");
        this.dialogRef.close("Yes");
    }

}