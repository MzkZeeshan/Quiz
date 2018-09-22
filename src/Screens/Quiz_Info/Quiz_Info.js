import React, { Component } from "react";
//import logo from './logo.svg';
import "../../App.css";

class Quiz_Infoo extends Component {
  render() {
    const { Quiz_list, Quiz_info,Quiz_start } = this.props;
    return (
      <div className="App">
        {console.log("nzma sda", Quiz_list[Quiz_info].subquiz.name)}
     
        <ul>
          {  Quiz_list[Quiz_info].subquiz.map((v, i) => {
            
              return <li onClick={()=>{Quiz_start(i)}}> {v.name}</li>;
            }
          )
        } 
        </ul>
      </div>
    );
  }
}

export default Quiz_Infoo;
