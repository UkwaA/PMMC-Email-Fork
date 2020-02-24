import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { faFacebook,faYoutube, faYelp} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkedAlt, faHandHoldingUsd, faDoorOpen, faLaughWink} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HFService } from './services/hf.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

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
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(public auth: AuthenticationService, private fb: FormBuilder, public hf: HFService, @Inject(DOCUMENT) document) { }

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