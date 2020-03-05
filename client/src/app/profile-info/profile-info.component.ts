import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../services/customer.services';

@Component({
    selector: 'profile-info',
    templateUrl: './profile-info.component.html',
    styleUrls: ['./profile-info.component.css']
  })

  export class ProfileInfo implements OnInit {
    submitted = false;
    currentCustomerPK: number
    customerDetails: any
    constructor(private route:ActivatedRoute, 
      private router: Router,
      private customer: CustomerService) {}

    ngOnInit() {
      this.route.params.subscribe(val =>{
        this.currentCustomerPK = val.id
        this.customer.getCustomerInfoByID(this.currentCustomerPK).subscribe(cus =>{
          this.customerDetails = cus
          console.log(this.customerDetails)
        })
      })
    }

    onSubmit(){
      this.submitted = true;
    }
  }