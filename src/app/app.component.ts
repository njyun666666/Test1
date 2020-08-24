import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './app.animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClientApp';


  //prepareRoute(outlet: RouterOutlet) {
  //  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  //}


}
