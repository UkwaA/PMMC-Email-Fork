import { Injectable } from '@angular/core';

@Injectable()
export class HFService {
  visible: boolean;

  constructor() { this.visible = true; }

  show() { this.visible = true; }

  hide() { this.visible = false; }

  toggle() { this.visible = !this.visible; }

}