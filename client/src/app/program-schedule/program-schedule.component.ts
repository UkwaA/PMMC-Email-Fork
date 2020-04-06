import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramServices } from '../services/program.services';
import { ProgramData } from '../data/program-data';
import { ProgramScheduleService } from '../services/schedule.services';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    templateUrl: './program-schedule.component.html',
    styleUrls: ['./program-schedule.component.css']
})

export class ProgramScheduleComponent implements OnInit{
    ProgramPK: number;
    ProgramType: number;
    programDetails: ProgramData;
    public selectedDate: Date = new Date();
    public allEvents: SchedulerEvent[];
    allSchedules: any = [];
    createProgramForm: FormGroup;
    submitted = false;
    
    
    constructor(private route: ActivatedRoute,
        private service: ProgramServices,
        private programScheduleServices: ProgramScheduleService,
        private fb: FormBuilder,
        ){}

    ngOnInit(){
        this.route.params.subscribe(val => {
            this.ProgramPK = val.id
        })

        this.service.getProgramHeaderDeatailsByID(this.ProgramPK).subscribe(details => {
            this.programDetails = details;
            this.ProgramType = details.ProgramType;
            document.getElementById("program_name").innerHTML = this.programDetails.Name;
            document.getElementById("program_desc").innerHTML = this.programDetails.Description;
        })

        this.programScheduleServices.getScheduleById(this.ProgramPK).subscribe(schedules =>{
            schedules.forEach(element =>{
                    var event = {
                        id : element.SchedulePK,
                        title : this.programDetails.Name,                            
                        start : new Date(element.Date + 'T' + element.StartTime),
                        end : new Date(element.Date + 'T' + element.EndTime)                        
                    }
                    this.allSchedules.push(event)
                }                    
            )                
        })        
        this.allEvents = this.allSchedules

        this.createProgramForm = this.fb.group({
            AdultQuantity: ["0", [Validators.required, Validators.min(0)]],
            Age57Quantity: ["0", [Validators.required, Validators.min(0)]],
            Age810Quantity: ["0", [Validators.required, Validators.min(0)]],
            Age1112Quantity: ["0", [Validators.required, Validators.min(0)]],
            Age1314Quantity: ["0", [Validators.required, Validators.min(0)]],
            Age1415Quantity: ["0", [Validators.required, Validators.min(0)]],
            Age1517Quantity: ["0", [Validators.required, Validators.min(0)]],
            TotalQuantity: ["0", [Validators.required, Validators.min(1)]]
        });
    }

    get f() {
        return this.createProgramForm.controls;
    }

    // Clear data when click on input field
    onFocus(event) {
        if(event.target.value == 0)
        event.target.value = "";
    }

    // Restore data when lose focus on input field
    lostFocus(event) {
        if(event.target.value === 0 ||   event.target.value === "")
        {
        event.target.value = 0;
        }
    }

    enterQuantity() {
        this.submitted = true;
        if (this.createProgramForm.invalid) {
          console.log("invalid");
          return;
        }  
    }
}