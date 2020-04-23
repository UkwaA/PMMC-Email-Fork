import { OnInit, Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalDialogComponent } from '../components/modal-dialog/modal-dialog.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit{
    paymentForm: FormGroup;
    submitted = false;
    ProgramPK: number;

    constructor(public auth: AuthenticationService,
        private fb: FormBuilder, public matDialog: MatDialog, 
        private route: ActivatedRoute, private router: Router){}

    ngOnInit(){
        this.paymentForm = this.fb.group({
            FirstName: ["", [Validators.required]],
            LastName: ["", [Validators.required]],
            Address: ["", [Validators.required]],
            City: ["", [Validators.required]],
            State: ["", [Validators.required]],
            Zipcode: ["", [Validators.required]],
            NameOnCard: ["", [Validators.required]],
            CardNumber: ["", [Validators.required]],
            Expiration: ["", [Validators.required]],
            CVV: ["", [Validators.required]],
        })
         // Get Group Program Requirement
        this.route.params.subscribe(val => {
            this.ProgramPK = val.id
        })

    }

    get f() {
        return this.paymentForm.controls;
    }

    // Clear data when click on input field
    onFocus(event) {
        if (event.target.value == 0) event.target.value = "";
    }

    // Restore data when lose focus on input field
    lostFocus(event) {
        if (event.target.value === 0 || event.target.value === "") {
            event.target.value = 0;
        }
    }

    payment(){
        this.submitted = true;
        if (this.paymentForm.invalid) {
            console.log("invalid");
            return;
        }
        //Configure Modal Dialog
        const dialogConfig = new MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose =true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "500px";
        dialogConfig.width = "350px";
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            title: "Check out",
            description: "Are you sure to check out?",            
            actionButtonText: "Confirm",   
            numberOfButton: "2"         
        }

        const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
        modalDialog.afterClosed().subscribe(result =>{
            if(result == "Yes"){
                //Save data here

                //route to the confirmation page
                this.router.navigateByUrl("/confirmation/" + this.ProgramPK);
            }
            else{
                //otherwise, do nothing               
            }
        })
    }
}