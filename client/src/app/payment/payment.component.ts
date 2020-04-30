import { OnInit, AfterViewInit, Component, Input, ViewChild, ElementRef } from "@angular/core";
import { AuthenticationService, UserDetails } from "../authentication.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogConfig, MatDialog } from "@angular/material";
import { ModalDialogComponent } from "../components/modal-dialog/modal-dialog.component";
import { Router, ActivatedRoute } from "@angular/router";

import { ProgramServices } from "../services/program.services";
import { PaymentServices } from "../services/payment.services";
import { ReservationService } from "../services/reservation.services";
import { ReservationHeader } from "../data/reservation-header";
import { ReservationGroupDetails } from "../data/reservation-group-details";
import { ReservationIndividualDetails } from "../data/reservation-individual-details";
import { AppConstants } from "../constants";

declare var Stripe;

@Component({
  selector: "payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"],
})
export class PaymentComponent implements OnInit, AfterViewInit  {
  @Input() reservationDetails: any;
  @Input() reservationHeader: ReservationHeader;
  @Input() ProgramPK: number;
  @ViewChild('cardElement',{static: false}) cardElement: ElementRef;

  token: any;
  userDetails: UserDetails;
  paymentForm: FormGroup;
  submitted = false;
  ProgramType: number;
  amount = 100;

  stripe: any; // : stripe.Stripe;
  card: any;
  cardErrors: any;
  clientSecret = "";

  confirmation: any;

  constructor(
    public auth: AuthenticationService,
    private fb: FormBuilder,
    public matDialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private program: ProgramServices,
    private paymentService: PaymentServices,
    private reservation: ReservationService
  ) {}

  ngOnInit() {
    this.program
      .getProgramHeaderDeatailsByID(this.ProgramPK)
      .subscribe((result) => {
        this.ProgramType = result.ProgramType;
      });

    this.userDetails = this.auth.getUserDetails();

    this.paymentService.createPaymentIntent(100).subscribe((res) => {
        this.clientSecret = res;
        console.log(res);
    });

    this.stripe = Stripe('pk_test_Z6rVNt6q0I5cKzAfeGOYp7wV00zAX9dQ8W');
    const elements = this.stripe.elements();

    this.card = elements.create('card');
    this.card.mount(this.cardElement.nativeElement);

    this.card.addEventListener('change', ({ error }) => {
        this.cardErrors = error && error.message;
    });
  }

  pay() {
    this.stripe.confirmCardPayment(this.clientSecret, {
      payment_method: {
        card: this.card
      }
    })
    .then((result) =>{
      if (result.error) {
        // Show error to your customer
        this.showError(result.error.message);
      } else {
        // The payment succeeded!
        this.orderComplete(result.paymentIntent.id);
      }
    });
  }

  loading (isLoading: boolean) {
    if (isLoading) {
      // Disable the button and show a spinner
      document.querySelector("button").disabled = true;
      document.querySelector("#spinner").classList.remove("hidden");
      document.querySelector("#button-text").classList.add("hidden");
    } else {
      document.querySelector("button").disabled = false;
      document.querySelector("#spinner").classList.add("hidden");
      document.querySelector("#button-text").classList.remove("hidden");
    }
  }

  showError(errorMsgText) {
    this.loading(false);
    var errorMsg = document.querySelector("#card-errors");
    errorMsg.textContent = errorMsgText;
    setTimeout(function() {
      errorMsg.textContent = "";
    }, 4000);
  }

  orderComplete(paymentIntentId) {
    this.loading(false);
    document
      .querySelector(".result-message a")
      .setAttribute(
        "href",
        "https://dashboard.stripe.com/test/payments/" + paymentIntentId
      );
    document.querySelector(".result-message").classList.remove("hidden");
    document.querySelector("button").disabled = true;
  };

  ngAfterViewInit () {
   
  }

  get f() {
    return this.paymentForm.controls;
  }

  // Clear data when click on input field
  onFocus(event) {
    if (event.target.value == 0) event.target.value = "";
  }

  // Restore data when lose focus on input field
  lostFocus(event) {
    if (event.target.value === 0 || event.target.value === "") {
      event.target.value = 0;
    }
  }

  payment() {
    this.submitted = true;
    if (this.paymentForm.invalid) {
      console.log("invalid");
      return;
    }
    //Configure Modal Dialog
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "auto";
    dialogConfig.maxHeight = "500px";
    dialogConfig.width = "350px";
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      title: "Check out",
      description: "Are you sure to check out?",
      actionButtonText: "Confirm",
      numberOfButton: "2",
    };

    const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
    modalDialog.afterClosed().subscribe((result) => {
      if (result == "Yes") {
        //Save data here

        //route to the confirmation page
        this.router.navigateByUrl("/confirmation/" + this.ProgramPK);
      } else {
        //otherwise, do nothing
      }
    });
  }
}
