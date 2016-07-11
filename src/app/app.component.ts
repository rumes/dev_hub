import { Component } from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    PolymerElement('vaadin-combo-box'),
    PolymerElement('paper-input'),
    PolymerElement('paper-scroll-header-panel'),
    PolymerElement('paper-toolbar')
  ]
})
export class AppComponent {
  title = 'my-project works!';
  myLabel='Select a number'
  myValue = '4';
  myItems = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
}
