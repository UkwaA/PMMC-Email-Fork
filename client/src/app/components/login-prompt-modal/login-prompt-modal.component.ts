import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import {ErrorStateMatcher} from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return control.dirty && form.invalid;
    }
  }

@Component({
  selector: "login-prompt-modal.component",
  templateUrl: "./login-prompt-modal.component.html",
  // styleUrls: ['./modal-dialog.component.css']
})
export class LoginPromptModal implements OnInit {
  errorMatcher = new MyErrorStateMatcher();
  modalHeader: String;
  modalContent: String;
  loginForm: FormGroup;
  returnUrl: string;

  constructor(
    public dialogRef: MatDialogRef<LoginPromptModal>,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private modalData: any
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ["", [Validators.required]],
        password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      });

      this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  public errorHandling = (control: string, error: string) => {
    return this.loginForm.controls[control].hasError(error);
  }

  actionFunction() {
    //this.closeModal();
    this.dialogRef.close("Yes");
  }

  createNew() {
    this.dialogRef.close("CreateNew");
  }

  signIn() {
    if (this.loginForm.valid) {
        //this.dialogRef.close("Signin");
        console.log("Sign In");
    }
  
  }
}
