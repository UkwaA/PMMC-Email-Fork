import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../services/email.services';


@Component({
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class Contact implements OnInit {
    loading = false
    myForm: FormGroup;

    constructor(private fb: FormBuilder, public emailService:EmailService) {

    }
    ngOnInit() {
        this.myForm = this.fb.group({
            fullName: '',
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            subject: ['', [
                Validators.required,
                Validators.minLength(3)
            ]],
            message: ['', [
                Validators.required,
                Validators.minLength(5)
            ]]
        })
    }

    get email() {
        return this.myForm.get('email');
    }

    get subject() {
        return this.myForm.get('subject');
    }

    get message() {
        return this.myForm.get('message');
    }

    submit(){
        this.loading = true;
        let user = {
        name: this.myForm.value.fullName,
        email: this.myForm.value.email,
        subject: this.myForm.value.subject,
        message: this.myForm.value.message
        }

        this.emailService.sendEmail(user).subscribe(
        data => {
            let res:any = data; 
            console.log(
            `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
            );
        },
        err => {
            console.log(err);
            this.loading = false;
            console.log("submitted")
        },() => {
            //this.loading = false;
            //this.buttionText = "Submit";
        }
        );
    }

    reset(){
        this.myForm.reset()
        this.loading = false

    }
}