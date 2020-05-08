import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { Router } from '@angular/router';
import { ProgramData } from '../data/program-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgramServices } from '../services/program.services';
import { AppConstants } from '../constants';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ModalDialogComponent } from '../components/modal-dialog/modal-dialog.component';
import { MatDialogConfig, MatDialog } from '@angular/material';

@Component({
  templateUrl: './createprogram.component.html',
  styleUrls: ['./createprogram.component.css'],
  providers: [ProgramServices],
})
export class CreateProgramComponent implements OnInit {
  @ViewChild('editor', { static: false }) inputElement: ElementRef;

  file: File;
  createProgramForm: FormGroup;
  submitted = false;
  Editor = DecoupledEditor;
  selectedProgramType = 0;
  selectedSubType = 0;
  DepositAmount = 0;

  programData: ProgramData = {
    ProgramPK: 0,
    Name: '',
    Description: '',
    DepositAmount: null,
    PricePerParticipant: null,
    MaximumParticipant: null,
    ImgData: '',
    ProgramType: 0,
    CreatedDate: '',
    CreatedBy: 0,
    IsActive: false,
    SubProgramPK: 0,
  };

  programCategories = [
    {
      id: AppConstants.PROGRAM_TYPE_CODE.GROUP_PROGRAM,
      name: AppConstants.PROGRAM_TEXT.GROUP_PROGRAM,
    },
    {
      id: AppConstants.PROGRAM_TYPE_CODE.INDIVIDUAL_PROGRAM,
      name: AppConstants.PROGRAM_TEXT.INDIVIDUAL_PROGRAM,
    },
  ];

  // Initialize Dropdown List for Sub Type of Group Program
  programSubCategories = [
    { id: 0, name: 'None' },
    { id: 1, name: AppConstants.SUB_GROUP_PROGRAM_TEXT.FIELD_TRIP },
    { id: 2, name: AppConstants.SUB_GROUP_PROGRAM_TEXT.SCOUT_PROGRAM },
    { id: 3, name: AppConstants.SUB_GROUP_PROGRAM_TEXT.DISTANCE_LEARNING },
    { id: 4, name: AppConstants.SUB_GROUP_PROGRAM_TEXT.SPECIAL_FIELD_TRIP }
  ];

  constructor(
    private services: ProgramServices,
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createProgramForm = this.fb.group({
      Name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      ],
      programType: [0, Validators.required],
      subProgramType: [0, Validators.required],
      DepositAmount: [0, [Validators.required, Validators.min(0)]],
      PricePerParticipant: [0, [Validators.required, Validators.min(0)]],
      MaximumParticipant: [0, [Validators.required, Validators.min(1)]],
      ImgData: ['', [Validators.required]],
    });
  }

  get f() {
    return this.createProgramForm.controls;
  }

  // EventHandler for drop down list of Program Type
  selectChangeHandler(event: any) {
    // Update the variable
    this.selectedProgramType = event.target.value;

    // Reset value of Deposit when user change value of Program Type
    if (this.selectedProgramType === 1) {
      this.createProgramForm.controls['DepositAmount'].patchValue(0);
      this.selectedSubType = 0;
    }
  }

  // EventHandler for drop down list Sub Type of Group Program
  selectSubTypeChangeHandler(event: any) {
    // Update the variable
    this.selectedSubType = event.target.value;
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.createProgramForm
        .get('ImgData')
        .setValue(this.file ? this.file.name : '');
    }
  }

  createProgram() {
    this.submitted = true;
    if (this.createProgramForm.invalid) {
      console.log('invalid');
      return;
    }

    this.programData.CreatedBy = this.auth.getUserDetails().UserPK;
    this.programData.ProgramType = this.selectedProgramType;
    this.programData.SubProgramPK = this.selectedSubType;
    this.programData.Name = this.createProgramForm.get('Name').value;
    this.programData.DepositAmount = this.createProgramForm.get(
      'DepositAmount'
    ).value;
    this.programData.PricePerParticipant = this.createProgramForm.get(
      'PricePerParticipant'
    ).value;
    this.programData.MaximumParticipant = this.createProgramForm.get(
      'MaximumParticipant'
    ).value;

    // Call Programs Service to send request to server
    this.services.addNewProgram(this.getFormData()).subscribe((response) => {
      console.log(response);
      this.router.navigateByUrl(
        '/profile/program-details/' + response + '/edit'
      );
    });
  }

  // Initialize CkEditor
  onReady(editor: any) {
    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      );
  }

  // Clear data when click on input field
  onFocus(event) {
    if (event.target.value === '0') {
      event.target.value = '';
    }
  }

  // Restore data when lose focus on input field
  lostFocus(event) {
    if (event.target.value === '0' || event.target.value === '') {
      event.target.value = 0;
    }
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
