import {Component, OnInit, Input} from '@angular/core'

@Component({
    selector: 'modal-dialog',
    templateUrl: './modal-dialog.component.html',
    styleUrls: ['./modal-dialog.component.css']
})

export class ModalDialogComponent{
    @Input() modalHeader: String
    @Input() modalContent: String

    constructor(){}

    ngOnInit(){

    }
}