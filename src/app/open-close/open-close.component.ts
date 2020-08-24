import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { OpenCloseAnimations } from './open-close.animations';

@Component({
  selector: 'app-open-close',
  animations: [OpenCloseAnimations],
  templateUrl: 'open-close.component.html',
  styleUrls: ['open-close.component.scss']
})
export class OpenCloseComponent {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
