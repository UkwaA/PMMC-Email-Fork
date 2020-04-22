import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService, TokenPayload } from "../../authentication.service";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { RegisterModalDialogComponent } from "../register-modal-dialog/register-modal-dialog.component";

import { ModalDialogComponent } from "../modal-dialog/modal-dialog.component";

declare var $:any

@Component({
  selector: "login-prompt-modal.component",
  templateUrl: "./login-prompt-modal.component.html",
  styleUrls: ['./login-prompt-modal.component.css']
})
export class LoginPromptModal implements OnInit {
  modalHeader: String;
  modalContent: String;
  loginForm: FormGroup;

  credentials: TokenPayload = {
    UserPK: 0,
    Username: "",
    Password: "",
    Role_FK: "",
    Email: "",
  };

  constructor(
    private auth: AuthenticationService,
    public dialogRef: MatDialogRef<LoginPromptModal>,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private modalData: any
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ["", [Validators.required]],
        password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      });
      $(".alert-success").hide()
      $(".alert-danger").hide()

  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  public errorHandling = (control: string, error: string) => {
    return this.loginForm.controls[control].hasError(error);
  }

  actionFunction() {
    console.log("Modal closing");
    this.dialogRef.close("Yes");
  }

  createNew() {
    const registerDialogConfig = new MatDialogConfig();
      registerDialogConfig.id = "register-modal-component";
      registerDialogConfig.height = "auto";
      registerDialogConfig.disableClose = true;
      // registerDialogConfig.maxHeight = "600px";
      registerDialogConfig.width = "auto";
      registerDialogConfig.autoFocus = false;
      registerDialogConfig.data = {
        title: "Register New User",
        routerURL: this.modalData.routerURL,
        // firstName: this.customerInfoForm.get('firstName').value,
        // lastName: this.customerInfoForm.get('lastName').value,
        // phoneNo: this.customerInfoForm.get('phoneNum').value,
        // streetAddress: this.customerInfoForm.get('address_street').value,
        // // streetAddress2: '',
        // addressCity: this.customerInfoForm.get('address_city').value,
        // addressState: this.customerInfoForm.get('address_state').value,
        // addressZipCode: this.customerInfoForm.get('address_zipcode').value,
        // actionButtonText: "Confirm",
        numberOfButton: "2"
      };
      const registerModal = this.matDialog.open(RegisterModalDialogComponent, registerDialogConfig);
      registerModal.afterClosed().subscribe((result) => {
        if (result == "Yes")
        $(".alert-success").show()
      })
  }

  signIn() {
    if (this.loginForm.valid) {
        //;
        this.credentials.Username = this.loginForm.get('username').value;
        this.credentials.Password = this.loginForm.get('password').value;

        this.auth.login(this.credentials).subscribe(
            (res) => {
                // this.dialogRef.close("Yes");
                this.actionFunction();
            },
            (err) => {
              $(".alert-danger").show()
              //alert('Username and password do not match')
              console.log("*Username and password do not match");
              return;
            }
          );
        console.log("Sign In");
    }
  
  }
}
