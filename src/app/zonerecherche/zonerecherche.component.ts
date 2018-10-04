import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zonerecherche',
  templateUrl: './zonerecherche.component.html',
  styleUrls: ['./zonerecherche.component.scss'],
  
})

export class ZonerechercheComponent implements OnInit {
  
  showMePartially: boolean = false;

  constructor() { }
  
  openDossier() {
    this.showMePartially=true;
    console.log("open Dossier");    
  }

  cancelDossier() {
    this.showMePartially=false;
    console.log("close Dossier");
  }

  validerDossier() {
    this.showMePartially=false;
    console.log("valider Dossier");
  }

  ngOnInit() {
  }

}
