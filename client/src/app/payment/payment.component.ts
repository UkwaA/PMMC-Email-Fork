import { OnInit, Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit{
    paymentForm: FormGroup;
    submitted = false;

    constructor(public auth: AuthenticationService,
        private fb: FormBuilder){}

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

        console.log("valid");
    }
}