import {Component, OnInit, Input, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'register-modal-dialog',
    templateUrl: './customer-modal-dialog.component.html',
    styleUrls: ['../modal-dialog/modal-dialog.component.css']
})

export class CustomerModalDialogComponent implements OnInit{
     modalHeader: String
     modalContent: String

    constructor(public dialogRef: MatDialogRef<CustomerModalDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private modalData: any){}

    ngOnInit(){

    }

    actionFunction() {        
        //this.closeModal();
        this.dialogRef.close("Yes");
      }
    
      closeModal() {
        this.dialogRef.close("No");
      }
    
}