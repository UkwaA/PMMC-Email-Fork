import { OnInit, Component, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

declare var $: any;

@Component ({
    selector: 'paynow-modal-dialog',
    templateUrl: './paynow-modal-dialog.component.html',
    styleUrls: ['./paynow-modal-dialog.component.css'],
    
})

export class PaynowModalDialog implements OnInit{
    role:string;

    constructor(public dialogRef: MatDialogRef<PaynowModalDialog>, public matDialog:MatDialog){}
    
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