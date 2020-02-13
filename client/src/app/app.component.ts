import { Component} from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { faFacebook,faYoutube, faYelp} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkedAlt, faHandHoldingUsd, faDoorOpen, faLaughWink} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public auth: AuthenticationService) {}
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faYelp = faYelp;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMapMarkedAlt = faMapMarkedAlt;
  faHandHoldingUsd = faHandHoldingUsd;
  faDoorOpen = faDoorOpen;
  faLaughWink = faLaughWink;

}