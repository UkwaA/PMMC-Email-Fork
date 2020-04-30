import { Component, OnInit, Input } from "@angular/core";
import { ProgramServices } from "../services/program.services";

@Component({
  selector: "confirmation",
  templateUrl: "./confirmation.component.html",
  styleUrls: ["./confirmation.component.css"],
})
export class ConfirmationComponent implements OnInit {
  @Input() reservationDetails: any;
  @Input() reservationHeader: any;
  @Input() ProgramPK: number;
  @Input() customerSelectDate: string;
  @Input() customerSelectTime: string;

  ProgramType = 0;
  ProgramName = "";
  
  constructor(private service: ProgramServices) {}

  ngOnInit() {
    this.service
      .getProgramHeaderDeatailsByID(this.ProgramPK)
      .subscribe((program) => {
        this.ProgramName = program.Name;
        this.ProgramType = program.ProgramType;
      });
  }
}
