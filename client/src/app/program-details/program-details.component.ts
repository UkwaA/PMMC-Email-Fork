import { Component, ViewChild } from '@angular/core'
import { AuthenticationService, UserDetails } from '../authentication.service'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { ProgramData } from '../data/program-data';
import { ProgramServices } from '../services/program.services'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalDialogComponent } from '../components/modal-dialog/modal-dialog.component';
import { AppConstants } from '../constants';
// import { BookingGroupData } from 'src/app/data/booking-group-data';
import { BookingIndividualData } from 'src/app/data/booking-individual-data';
import { GProgramComponent } from '../components/g-program/g-program.component'
import { IProgramComponent } from '../components/i-program/i-program.component';

declare var $: any;

@Component({
    templateUrl: './program-details.component.html',
    styleUrls: ['./program-details.component.css'],
    providers: [ProgramServices]
})

export class ProgramDetailsComponent {
    @ViewChild(GProgramComponent, { static: false }) gComponent: GProgramComponent;
    @ViewChild(IProgramComponent, { static: false }) iComponent: IProgramComponent;

    viewImgHref: string
    // bookingGroupData: BookingGroupData
    bookingIndividualData: BookingIndividualData
    bookingRequirementData: any
    ProgramPK: number
    PageMode: string
    ProgramTypeText: string         // For display on the HTML
    programTypeShortText: string     // For service call selection
    programData: ProgramData = {
        ProgramPK: 0,
        Name: '',
        Description: '',
        DepositAmount: 0,
        PricePerParticipant: 0,
        MaximumParticipant: 0,
        ImgData: '',
        ProgramType: 0,
        CreatedDate: '',
        CreatedBy: 0,
        IsActive: true,
        SubProgramPK: 0
    }
    selectedValue: any
    file: File;
    isDisabled: boolean;

    // EventHandler for file upload
    onFileChange(event) {
        if (event.target.files.length > 0) {
            this.file = event.target.files[0];
            this.programData.ImgData = (this.file ? this.file.name : '');
        } 
        
    }
    Editor = DecoupledEditor

    // Option for dropdown list
    programCategories: Array<Object> = [
        { id: 0, name: "Group Program" },
        { id: 1, name: "Individual Program" }
    ]

    constructor(public matDialog: MatDialog, private route: ActivatedRoute, private http: HttpClient, private services: ProgramServices, private auth: AuthenticationService, private router: Router) { }

    ngOnInit() {
        this.programCategories.forEach(e => {
            $("#programCat").append(new Option(e['name'], e['id']));
        });

        this.route.params.subscribe(val => {
            this.ProgramPK = val.id

            // Get the Page mode: View/Edit
            this.PageMode = val.mode

            // Set isDisable for component
            switch (this.PageMode) {
                case 'view':
                    this.isDisabled = true;
                    break;
                case 'edit':
                    this.isDisabled = false;
                    break;
            }

            // Get program details by ID
            this.services.getProgramHeaderDeatailsByID(this.ProgramPK).subscribe(program => {
                this.programData = program

                this.viewImgHref = AppConstants.EXPRESS_SERVER_URL + this.programData.ImgData
                if (this.programData.ProgramType == 0) {
                    this.ProgramTypeText = "Group Program"
                    this.programTypeShortText = 'g'
                }
                else {
                    this.ProgramTypeText = "Individual Program"
                    this.programTypeShortText = 'i'
                }
            })
        })
    }

    // EventHandler to capture data change from child component
    dataChangedHandler(data: any) {
        this.bookingRequirementData = data
    }

    onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );
    }

    getFormData() {
        const formData = new FormData();
        if(this.file) {
            formData.append('file', this.file, this.file.name);
        }

        for (const key of Object.keys(this.programData)) {
            const value = this.programData[key];
            formData.append(key, value);
        }
        return formData;
    }

    //Configure Modal Dialog
    openModal() {
        //Configure Modal Dialog
        const dialogConfig = new MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose = true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "auto";
        dialogConfig.maxHeight = "500px";
        dialogConfig.width = "430px";
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            title: "Update Group Program Details",
            description: "All information is correct?",
            actionButtonText: "Confirm",
            numberOfButton: "2"
        }
        const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
        modalDialog.afterClosed().subscribe(result => {
            if (result == "Yes") {
                //call register function                
                this.submit()
            }
            else {
                console.log("stop")
            }
        })
    }

    submit() {
    
        switch (this.programData.ProgramType) {
            case 0:
                this.bookingRequirementData = this.gComponent.bookingGroup
                break;
            case 1:
                this.bookingRequirementData = this.iComponent.bookingIndividual
                break;
        }
        
        // Update Program Header Data
        this.services.updateProgramHeader(this.getFormData())
            .subscribe((result) => {
                this.services.updateProgramLayoutDetails(this.programTypeShortText, this.bookingRequirementData)
                    .subscribe((res) => {
                        this.router.navigateByUrl("/profile/program-management")
                    })
            })
        console.log(this.gComponent.bookingGroup)
    }
}