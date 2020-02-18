import { Component, OnInit } from '@angular/core';
import { ProgramServices } from 'src/app/services/program.services';


@Component({
  selector: 'app-g-program',
  templateUrl: './g-program.component.html',
  styleUrls: ['./g-program.component.css']
})
export class GProgramComponent implements OnInit {

  //TODO: inject the service
  constructor(private service:ProgramServices) { }

  ngOnInit() {
  }
}