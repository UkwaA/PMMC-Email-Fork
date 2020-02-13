import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class Contact implements OnInit{

    myForm : FormGroup;

    constructor(private fb: FormBuilder){

    }
    ngOnInit(){
        this.myForm = this.fb.group({
            fullName: '',
            email: ['',[
                Validators.required, 
                Validators.email
            ]],
            subject: ['',[
                Validators.required,
                Validators.minLength(3)
            ]],
            message: ['',[
                Validators.required,
                Validators.minLength(5)
            ]] 
        })

        this.myForm.valueChanges.subscribe(console.log);
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
}