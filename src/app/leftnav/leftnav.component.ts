import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
// import { DossiercandidatComponent } from '../dossiercandidat/dossiercandidat.component';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.scss']
})
export class LeftnavComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDossierDialog() {
    // const dialogRef = this.dialog.open(DossiercandidatComponent);
  }
  ngOnInit() {
  }

}
