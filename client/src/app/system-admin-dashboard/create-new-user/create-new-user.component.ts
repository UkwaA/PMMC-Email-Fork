import { Component, Inject } from '@angular/core'
import { AuthenticationService, TokenPayload } from '../../authentication.service'
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faUser, faKey, faEnvelope, faCheckDouble} from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalDialogComponent } from '../../components/modal-dialog/modal-dialog.component';
import { EmailService } from 'src/app/services/email.services';
import { CustomerService } from 'src/app/services/customer.services';
import { UserData } from 'src/app/data/user-data';
import { CustomerData } from 'src/app/data/customer-data';
declare var $: any;

@Component({
    selector: 'app-create-new-user',
    templateUrl: './create-new-user.component.html',
    styleUrls: ['./create-new-user.component.css']
})

export class CreateNewUserComponent {
    createNewUserForm: FormGroup
    message = ''
    submitted = false
    subscribeChecked: boolean
    NewRole = ''
    userRoles = ['Customer','Manager','System Admin']

    userDetails: UserData = {
        UserPK: 0,
        Username: '',
        Password: '',
        Role_FK: '',
        Email: '',      
        IsActive: true,
        CreatedDate: ''
    }
  
    customerDetails:CustomerData = {
      CustomerPK: 0,
      FirstName: '',
      LastName: '',
      PhoneNo: '',
      Address: '',
      City: '',
      State: '',
      Zipcode: '',
      Subscribe: 0,
    }

    constructor(private route: ActivatedRoute, private auth: AuthenticationService,private fb: FormBuilder, 
        private router: Router, public emailService:EmailService, public matDialog: MatDialog, private customer: CustomerService,) { }

    ngOnInit(){
        this.createNewUserForm = this.fb.group({    
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            FirstName: ['', Validators.required],
            LastName: ['', Validators.required],
            PhoneNo: ['', Validators.required],
            Address: ['', Validators.required],
            Address2: [],
            City: ['', Validators.required],
            State: ['', [Validators.required, Validators.maxLength(2)]],
            Zipcode:['', Validators.required],
            Subscribe: []
          })
        
          this.userRoles.forEach(e => {
            $("#roleSelection").append(new Option(e, e));  
          });
    }

    get f() { return this.createNewUserForm.controls; }

    openModalCreateNewUser(){
        //Form validation
        this.submitted = true;
        if (this.createNewUserForm.invalid) {
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
        dialogConfig.data = {
            title: "Create New User",
            description: "All information is correct?",            
            actionButtonText: "Confirm",   
            numberOfButton: "2"         
            }
        const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
        modalDialog.afterClosed().subscribe(result =>{
            if(result == "Yes"){
                //call register function                
                this.createNewUser()          
            }
            else{
                console.log("stop")                
            }
        })
    }

    createNewUser(){
        //Get new role selected info
        this.NewRole = $("#roleSelection :selected").text();   
        
        //Get new Role info
        if(this.NewRole == "Customer") 
            {this.userDetails.Role_FK = "1"}
        else if(this.NewRole == "Manager")
            {this.userDetails.Role_FK = "2"}
        else
            {this.userDetails.Role_FK = "3"}

        //Get subscribe checkbox info
        if(this.subscribeChecked){
            this.customerDetails.Subscribe = 1
        }
        else{
            this.customerDetails.Subscribe = 0
        }

        console.log(this.userDetails)
        console.log(this.customerDetails)
    }
}