import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../services/customer.services';
import { CustomerData } from '../data/customer-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalDialogComponent } from '../components/modal-dialog/modal-dialog.component';

@Component({
    selector: 'profile-info',
    templateUrl: './profile-info.component.html',
    styleUrls: ['./profile-info.component.css']
  })

export class ProfileInfo implements OnInit {
  submitted = false;
  currentCustomerPK: number;
  isDisabled: boolean;
  customerInfoForm: FormGroup;
  subscribeChecked: boolean;
  customerDetails: CustomerData = {
    UserPK: 0,
    FirstName: '',
    LastName: '',
    PhoneNo: '',
    Address: '',
    City: '',
    State: '',
    Zipcode: '',
    Subscribe: 0,
  }


  constructor(private route: ActivatedRoute,
              private router: Router,
              private customer: CustomerService,
              private fb: FormBuilder,
              public matDialog: MatDialog) {}

  ngOnInit() {
    this.isDisabled = true;
    this.route.params.subscribe(val => {
      this.currentCustomerPK = val.id;
      this.customer.getCustomerInfoByID(this.currentCustomerPK).subscribe(cus => {
        this.customerDetails = cus;
        if (cus.Subscribe === 0) {
          this.subscribeChecked = false;
        } else {
          this.subscribeChecked = true;
        }
      });
    });
    this.customerInfoForm = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      PhoneNo: ['', Validators.required],
      Address: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', [Validators.required, Validators.maxLength(2)]],
      Zipcode: ['', Validators.required],
      Subscribe: []
    });
  }

  get f() { return this.customerInfoForm.controls; }

  viewOrEditMode() {
    if (this.isDisabled) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  // Configure Modal Dialog
  openModal() { 
    // Form validation
    this.submitted = true;
    if (this.customerInfoForm.invalid) {
      return;
    }
    // Configure Modal Dialog
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = 'auto';
    dialogConfig.maxHeight = '500px';
    dialogConfig.width = '350px';
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      title: 'Update Personal Info',
      description: 'All information is correct?',
      actionButtonText: 'Confirm',
      numberOfButton: '2'
    };

    const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result => {
      if (result === 'Yes'){
          // call register function
          this.updateInfo();
      } else {}
    });
  }

  updateInfo() {
    if (this.subscribeChecked) {
      this.customerDetails.Subscribe = 1;
    } else {
      this.customerDetails.Subscribe = 0;
    }

    this.customer.updateCustomerInfo(this.currentCustomerPK, this.customerDetails).subscribe(res => {
      this.router.navigateByUrl('/profile');
    });
  }
}
