import { Component } from '@angular/core'
import { AuthenticationService, UserDetails } from '../authentication.service'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { ProgramData } from '../data/program-data';
import { ProgramServices } from '../services/program.services'
import { HttpClient } from '@angular/common/http'
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
declare var $: any;

@Component({
    templateUrl: './program-details.component.html',
    styleUrls: ['./program-details.component.css'],
    providers: [ProgramServices]
})

export class ProgramDetailsComponent {
    programPK: number
    programData: ProgramData
    Editor = DecoupledEditor;
    programCategories:string[] = ['Group Program', 'Individual Program'];
    constructor(private route: ActivatedRoute, private http: HttpClient, private services: ProgramServices, private auth: AuthenticationService, private router: Router) { }

    ngOnInit() {
        this.programCategories.forEach(e => {
            $("#programCat").append(new Option(e, e));  
          });
        this.route.params.subscribe(val => {
            this.programPK = parseInt(this.route.snapshot.paramMap.get('ProgramPK'));
            this.services.getProgramDetailsByID(this.programPK).subscribe((program) => {
               
            })
        })
    }

    onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );
    }
}