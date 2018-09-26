import React, { Component } from 'react';
import SideMenu from "./Components/SideMenu"
import GraphTable from "./Components/RightColumn/GraphTable"

class App extends Component {
  render() {
    return (
      <div className="d-flex">
     
        <SideMenu/>
        <GraphTable/>
        </div>
   
    );
  }
}

export default App;
