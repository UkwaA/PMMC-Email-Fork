import { Component } from '@angular/core';
import { EmailData } from '../data/email-data';
import { EmailService } from '../services/email.services';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalDialogComponent } from '../components/modal-dialog/modal-dialog.component';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
// import * as  AngularFileUploadModule from 'angular-file-upload' 
import { angularFileUpload } from 'angular-file-upload' 
import {MatButtonModule} from '@angular/material/button';


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
        Type: '',
        IsActive: true,
        HasAttachments: 0,
        AttachmentNames: ''
    };
    filesInfo = {files: [], filesAdded: false};
    filesDeleted = false;
    numNewAttachments = 0;
    isDisabled: boolean;
    Editor = DecoupledEditor;
    formData = new FormData();
    currentAttachments = [];
    deletedFiles=[];

    constructor(
        public matDialog: MatDialog,
        private route: ActivatedRoute, private http: HttpClient,
        private services: EmailService, private auth: AuthenticationService,
        private router: Router, private emailService: EmailService) { }

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
                if (this.emailData.HasAttachments) {
                    this.currentAttachments = this.emailData.AttachmentNames.split('/');
                }
            });
        });
    }

    onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );
    }

    onFileChange(event) {
        // if (event.type === HttpEventType.UploadProgress) {
        //     console.log(Math.round(100 * event.loaded / event.total))
        //     // this.percentComplete = Math.round(100 * event.loaded / event.total);
        //   } else if (event.type === HttpEventType.Response) {
        //     // do something with body event.body
        //   }
        console.log(event.target.files);
        this.filesInfo.files = [];
        this.filesInfo.filesAdded = true;
        let file_list = '';
        function add_filelist(value){
            console.log('adding: ' + value)
            file_list += '<li>' + value + '</li>'
        }

        for (var count = 0; count < event.target.files.length; ++count){
            this.filesInfo.files.push(event.target.files[count])
            file_list += '<li>' + event.target.files[count].name+'</li>';
        }
        this.numNewAttachments = event.target.files.length;
        document.getElementById('filelist').innerHTML = '<ul>'+file_list+'</ul>';
    }

    openSubmissionModal() {
         const dialogConfig = new MatDialogConfig();
         dialogConfig.disableClose = true;
         dialogConfig.id = 'modal-component';
         dialogConfig.height = 'auto';
         dialogConfig.maxHeight = '500px';
         dialogConfig.width = '380px';
         dialogConfig.autoFocus = false;
         dialogConfig.data = {
             title: 'Update Email Details',
             description: 'Are you sure you are ready to submit?',
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

    openAttachmentModal(attachment): any {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.id = 'modal-component';
        dialogConfig.height = 'auto';
        dialogConfig.maxHeight = '500px';
        dialogConfig.width = '380px';
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            title: 'Update Email Details',
            description: 'Are you sure you would like to remove the attachment "'+attachment+'"?',
            actionButtonText: 'Confirm',
            numberOfButton: '2'
        };
        const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
        modalDialog.afterClosed().subscribe(result => {
           if (result === 'Yes') {
            this.filesDeleted = true;
            this.deletedFiles.push(attachment);
            this.formData.append('deletedFiles[]', attachment);
            console.log('deleted files formdata: ' + this.formData.getAll('deletedFiles[]'))
            this.currentAttachments.splice(this.currentAttachments.indexOf(attachment),1);
           }
           return false;
       });
   }

    submit() {
        for (var i = 0; i < this.filesInfo.files.length; ++i) {
            this.formData.append(i.toString(), this.filesInfo.files[i], this.filesInfo.files[i].name);
        }
        this.formData.append('numNewAttachments', this.numNewAttachments.toString());
        for (const key of Object.keys(this.emailData)) {
            const value = this.emailData[key];
            this.formData.append(key, value);
        }
        // console.log('to string: ' + this.filesInfo.filesAdded.toString())
        this.formData.append('filesAdded', this.filesInfo.filesAdded.toString())
        this.formData.append('filesDeleted', this.filesDeleted.toString())
        console.log(this.formData);

        console.log(this.formData.get('EmailPK'))

        this.services.updateEmail(this.formData).subscribe(res => {
            console.log(res);
            if (res) {
                this.router.navigateByUrl('/profile/email-management');
            }
        });
    }


}
