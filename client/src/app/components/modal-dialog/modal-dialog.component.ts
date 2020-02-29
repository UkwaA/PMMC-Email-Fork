import {Component, OnInit, Input, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'modal-dialog',
    templateUrl: './modal-dialog.component.html',
    styleUrls: ['./modal-dialog.component.css']
})

export class ModalDialogComponent implements OnInit{
     modalHeader: String
     modalContent: String

    constructor(public dialogRef: MatDialogRef<ModalDialogComponent>,
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