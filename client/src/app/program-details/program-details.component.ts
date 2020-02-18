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
    ProgramPK: number
     
    programData: ProgramData = {
        ProgramPk: 0,
        Name: '',
        Description: '',
        FullAmount: 0,
        CreatedDate: '',
        CreatedBy: 0,
        ImgData: ''
    }
    files: File;
    onFileChange(event) {
        this.files = event.target.files[0];
    }
    Editor = DecoupledEditor
    
    programCategories:string[] = ['Group Program', 'Individual Program'];
    constructor(private route: ActivatedRoute, private http: HttpClient, private services: ProgramServices, private auth: AuthenticationService, private router: Router) { }

    ngOnInit() {
        this.programCategories.forEach(e => {
            $("#programCat").append(new Option(e, e));  
          });

        this.route.params.subscribe(val => {
            this.ProgramPK = val.id
            this.services.getProgramDetailsByID(this.ProgramPK).subscribe(program => {
               this.programData = program
            })
        })
    }

    // onReady(editor) {
    //     editor.ui.getEditableElement().parentElement.insertBefore(
    //         editor.ui.view.toolbar.element,
    //         editor.ui.getEditableElement()
    //     );
    // }

    upLoad() {
        this.http.post("http://localhost:3000/program/add-image", this.programData).subscribe((program) => {
          
        })
    }

    getFormData(){

        const formData = new FormData();
        formData.append('file', this.files, this.files.name);
        for(const key of Object.keys(this.programData)){
            const value = this.programData[key];
            formData.append(key, value);

        }

        return formData;

    }
}