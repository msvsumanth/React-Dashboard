import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

export default class Graph extends Component {
constructor(props){
  super(props);
  this.state = {
    Linechartdata:
    {
      labels: ["2018-09-20", "2018-09-21", "2018-09-22", "2018-09-23", "2018-09-24", "2018-09-25", "2018-09-26"],
      datasets: [
        {
            label: "My First dataset",
            data: []
        },
       ]
    }
  }
this.getData=this.getData.bind(this);

}
componentDidMount(){
  this.getData();
}
getData(){
    fetch('http://api.jsonbin.io/b/5b893b00db948c68635a04eb')
    .then((response)=>response.json())
    .then((data)=>{
        console.log(JSON.stringify(Object.values(data)))
        var dataSets=Object.keys(data).map((key)=>{
          return  {
                    label: key,
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data:data[key].points
                  }
        })
        console.log(JSON.stringify(dataSets))
        this.setState({
          Linechartdata:{
            labels: ["2018-09-20", "2018-09-21", "2018-09-22", "2018-09-23", "2018-09-24", "2018-09-25", "2018-09-26"],
            datasets:dataSets
          }
        })
    })
}
static defaultProps ={
  displayTitle:true,
  displayLegend: true,
  LegendPosition:'bottom'
}
  render() {
    return (
      <div className="graph">
      {
        
          <Line
              data={this.state.Linechartdata}             
              options={{   
                title:{
                  display:this.props.displayTitle,
                  text:'Keyword Rank',
                  fontSize:15
                },
                legend:{
                  display:this.props.displayLegend,
                  position:this.props.LegendPosition
                }               
              }} 
             height="80vh"/>
         
        }
        
     
          
      </div>
    );
  }
}


