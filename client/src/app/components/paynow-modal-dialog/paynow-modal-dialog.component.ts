import { OnInit, Component, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';



declare var $: any;

@Component ({
    selector: 'paynow-modal-dialog',
    templateUrl: './paynow-modal-dialog.component.html',
    styleUrls: ['./paynow-modal-dialog.component.css'],
    
})

export class PaynowModalDialog implements OnInit{
    // cvvForm: FormGroup;
    // cvvRequired = new FormControl('', [Validators.minLength(3), Validators.required]);
    
    cvvForm = new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]);
    
    
    constructor(
        public dialogRef: MatDialogRef<PaynowModalDialog>, 
        public matDialog: MatDialog,
        private formBuilder: FormBuilder
        ){}
    
    ngOnInit(){

        // this.cvvForm = this.formBuilder.group({
        //      cvv: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]

        //  });

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