import React, {Component} from 'react';

export default class Table extends Component {
    constructor(){
        super();
        this.state={
            data:[],
          
        }
            this.getData= this.getData.bind(this);
    }

    getData(){
        fetch('http://api.jsonbin.io/b/5b893aa03ffac56f4bd7905a')
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            this.setState({
                data:data.data,
                })
        })
    }

componentDidMount(){
    this.getData();
}
    render() {
        return(
       
            <div className="table">
            <table>
             <tr>
             <th>Keywords</th>
             <th>Position</th>
             <th>Change</th>
             <th>URL</th>
             </tr>
            {
                this.state.data.map((data)=>{
                    return(
                        <tr>
                            <td>{data.keyword}</td>
                            <td>{data.position}</td>
                            <td>{data.change}</td>
                            <td>/reasearch-report/asia-comound-</td>
                        </tr>
                    );
                })
            }
         </table>

                </div>

       
        )
       }
    }