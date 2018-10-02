import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  constructor() { }

  getGraphPREVAT() {
    var ctx = document.getElementById("graph1");
    var graph1 = new Chart(ctx, {
      type: 'bar',
      data: {
          datasets: [{
              label: 'First dataset',
              data: [80, 77, 52, 35],
              backgroundColor:'#25AA11'
          }],
          labels: ['janvier', 'février', 'mars', 'avril']
      },
      options: { 
          legend: {display:false},
          scales: {
              yAxes: [{ 
                  ticks: { 
                      min: 0,
                      max: 100,
                      beginAtZero:true
                  }
              }]
          }
      }
  });
  }

  getGraphEVSO() {
    var ctx = document.getElementById("graph2");
    var graph2 = new Chart(ctx, {
      type: 'doughnut',
      data: {
          datasets: [{
              label: 'First dataset',
              data: [62,38],
              backgroundColor:['#112200','#FFFFFF']
          }],
          
      }
  });
  }

  ngOnInit() {
    this.getGraphPREVAT();
    this.getGraphEVSO();
  }

}
