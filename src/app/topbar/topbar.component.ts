import { Component, OnInit } from '@angular/core';
import { Globals } from '../app.variablesGlobales';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  providers: [ Globals ]

})
export class TopbarComponent implements OnInit {

  go : Globals;
  sns : boolean;
  constructor(private g : Globals) {
      this.sns = g.getSideNavStatus();
      // this.go.setSideNavStatus(g.getSideNavStatus());
   }

  ngOnInit() {
  }

  changeSideNavStatus() {
    console.log("changeSideNavStatus");
    this.sns = !(this.sns);
    console.log(this.sns);
    // this.go.setSideNavStatus(!(this.sns));
    // console.log(this.go.getSideNavStatus());
    
  }
}
