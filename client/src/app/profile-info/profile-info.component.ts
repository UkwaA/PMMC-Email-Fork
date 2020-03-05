import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../services/customer.services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalDialogComponent } from '../components/modal-dialog/modal-dialog.component';

@Component({
    selector: 'profile-info',
    templateUrl: './profile-info.component.html',
    styleUrls: ['./profile-info.component.css']
  })

  export class ProfileInfo implements OnInit {
    submitted = false
    currentCustomerPK: number
    customerDetails: any
    isDisabled: boolean
    customerInfoForm: FormGroup
    subscribeChecked: boolean

    constructor(private route:ActivatedRoute, 
      private router: Router,
      private customer: CustomerService,
      private fb: FormBuilder,
      public matDialog: MatDialog) {}

    ngOnInit() {
      this.isDisabled = true;
      this.route.params.subscribe(val =>{
        this.currentCustomerPK = val.id
        this.customer.getCustomerInfoByID(this.currentCustomerPK).subscribe(cus =>{
          this.customerDetails = cus
          console.log(this.customerDetails)
          if(cus.Subscribe == 0){
            this.subscribeChecked = false
          }            
          else{
            this.subscribeChecked = true
          }
            
        })
      })
      this.customerInfoForm = this.fb.group({        
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
    }

    get f() { return this.customerInfoForm.controls; }

    //Configure Modal Dialog
    openModal(){ 
      //Form validation
      this.submitted = true;
      if (this.customerInfoForm.invalid) {
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
          title: "Update Personal Info",
          description: "All information is correct?",            
          actionButtonText: "Confirm",   
          numberOfButton: "2"         
        }
        // https://material.angular.io/components/dialog/overview
      // https://material.angular.io/components/dialog/overview
      const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
      modalDialog.afterClosed().subscribe(result =>{
          if(result == "Yes"){
              //call register function                
              this.updateInfo()
          }
          else{
              console.log("stop")                
          }
      })
    }

    updateInfo(){      
      if(this.subscribeChecked){
        this.customerDetails.Subscribe = 1
      }
      else{
        this.customerDetails.Subscribe = 0
      }
      console.log(this.customerDetails)
      // stop here if form is invalid
      

      this.customer.updateCustomerInfo(this.currentCustomerPK, this.customerDetails).subscribe(res => {
        console.log(res.message)
        this.router.navigateByUrl('/profile')
      }),
      error=>{
        console.log(error)
      }
      
    }
  }