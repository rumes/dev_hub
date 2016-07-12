import { Component,ElementRef, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  events: ['event: iron-overlay-opened', 'event: iron-overlay-closed'],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    PolymerElement('vaadin-combo-box'),
    PolymerElement('paper-button'),
    PolymerElement('paper-scroll-header-panel'),
    PolymerElement('paper-toolbar'),
    PolymerElement('paper-drawer-panel'),
    PolymerElement('paper-header-panel'),
    PolymerElement('paper-toolbar'),
    PolymerElement('iron-icon'),
    PolymerElement('paper-icon-button'),
    PolymerElement('paper-toolbar'),
    PolymerElement('paper-dialog'),
    PolymerElement('paper-input')
  ]
})
export class AppComponent {
  
  constructor() {
  }
  title = "title";
  dialo_stat = ""

  ngOnInit() {
  } 

  clickHandler(e) {
      var dialog :any = document.getElementById('dialog');
      dialog.open();     
    }
  singInEx(){
    var dialog :any = document.getElementById('dialog');
    dialog.close();
  }

  singIn(){

  }
 
}
