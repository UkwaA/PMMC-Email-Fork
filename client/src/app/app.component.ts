import { Component, OnInit, HostListener, Inject} from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { faFacebook,faYoutube, faYelp} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkedAlt, faHandHoldingUsd, faDoorOpen, faLaughWink} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { PlatformLocation } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

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
  URL:string;
  registerForm: FormGroup;
  submitted = false;
  visible: boolean;


  constructor(private router: Router, private location : PlatformLocation, public auth: AuthenticationService, private fb: FormBuilder, @Inject(DOCUMENT) document) {}

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
    var pattern = /^http:\/\/.+((\/$)|(\/#$)|(\/group-program$)|(\/booking-group-program.+)|(\/individual-program$)|(\/booking-individual-program.+)|(\/contact$)|(\/register$)|(\/customer-register)|(\/login))|(\/program-schedule)/
    this.location.onPopState(() => {
      this.loadingURL = this.location.href;
      /* if (this.loadingURL == "http://localhost:4200/" || this.loadingURL == "http://localhost:4200/group-program"
      || this.loadingURL == "http://localhost:4200/individual-program" || this.loadingURL == "http://localhost:4200/contact"
      || this.loadingURL == "http://localhost:4200/customer-register" || this.loadingURL == "http://localhost:4200/login" ) {
        this.hf.visible = true;
      }
      else {
        this.hf.visible = false;
      } */
      if(pattern.test(this.loadingURL)){
        this.visible = true;
      }
      else{
        this.visible = false;
      }
  });

  this.router.events.subscribe((e) => {
    if (e instanceof NavigationEnd) {
        // Function you want to call here
        this.URL = this.location.href;
        if(pattern.test(this.URL)){
          this.visible = true;
        }
        else{
          this.visible = false;
       }
    }
 });
  /* if (this.URL == "http://localhost:4200/" || this.URL == "http://localhost:4200/group-program"
  || this.URL == "http://localhost:4200/individual-program" || this.URL == "http://localhost:4200/contact"
  || this.URL == "http://localhost:4200/customer-register" || this.URL == "http://localhost:4200/login" ) {
    this.hf.visible = true;
  }
  else {
    this.hf.visible = false;
  } */
   /*  this.hf.visible = true; */

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