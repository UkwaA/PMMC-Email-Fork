import { Component } from '@angular/core'
import { AuthenticationService, UserDetails } from '../authentication.service'
import { Router } from '@angular/router'
import { ProgramData } from '../data/program-data';
import { ProgramServices } from '../services/program.services'
import { HttpClient } from '@angular/common/http'
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
    templateUrl: './createprogram.component.html',
    styleUrls: ['./createprogram.component.css'],
    providers: [ProgramServices]
})

export class CreateProgramComponent {
    files: File;
    Editor = DecoupledEditor;
    onFileChange(event) {
        this.files = event.target.files[0];
        //let formData = new FormData()

    }
    user: UserDetails
    programData: ProgramData = {
        ProgramPk: 0,
        Name: '',
        Description: '',
        FullAmount: 0,
        CreatedDate: '',
        CreatedBy: 0,
        ImgData: ''
    }

    constructor(private http: HttpClient, private services: ProgramServices, private auth: AuthenticationService, private router: Router) { }

    ngOnInit() {

    }

    createProgram() {
        this.user = this.auth.getUserDetails();
        this.programData.CreatedBy = this.user.UserPK;
        this.programData.ImgData = "";

        this.http.post("http://localhost:3000/program/add-program", this.programData).subscribe((program) => {
            const url = "/program-management"
            this.router.navigateByUrl(url)
        })
        // this.services.addNewProgram(this.programData).subscribe(() => {
        //     console.log(this.programData)
        //     // this.router.navigateByUrl("/createprogram")
        // })
    }

    onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );
    }
    // getFormData(){

    //     const formData = new FormData();
    //     formData.append('file', this.files, this.files.name);
    //     // for(const key of Object.keys(this.programData)){
    //     //     const value = this.programData[key];
    //     //     formData.append(key, value);

    //     // }

    //     return formData;

    // }

}