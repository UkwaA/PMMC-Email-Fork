import { Component } from '@angular/core'
import { AuthenticationService, UserDetails } from '../authentication.service'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { ProgramData } from '../data/program-data';
import { ProgramServices } from '../services/program.services'
import { HttpClient } from '@angular/common/http'
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { IProgramComponent } from '../components/i-program/i-program.component';
import { AppConstants } from '../constants';

declare var $: any;

@Component({
    templateUrl: './program-details.component.html',
    styleUrls: ['./program-details.component.css'],
    providers: [ProgramServices]
})

export class ProgramDetailsComponent {
    ProgramPK: number
    PageMode: string
    ProgramTypeText: string
    programData: ProgramData = {
        ProgramPk: 0,
        Name: '',
        Description: '',
        FullAmount: 0,
        CreatedDate: '',
        CreatedBy: 0,
        ImgData: '',
        ProgramType: 0,
        IsActive: true
    }
    selectedValue: any
    files: File;
    isDisabled: boolean;

    // EventHandler for file upload
    onFileChange(event) {
        this.files = event.target.files[0];
    }
    Editor = DecoupledEditor
    
    // Option for dropdown list
    programCategories: Array<Object> = [
        { id: 0, name: "Group Program" },
        { id: 1, name: "Individual Program" }
    ]

    constructor(private route: ActivatedRoute, private http: HttpClient, private services: ProgramServices, private auth: AuthenticationService, private router: Router) { }

    ngOnInit() {
        this.programCategories.forEach(e => {
            $("#programCat").append(new Option(e['name'], e['id']));  
          });

        this.route.params.subscribe(val => {
            this.ProgramPK = val.id

            // Get the Page mode: View/Edit
            this.PageMode = val.mode
            
            // Set isDisable for component
            switch(this.PageMode)
            {
                case 'view':
                    this.isDisabled = true;
                    break;
                case 'edit':
                    this.isDisabled = false;
                    break;
            }

            // Get program details by ID
            this.services.getProgramDetailsByID(this.ProgramPK).subscribe(program => {
               this.programData = program
               this.programData.ImgData = AppConstants.SERVER_URL +  this.programData.ImgData 
               if(this.programData.ProgramType == 0) {
                    this.ProgramTypeText = "Group Program"
               }
               else {
                    this.ProgramTypeText = "Individual Program"
               }
            })
        })
    }

    // EventHandler for drop down list
    selectChangeHandler(event: any) {
        // Update the variable
        this.selectedValue = event.target.value;
        //console.log(this.selectedValue)
    }

    upLoad() {
        this.http.post("http://localhost:3000/program/add-image", this.programData).subscribe((program) => {
        })
    }

    /* onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(
           editor.isReadOnly = true,
           editor.ui.getEditableElement()
        );
    } */

    onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );
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