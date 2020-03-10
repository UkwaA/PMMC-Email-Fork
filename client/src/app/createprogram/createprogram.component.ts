import { Component } from '@angular/core'
import { AuthenticationService, UserDetails } from '../authentication.service'
import { Router } from '@angular/router'
import { ProgramData } from '../data/program-data';
import { ProgramServices } from '../services/program.services'
//import { AppConstants } from '../constants'
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
    selectedValue = 0;
    selectedSubType = 0;
    programData: ProgramData = {
        ProgramPk: 0,
        Name: '',
        Description: '',
        DepositAmount: 0,
        PricePerParticipant: 0,
        MaximumParticipant: 0,
        ImgData: '',
        ProgramType: 0,
        CreatedDate: '',
        CreatedBy: 0,
        IsActive: false,
        SubProgramPk: 0
    }

    // Initialize Dropdown List for Program Type
    programCategories: Array<Object> = [
        { id: 0, name: "Group Program" },
        { id: 1, name: "Individual Program" }
    ]

    // Initialize Dropdown List for Sub Type of Group Program
    programSubCategories: Array<Object> = [
        { id: 0, name: "None" },
        { id: 1, name: "Scout Program" },
        { id: 2, name: "Field Trip" }
    ]

    constructor(private services: ProgramServices,
        private auth: AuthenticationService,
        private router: Router) { }

    ngOnInit() {
        this.programCategories.forEach(e => {
            $("#programCat").append(new Option(e['name'], e['id']));
        });
        this.programSubCategories.forEach(e => {
            $("#programSubCategories").append(new Option(e['name'], e['id']));
        });
    }

    // EventHandler for drop down list of Program Type
    selectChangeHandler(event: any) {
        // Update the variable
        this.selectedValue = event.target.value;
    }

    // EventHandler for drop down list Sub Type of Group Program
    selectSubTypeChangeHandler(event: any) {
        // Update the variable
        this.selectedSubType = event.target.value;
    }

    onFileChange(event) {
        if (event.target.files.length > 0) {
            this.file = event.target.files[0]
        }
    }

    createProgram() {
        this.programData.CreatedBy = this.auth.getUserDetails().UserPK;
        this.programData.ImgData = "";
        this.programData.ProgramType = this.selectedValue;
        this.programData.SubProgramPk = this.selectedSubType;

        // Call Programs Service to send request to server
        this.services.addNewProgram(this.getFormData())
            .subscribe((response) => {
                console.log(response)
                this.router.navigateByUrl("/profile/program-details/" + response + "/edit")
            })
    }

    onReady(editor:any) {
        editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );
    }
    getFormData() {
        // Use FormData to pass file data to server.
        // Without FormData, the file data will be empty.
        const formData = new FormData();
        formData.append('file', this.file, this.file.name);
        for (const key of Object.keys(this.programData)) {
            const value = this.programData[key];
            formData.append(key, value);

        }

        return formData;

    }

}