import { Component } from '@angular/core'
import { AuthenticationService, UserDetails } from '../authentication.service'
import { Router } from '@angular/router'
import { ProgramData } from '../data/program-data';
import { ProgramServices } from '../services/program.services'
import { HttpClient } from '@angular/common/http'
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
    templateUrl: './program-details.component.html',
    styleUrls: ['./program-details.component.css'],
    providers: [ProgramServices]
})

export class ProgramDetailsComponent {
    constructor(private http: HttpClient, private services: ProgramServices, private auth: AuthenticationService, private router: Router) { }

    ngOnInit() {

    }
}