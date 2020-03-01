import { Component, OnInit, HostListener, Inject} from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { faFacebook,faYoutube, faYelp} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkedAlt, faHandHoldingUsd, faDoorOpen, faLaughWink} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HFService } from './services/hf.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { PlatformLocation } from '@angular/common';
import { Router } from '@angular/router';

declare const window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]

})
export class AppComponent implements OnInit{
  loadingURL:string;
  registerForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private location : PlatformLocation, public auth: AuthenticationService, private fb: FormBuilder, public hf: HFService, @Inject(DOCUMENT) document) {}

  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faYelp = faYelp;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMapMarkedAlt = faMapMarkedAlt;
  faHandHoldingUsd = faHandHoldingUsd;
  faDoorOpen = faDoorOpen;
  faLaughWink = faLaughWink;

  ngOnInit() {
    this.location.onPopState(() => {
      this.loadingURL = this.location.href;
      console.log(this.loadingURL);
      if (this.loadingURL == "http://localhost:4200/" || this.loadingURL == "http://localhost:4200/group-program"
      || this.loadingURL == "http://localhost:4200/individual-program" || this.loadingURL == "http://localhost:4200/contact"
      || this.loadingURL == "http://localhost:4200/customer-register" || this.loadingURL == "http://localhost:4200/login" ) {
        this.hf.visible = true;
      }
  });
    this.hf.visible = true;

    this.registerForm = this.fb.group({
      subscribeEmail: ['', [Validators.required, Validators.email]]
    });
    
  }

  get f() { return this.registerForm.controls;}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

  // Change color on scroll
   header_variable = false;
   @HostListener('document:scroll', ['$event'])
   scrollfunction(){
     if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
       this.header_variable = true;
     }
     else {
       this.header_variable = false;
     }
   }
 }