import { Component, Inject } from '@angular/core'
import { AuthenticationService, TokenPayload } from '../../authentication.service'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faUser, faKey, faEnvelope, faCheckDouble} from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { } from '../../components/modal-dialog/modal-dialog.component';


@Component({
    templateUrl: './create-new-user.component.html',
    styleUrls: ['./create-new-user.component.css']
})

export class CreateNewUserComponent {
    
    constructor(){

    }

    ngOnInit(){

    }
}