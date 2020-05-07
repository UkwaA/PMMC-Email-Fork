import { Component } from '@angular/core'
import { EmailData } from '../data/email-data';
import { EmailService } from '../services/email.services';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalDialogComponent } from '../components/modal-dialog/modal-dialog.component';

declare var $: any;

@Component({
    templateUrl: './email-management.component.html',
    styleUrls: ['./email-management.component.css'],
    providers: [EmailService]
})

export class EmailManagementComponent {
    p: number;
    emails: EmailData[];
    allEmails: EmailData[];
    userEmails: EmailData[] = [];
    programEmails: EmailData[] = [];
    paymentEmails: EmailData[] = [];
    searchText: string;

    emailCategories: Array<object> = [
        { id: 0, name: 'All Emails' },
        { id: 1, name: 'User Emails' },
        { id: 2, name: 'Program Emails' },
        { id: 3, name: 'Payment Emails' }
    ]

    constructor(public emailServices: EmailService, private matDialog: MatDialog) {}

    ngOnInit() {
        this.emailCategories.forEach(e => {
            $('#emailCat').append(new Option(e['name'], e['id']));
        });

        this.emailServices.getAllEmails().then((result) => {
            console.log(result);
            this.emails = result;
            this.allEmails = result;

            this.emails.forEach(email => {
                if (email.Type === 'User') {
                    this.userEmails.push(email); }
                else if (email.Type === 'Program') {
                    this.programEmails.push(email); }
                else if (email.Type === 'Payment') {
                    this.paymentEmails.push(email); }
            });
        });
    }

    clearSearch() {
        this.searchText = '';
    }

    selectChangeHandler(event: any) {
        const choice = event.target.value;
        switch (choice) {
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

    openModalSwitch(emailPK: number, isActive: boolean) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.id = 'modal-component';
        dialogConfig.height = 'auto';
        dialogConfig.maxHeight = '500px';
        dialogConfig.width = '350px';
        dialogConfig.autoFocus = false;
        if (isActive) {
            dialogConfig.data = {
            title: 'Disable Email',
            description: 'This action will disable this email from automatically being sent to customers. ' +
            'Are you sure you would like to continue?',
            actionButtonText: 'Confirm',
            numberOfButton: '2'
            };
        } else {
            dialogConfig.data = {
            title: 'Enable Email',
            description: 'This action will now allow this email to be automatically sent to customers.' +
            ' Are you sure you would like to continue?',
            actionButtonText: 'Confirm',
            numberOfButton: '2'
            };
        }
        const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
        modalDialog.afterClosed().subscribe(result => {
            if (result === 'Yes') {
                isActive = !isActive;
                const email = {EmailPK: emailPK, IsActive: isActive};
                this.emailServices.changeEmailActiveStatus(email).subscribe( res => {
                if (res) { window.location.reload(); }
                });
            }
        });

    }
}
