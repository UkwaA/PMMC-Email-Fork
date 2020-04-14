import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService, TokenPayload } from "../../authentication.service";

@Component({
  selector: "login-prompt-modal.component",
  templateUrl: "./login-prompt-modal.component.html",
  // styleUrls: ['./modal-dialog.component.css']
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
    @Inject(MAT_DIALOG_DATA) private modalData: any
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ["", [Validators.required]],
        password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      });

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

  }

  signIn() {
    if (this.loginForm.valid) {
        //;
        this.credentials.Username = this.loginForm.get('username').value;
        this.credentials.Password = this.loginForm.get('password').value;

        this.auth.login(this.credentials).subscribe(
            (res) => {
                this.dialogRef.close("Success");
            },
            (err) => {
              //alert('Username and password do not match')
              console.log("*Username and password do not match");
              return;
            }
          );
        console.log("Sign In");
    }
  
  }
}
