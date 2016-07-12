import { Component,ElementRef, OnInit } from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    PolymerElement('vaadin-combo-box'),
    PolymerElement('paper-button'),
    PolymerElement('paper-scroll-header-panel'),
    PolymerElement('paper-toolbar'),
    PolymerElement('paper-drawer-panel'),
    PolymerElement('paper-header-panel'),
    PolymerElement('paper-toolbar'),
    PolymerElement('iron-icon'),
    PolymerElement('paper-icon-button'),
    PolymerElement('paper-toolbar')
  ]
})
export class AppComponent {
  
  constructor() {
  }
  title = "title";

  ngOnInit() {
  }
 
 
}
