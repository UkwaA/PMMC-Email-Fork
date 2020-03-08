import { Component } from '@angular/core'
import { AuthenticationService, UserDetails } from '../authentication.service'
import { Router } from '@angular/router'
import { ProgramData } from '../data/program-data';
import { ProgramServices } from '../services/program.services'
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ModalDialogComponent } from '../components/modal-dialog/modal-dialog.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
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
        ProgramType: 0,
        IsActive: false
    }

    programCategories: Array<Object> = [
        { id: 0, name: "Group Program" },
        { id: 1, name: "Individual Program" }
    ]

    constructor(private services: ProgramServices, 
                private auth: AuthenticationService, 
                private router: Router,
                public matDialog: MatDialog) { }

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
        //check form validation here

        //add Modal Dialog
        //Configure Modal Dialog
        const dialogConfig = new MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose =true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "500px";
        dialogConfig.width = "350px";
        dialogConfig.data = {
            title: "New Program Confirmation",
            description: "Are you sure to create this program?",            
            actionButtonText: "Confirm",   
            numberOfButton: "2"         
          }
        const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
        modalDialog.afterClosed().subscribe(result =>{
            if(result == "Yes"){
                this.user = this.auth.getUserDetails();
                this.programData.CreatedBy = this.user.UserPK;
                this.programData.ImgData = "";
                this.programData.ProgramType = this.selectedValue
        
                this.services.addNewProgram(this.getFormData())
                    .subscribe((response) => {
                        console.log(response)
                        this.router.navigateByUrl("/profile/program-details/" + response +"/edit")
                    })        
            }
            else{
                //do nothing
                console.log("stop")                
            }
        })
    }

    onReady(editor) {
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