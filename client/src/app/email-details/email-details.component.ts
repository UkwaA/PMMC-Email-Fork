import { Component } from '@angular/core';
import { EmailData } from '../data/email-data';
import { EmailService } from '../services/email.services';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalDialogComponent } from '../components/modal-dialog/modal-dialog.component';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';






@Component({
    templateUrl: './email-details.component.html',
    styleUrls: ['./email-details.component.css'],
    providers: [EmailService]
})

export class EmailDetailsComponent {
    EmailPK: number;
    emailTypeText: string;
    PageMode: string;
    emailData: EmailData = {
        EmailPK: 0,
        Subject: '',
        Body: '',
        // FileData: '', Not yet functioning
        Type: '',
        IsActive: true,
    };
    file: File;
    isDisabled: boolean;
    Editor = DecoupledEditor;

    constructor(
        public matDialog: MatDialog,
        private route: ActivatedRoute, private http: HttpClient,
        private services: EmailService, private auth: AuthenticationService,
        private router: Router) { }

    ngOnInit() {
        this.route.params.subscribe(val => {
            this.EmailPK = val.id;
            this.PageMode = val.mode;

            switch (this.PageMode) {
                case 'view':
                    this.isDisabled = true;
                    break;
                case 'edit':
                    this.isDisabled = false;
                    break;
            }

            this.services.getEmailByID(this.EmailPK).subscribe(email => {
                this.emailData = email;
                this.emailTypeText = email.Type;
            });
        });
    }

    onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );
    }

    openModal() {
         const dialogConfig = new MatDialogConfig();
         dialogConfig.disableClose = true;
         dialogConfig.id = 'modal-component';
         dialogConfig.height = 'auto';
         dialogConfig.maxHeight = '500px';
         dialogConfig.width = '380px';
         dialogConfig.autoFocus = false;
         dialogConfig.data = {
             title: 'Update Email Details',
             description: 'Are you sure that you are ready to submit?',
             actionButtonText: 'Confirm',
             numberOfButton: '2'
         };
         const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
         modalDialog.afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.submit();
            }
        });
    }

    submit() {
        console.log(this.emailData);
        this.services.updateEmail(this.emailData).subscribe(res => {
            console.log(res);
            if (res) {
                this.router.navigateByUrl('/profile/email-management');
            }
        });
    }


}
