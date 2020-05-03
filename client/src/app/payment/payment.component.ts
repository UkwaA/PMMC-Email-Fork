import { OnInit, Component, Input, Output,EventEmitter } from "@angular/core";
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
import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";

@Component({
  selector: "payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"],
})
export class PaymentComponent implements OnInit  {
  @Input() reservationDetails: any;
  @Input() reservationHeader: ReservationHeader;
  @Input() ProgramPK: number;
  @Output() token = new EventEmitter<any>();

  elements: Elements;
  card: StripeElement;

  ProgramType = "";
  userDetails: any;

  // optional parameters
  elementsOptions: ElementsOptions = {
    locale: 'en'
  };
 
  stripeTest: FormGroup;

  constructor(
    public auth: AuthenticationService,
    private fb: FormBuilder,
    public matDialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private program: ProgramServices,
    private paymentService: PaymentServices,
    private reservation: ReservationService,
    private stripeService: StripeService
  ) {}

  ngOnInit() {
    this.program
      .getProgramHeaderDeatailsByID(this.ProgramPK)
      .subscribe((result) => {
        this.ProgramType = result.ProgramType;
      });

    this.userDetails = this.auth.getUserDetails();

    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });

    this.stripeService.elements(this.elementsOptions)
      .subscribe(elements => {
        this.elements = elements;
        // Only mount the element the first time
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                color: "#32325d",
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                  color: "#32325d"
                }
              },
              invalid: {
                fontFamily: 'Arial, sans-serif',
                color: "#fa755a",
                iconColor: "#fa755a"
              }
            }
          });
          this.card.mount('#card-element');
        }
      });
  }

  pay() {
    // const name = this.stripeTest.get('name').value;
    // {
    //   name: 'tested_ca',
    //   address_line1: '123 A Place',
    //   address_line2: 'Suite 100',
    //   address_city: 'Irving',
    //   address_state: 'BC',
    //   address_zip: 'VOE 1H0',
    //   address_country: 'CA'
    // }
    const name = this.stripeTest.get('name').value;

    this.stripeService
      .createToken(this.card, {})
      .subscribe(result => {
        if (result.token) {
          this.token.emit(result.token)

          // Use the token to create a charge or a customer
          // https://stripe.com/docs/charges
          const dialogConfig = new MatDialogConfig();
          // The user can't close the dialog by clicking outside its body
          dialogConfig.disableClose = true;
          dialogConfig.id = "modal-component";
          dialogConfig.height = "auto";
          dialogConfig.maxHeight = "500px";
          dialogConfig.width = "430px";
          dialogConfig.data = {
            title: "Thanks You.",
            description: "Thank you for your payment!",
            actionButtonText: "Ok",
            numberOfButton: "1"
          }
          const modalDialog = this.matDialog.open(ModalDialogComponent, dialogConfig);
          modalDialog.afterClosed().subscribe(result => {
            if (result == "Yes") {
            }
          })
          console.log(result.token);
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }

}
