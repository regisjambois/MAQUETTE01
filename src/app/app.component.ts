import { Component } from '@angular/core';
import { Globals } from './app.variablesGlobales';
import {LoggerService} from "./logger.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Globals]
})
export class AppComponent {
  title = 'Maquette de la page d\'accueil du projet SPARTA';
  sns : boolean;

  constructor(private g : Globals, private logger:LoggerService) {
    this.sns = g.getSideNavStatus();
    console.log("AppComponent : ", this.sns);
    this.logger.debug('Dans le constructeur ...');
  }



}
