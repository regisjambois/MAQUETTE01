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
          datasets:
          [{
              label: 'Postes à réaliser',
              data: [1021, 800, 850, 1020],
              backgroundColor:'#a37604'
          },{
            label: 'Postes réalisés',
            data: [949, 710, 350, 120],
            backgroundColor:'#566d4e'
          }],
          labels: ['janvier', 'février', 'mars', 'avril']
      },
      options: { 
          legend: {display:false},
          scales: {
              yAxes: [{ 
                  ticks: { 
                      min: 0,
                      max: 1200,
                      beginAtZero:true
                  }
              }]
          }
      }
  });
  }

getGraphEVSO() {
    var ctx = document.getElementById("graph3");
    var graph3 = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets:
            [{
                label: 'Promotion',
                data: [400, 400, 450],
                backgroundColor:'#ba86b2'
            },{
              label: 'Recrutement réalisés',
              data: [380, 250, 200],
              backgroundColor:'#2d6016'
            }],
            labels: ['février', 'avril', 'juin']
        },
        options: { 
            legend: {display:false},
            scales: {
                yAxes: [{ 
                    ticks: { 
                        min: 0,
                        max: 1200,
                        beginAtZero:true
                    }
                }]
            }
        }
  });
  }

getGraphPREVATParMetiers() {
    var ctx = document.getElementById("graph2");
    var graph2 = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
          datasets:
          [{
              label: 'Postes à réaliser',
              data: [70, 30, 70, 220, 5, 10, 10, 5, 20, 170, 1, 250, 30, 20, 70, 20, 10, 10],
              backgroundColor:'#a37604'
          },{
            label: 'Postes réalisés',
            data: [65, 25, 70, 219, 4, 10, 8, 0, 18, 153, 0, 238, 15, 20, 68, 18, 8, 10],
            backgroundColor:'#566d4e'
          }],
          labels: ['Administration - Secrétariat',
            'Aéronautique', 
            'BTP',
            'Combat', 
            'Communication', 
            'Comptabilité - Gestion - Finance',
            'Droit',
            'Formation - Enseignement',
            'Informatique - Électronique',
            'Logistique - Transport',
            'Musique', 
            'Mécanique - Électricité',
            'Renseignement', 
            'Ressources humaines',
            'Restauration - Hôtellerie - Loisirs',
            'Santé - Secours',
            'Sports', 
            'Sécurité - Prévention'
            ]
      },
      options: { 
          legend: {display:false},
          scales: {
              xAxes: [{ 
                  ticks: { 
                      min: 0,
                      max:250,
                      beginAtZero:true
                  }
              }]
          }
      }
  });
}


  ngOnInit() {
    this.getGraphPREVAT();
    this.getGraphPREVATParMetiers();
    this.getGraphEVSO();
    
  }

}
