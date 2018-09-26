import React, {Component} from 'react';
import Table from "./Table"
import Graph from "./Graph"

export default class GraphTable extends Component {
    render(){
        return(
            <div className="col-lg-10 p-0">
            <Graph/>
            <Table/>
            </div>
        )
    }
}