import React, { Component } from 'react';
//import logo from './logo.svg';
import '../../App.css';

class Quiz_List extends Component {
  render() {
    const {Quiz_List,Info}=this.props;
    return (
      <div className="App">
      <ul>
{Quiz_List.map((v,i)=>
{
 return <li><button  onClick={()=>Info(i)}>{v.name}</button></li>
})
}
      </ul>
      
      </div>
    );
  }
}

export default Quiz_List;
