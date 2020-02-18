import { Component, OnInit } from '@angular/core';
import { ProgramServices } from 'src/app/services/program.services';


@Component({
  selector: 'app-i-program',
  templateUrl: './i-program.component.html',
  styleUrls: ['./i-program.component.css']
})
export class GProgramComponent implements OnInit {

  //TODO: inject the service
  constructor(private service:ProgramServices) { }

  ngOnInit() {
  }
}
