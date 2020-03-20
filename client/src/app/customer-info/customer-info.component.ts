import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../authentication.service'
import { Router, ActivatedRoute } from '@angular/router'
import { CustomerData } from '../data/customer-data'
import { CustomerService } from '../services/customer.services'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomerModalDialogComponent } from '../components/customer-modal-dialog/customer-modal-dialog.component';
import { faAddressBook, faPhoneSquare, faHome, faMapMarker,faMapPin, faMap} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerRegisterComponent implements OnInit {
  customerInfoForm: FormGroup;
  submitted = false;
  errorMessage = '';


  
  constructor(private auth: AuthenticationService, private router: Router, private route:ActivatedRoute,
    private formBuilder: FormBuilder, public customerService:CustomerService,
    public matDialog: MatDialog) { }

    faAddressBook =faAddressBook;
    faPhoneSquare = faPhoneSquare;
    faHome = faHome;
    faMapMarker = faMapMarker;
    faMapPin = faMapPin;
    faMap = faMap;

  credentials: CustomerData = {
    CustomerPK: 0,
    FirstName: '',
    LastName: '',
    PhoneNo: '',
    Address: '',
    City: '',
    State: '',
    Zipcode: '',
    Subscribe: 0
  }

  ngOnInit() {
    this.customerInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNum: ['', [Validators.required, Validators.minLength(9)]],
      address_street: ['', Validators.required],
      //address_unit: [''],
      address_city: ['', Validators.required],
      address_state: ['', [Validators.required, Validators.minLength(2)]],
      address_zipcode: ['', [Validators.required, Validators.minLength(5)]],
      subscribe: [0]
    })
    this.route.params.subscribe(val => {
      this.credentials.CustomerPK = val.id
    })

  }

  checkSubmission(): any {
    this.submitted = true;

    return this.customerInfoForm.status;
  }

  get f() { return this.customerInfoForm.controls; }

  openModal(){
    //Validate form before open modal dialog
    this.submitted = true;
    // stop here if form is invalid
    if (this.customerInfoForm.invalid) {
        return;
    }

    //Configure Modal Dialog
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose =true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "auto";
    dialogConfig.maxHeight = "500px";
    dialogConfig.width = "350px";
    dialogConfig.data = {
        title: "Register Confirmation",
        firstName: this.customerInfoForm.get('firstName').value,
        lastName: this.customerInfoForm.get('lastName').value,
        phoneNo: this.customerInfoForm.get('phoneNum').value,
        streetAddress: this.customerInfoForm.get('address_street').value,  
        // streetAddress2: '',
        addressCity: this.customerInfoForm.get('address_city').value, 
        addressState: this.customerInfoForm.get('address_state').value, 
        addressZipCode: this.customerInfoForm.get('address_zipcode').value, 
        actionButtonText: "Confirm",   
        numberOfButton: "2"         
      }
    const modalDialog = this.matDialog.open(CustomerModalDialogComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result =>{
        if(result == "Yes"){
            this.finishRegister()
        }
    })
}

  checkBoxClicked(): any {
    if (this.customerInfoForm.get('subscribe').value == 0)
      this.customerInfoForm.get('subscribe').setValue(1)
    else
      this.customerInfoForm.get('subscribe').setValue(0)
    this.credentials.Subscribe = this.customerInfoForm.get('subscribe').value
  }

  finishRegister() {
    this.submitted = true;
    if (this.customerInfoForm.invalid) {
      return;
    }
    // this.customer = new CustomerData()

    this.customerService.finishRegister(this.credentials).subscribe((res) => {
      if (res.error) {
        this.errorMessage = "*" + res.error
        return
      }
      else
        this.router.navigateByUrl("/");
    },
      err => {
        console.error(err);
      }
    );
  }
}

// providers: [
//   {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
// ]