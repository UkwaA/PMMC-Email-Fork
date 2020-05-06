import { Component } from '@angular/core'
import { EmailData } from '../data/email-data';
import { EmailService } from '../services/email.services'

declare var $: any;

@Component({
    templateUrl: './email-management.component.html',
    styleUrls: ['./email-management.component.css'],
    providers: [EmailService]
})

export class EmailManagementComponent{
    p: number;
    emails: EmailData[];
    allEmails: EmailData[];
    userEmails: EmailData[] = [];
    programEmails: EmailData[] = [];
    paymentEmails: EmailData[] = [];
    searchText: string;

    emailCategories: Array<Object> = [
        { id: 0, name: "All Emails" },
        { id: 1, name: "User Emails" },
        { id: 2, name: "Program Emails" },
        { id: 3, name: "Payment Emails" }
    ]

    constructor(public EmailServices:EmailService){}

    ngOnInit() {
        this.emailCategories.forEach(e => {
            $("#emailCat").append(new Option(e['name'], e['id']));
        });

        this.EmailServices.getAllEmails().then((result)=>{
            console.log(result);
            this.emails = result;
            this.allEmails = result;

            this.emails.forEach(email => {
                if (email.Type == 'User')
                    this.userEmails.push(email)
                else if (email.Type == 'Program')
                    this.programEmails.push(email)
                else if (email.Type == 'Payment')
                    this.paymentEmails.push(email)
            })
        })
    }

    clearSearch() {
        this.searchText = "";
    }

    selectChangeHandler(event: any) {
        let choice = event.target.value;
       switch(choice) {
            case '0':
                this.emails = this.allEmails;
                break;
            case '1':
                this.emails = this.userEmails;
                break;
            case '2':
                this.emails = this.programEmails;
                break;
            case '3':
                this.emails = this.paymentEmails;
       }
    }
}