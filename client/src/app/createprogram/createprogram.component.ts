import { Component } from '@angular/core'
import { AuthenticationService, UserDetails } from '../authentication.service'
import { Router } from '@angular/router'
import { ProgramData } from '../data/program-data';
import { ProgramServices } from '../services/program.services'
import { HttpClient } from '@angular/common/http'
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
declare var $: any;

@Component({
    templateUrl: './createprogram.component.html',
    styleUrls: ['./createprogram.component.css'],
    providers: [ProgramServices]
})

export class CreateProgramComponent {
    file: File
    Editor = DecoupledEditor;
    user: UserDetails
    selectedValue = 0
    programData: ProgramData = {
        ProgramPk: 0,
        Name: '',
        Description: '',
        FullAmount: 0,
        CreatedDate: '',
        CreatedBy: 0,
        ImgData: '',
        ProgramType: 0
    }

    programCategories: Array<Object> = [
        { id: 0, name: "Group Program" },
        { id: 1, name: "Individual Program" }
    ]

    constructor(private http: HttpClient, private services: ProgramServices, private auth: AuthenticationService, private router: Router) { }

    ngOnInit() {
        this.programCategories.forEach(e => {
            $("#programCat").append(new Option(e['name'], e['id']));
        });
    }

    // EventHandler for drop down list
    selectChangeHandler(event: any) {
        // Update the variable
        this.selectedValue = event.target.value;
    }

    onFileChange(event) {
        if (event.target.files.length > 0) {
            this.file = event.target.files[0]
        }
    }

    createProgram() {
        this.user = this.auth.getUserDetails();
        this.programData.CreatedBy = this.user.UserPK;
        this.programData.ImgData = "";
        this.programData.ProgramType = this.selectedValue

        this.http.post("http://localhost:3000/program/add-program", this.getFormData())
            .subscribe((response) => {
                const url = "/program-management"
                this.router.navigateByUrl(url)
            })
    }

    onReady(editor) {
        console.log(editor)
        editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );
    }
    getFormData() {
        const formData = new FormData();
        formData.append('file', this.file, this.file.name);
        for (const key of Object.keys(this.programData)) {
            const value = this.programData[key];
            formData.append(key, value);

        }

        return formData;

    }

}