import { Component } from '@angular/core'
import { AuthenticationService, UserDetails } from '../authentication.service'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { ProgramData } from '../data/program-data';
import { ProgramServices } from '../services/program.services'
import { HttpClient } from '@angular/common/http'
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { IProgramComponent } from '../components/i-program/i-program.component';


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
        ImgData: '',
        ProgramType: 0
    }
    selectedValue: any
    files: File;

    // EventHandler for file upload
    onFileChange(event) {
        this.files = event.target.files[0];
    }
    Editor = DecoupledEditor
    
    // Option for dropdown list
    programCategories:Array<Object> = [
        {id: 0, name: "Group Program"},
        {id: 1, name: "Individual Program"}
    ]

    constructor(private route: ActivatedRoute, private http: HttpClient, private services: ProgramServices, private auth: AuthenticationService, private router: Router) { }

    ngOnInit() {
        this.programCategories.forEach(e => {
            $("#programCat").append(new Option(e['name'], e['id']));  
          });

        this.route.params.subscribe(val => {
            this.ProgramPK = val.id
            this.services.getProgramDetailsByID(this.ProgramPK).subscribe(program => {
               this.programData = program
               this.programData.ImgData = "http://localhost:3000" +  this.programData.ImgData 
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