import { Component} from '@angular/core';
// import { PlotlyModule } from 'angular-plotly.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {
state= true;
state2=true;

selections = [];
//this.selections.push();
removeElement(index){
  let index1= this.selections.indexOf(index); 
  this.selections.splice(index1,1);
}

addElement($event){
    console.log("the captured data is as follows: ");  
  var e= $event.points;
  console.log(e[0].data.name);
  console.log(e[0].y); 
  if(e.length==3) {
    var datapoint:any =[
      e[0].data.name + " "+String(e[0].y),
      e[1].data.name +" "+ String(e[1].y),
      e[2].data.name +" "+ String(e[2].y)
    ];
    // if((this.selections.findIndex(datapoint))>-1)   {
    //   alert("this element is already present!");
    // } else{
      
      this.selections.push(datapoint);                                  
  }
  else {
    var datapoint:any=e[0].data.name + " "+String(e[0].y);   
       
      this.selections.push(datapoint);
    }
    
  }   

//     }
//     this.selections.push(datapoint);
//   }  
//   else {
//     let datapoint={
//       "datapoint1":e[0],
//   }
//   this.selections.push(datapoint);
// }

onClick() {
  if(this.state==true) {
    this.state=false;
  }
  else{
    this.state=true;
  }
}
onClick2() {
  if(this.state2==false){
    this.state2=true;
  }
  else {
    this.state2=false;
  }
}

data=[{
                
  x: [2.02, 2.12, 2.22, 2.32, 2.42, 2.53, 2.63, 2.73, 2.83, 2.93, 3.03, 3.13, 3.23, 3.33, 3.43, 3.54, 3.64, 3.74, 3.84, 3.94, 4.04, 4.14, 4.24, 4.34, 4.44, 4.55, 4.65, 4.75, 4.85, 4.95, 5.05, 5.15, 5.25, 5.35, 5.45, 5.56, 5.66, 5.76, 5.86, 5.96, 6.06, 6.16, 6.26, 6.36, 6.46, 6.57, 6.67, 6.77, 6.87, 6.97, 7.07, 7.17, 7.27, 7.37, 7.47, 7.58, 7.68, 7.78, 7.88, 7.98, 8.08, 8.18, 8.28, 8.38, 8.48, 8.59, 8.69, 8.79, 8.89, 8.99, 9.09, 9.19, 9.29, 9.39, 9.49, 9.6, 9.7, 9.8, 9.9, 10.0],
  y: [39, 73, 11, 28, 7, 29, 30, 28, 80, 47, 12, 38, 27, 29, 99, 78, 77, 56, 28, 13, 92, 41, 19, 25, 28, 11, 20, 22, 46, 62, 68, 61, 45, 44, 10, 25, 89, 82, 28, 22, 24, 29, 32, 29, 29, 40, 55, 75, 20, 82, 67, 33, 92, 14, 16, 22, 86, 55, 37, 42, 42, 85, 60, 11, 54, 3, 34, 29, 59, 28, 25, 67, 90, 10, 29, 16, 51, 17, 2, 34], 
  type: 'line',
  name: "Recommended Events",
  orientation: "h",
  marker: {
      color: 'rgb(125, 207, 228)'
    },
  line: {
  dash: 'dashdot',
  width: 3
},

},
{
              
x: [2.02, 2.12, 2.22, 2.32, 2.42, 2.53, 2.63, 2.73, 2.83, 2.93, 3.03, 3.13, 3.23, 3.33, 3.43, 3.54, 3.64, 3.74, 3.84, 3.94, 4.04, 4.14, 4.24, 4.34, 4.44, 4.55, 4.65, 4.75, 4.85, 4.95, 5.05, 5.15, 5.25, 5.35, 5.45, 5.56, 5.66, 5.76, 5.86, 5.96, 6.06, 6.16, 6.26, 6.36, 6.46, 6.57, 6.67, 6.77, 6.87, 6.97, 7.07, 7.17, 7.27, 7.37, 7.47, 7.58, 7.68, 7.78, 7.88, 7.98, 8.08, 8.18, 8.28, 8.38, 8.48, 8.59, 8.69, 8.79, 8.89, 8.99, 9.09, 9.19, 9.29, 9.39, 9.49, 9.6, 9.7, 9.8, 9.9, 10.0],
y: [32, 11, 30, 7, 19, 11, 85, 23, 43, 32, 29, 91, 8, 73, 33, 77, 56, 40, 13, 96, 55, 13, 28, 31, 1, 42, 39, 70, 62, 68, 61, 45, 44, 10, 25, 89, 82, 28, 2, 24, 1, 32, 16, 29, 40, 55, 75, 20, 41, 67, 33, 92, 14, 16, 22, 86, 55, 37, 42, 42, 85, 60, 11, 54, 3, 34, 29, 59, 28, 25, 67, 90, 10, 29, 16, 51, 17, 2, 34], 
type: 'line',
name: "Planned Events",
orientation: "h",
marker: {
    color: 'rgb(121,129,212)'
  },
line: {
  dash: 'dashdot',
  width: 3
},


},
{
x: [0.0, 0.1, 0.2, 0.3, 0.4, 0.51, 0.61, 0.71, 0.81, 0.91, 1.01, 1.11, 1.21, 1.31, 1.41, 1.52, 1.62, 1.72, 1.82, 1.92,2.0],
y:[66, 67, 80, 43, 23, 43, 38, 31, 1, 25, 72, 28, 83, 38, 95, 23, 20, 88, 31, 39,42],
type: 'line',
name: "Actual",
orientation: "h",
line: {
  dash: 'solid',
  width: 3
},
},

{
              
x: [2.02, 2.12, 2.22, 2.32, 2.42, 2.53, 2.63, 2.73, 2.83, 2.93, 3.03, 3.13, 3.23, 3.33, 3.43, 3.54, 3.64, 3.74, 3.84, 3.94, 4.04, 4.14, 4.24, 4.34, 4.44, 4.55, 4.65, 4.75, 4.85, 4.95, 5.05, 5.15, 5.25, 5.35, 5.45, 5.56, 5.66, 5.76, 5.86, 5.96, 6.06, 6.16, 6.26, 6.36, 6.46, 6.57, 6.67, 6.77, 6.87, 6.97, 7.07, 7.17, 7.27, 7.37, 7.47, 7.58, 7.68, 7.78, 7.88, 7.98, 8.08, 8.18, 8.28, 8.38, 8.48, 8.59, 8.69, 8.79, 8.89, 8.99, 9.09, 9.19, 9.29, 9.39, 9.49, 9.6, 9.7, 9.8, 9.9, 10.0],
y: [12, 11, 15, 7, 25, 11, 44, 23, 43, 32, 70, 61, 8, 53, 33, 67, 56, 40, 13, 36, 55, 13, 28, 31, 1, 42, 39, 50, 62, 68, 61, 45, 44, 10, 25, 39, 42, 28, 2, 24, 1, 32, 16, 29, 40, 55, 55, 20, 41, 67, 33, 62, 14, 16, 22, 56, 55, 37, 42, 42, 85, 60, 11, 54, 3, 34, 29, 59, 28, 25, 67, 30, 10, 29, 16, 51, 17, 2, 34], 

name: "No Cleaning",
orientation: "h",
line: {
  dash: 'dashdot',
  width: 3
},
marker: {
    color: 'rgb(226, 230, 22)'
  },

},

];
layout1={     
  title: {
    // text:"Plot Title",
    font: {
      family: 'Courier New, monospace',
      size: 24
    },
    xref: 'paper',
    x: 0.05,
  },
  xaxis: {
    title: {
      text: 'Months over time',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'Cost incurred ($USD in billions)',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  },
    width: 800,
    height: 500,
    shapes:           
        {
          type: 'Line', //unable to produce the line.
          x0: 2,
          y0: 0,
          x1: 2,
          y1: 100,
          line: {
            color: 'rgb(55, 128, 191)',
            width: 10,
            dash:'Solid'
          }
        }     

    };
    
}
