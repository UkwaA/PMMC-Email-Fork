import { Injectable } from '@angular/core';

@Injectable()
export class HFService {
  visible: boolean;

  constructor() { this.visible = false; }

  show() { this.visible = false; }

  hide() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

}