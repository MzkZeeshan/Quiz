import React, { Component } from "react";
//import logo from './logo.svg';
import "../App.css";

class Quiz_Start extends Component {
    constructor()
    {
        super()
        this.state={
            add:0
        }

    }

    next(){

    this.setState({add:this.state.add +1})

    }
  render() {
    const { Quiz_List,Quiz_Index,Quiz_Info} = this.props;
    const v = Quiz_List[Quiz_Info].subquiz[Quiz_Index].question[this.state.add];
    return (
      <div className="App">
       
   

 { console.log("quiz Answer",Quiz_List[1].subquiz[1].question[1].answer1)}
   {v.answer4 ?<div>
   <input type="radio" name="Ans" value={v.answer1} />{v.answer1} <br/>
     <input type="radio" name="Ans" value={v.answer2} /> {v.answer2} <br/>
     <input type="radio" name="Ans" value={v.answer3} /> {v.answer3} <br/>
     <input type="radio" name="Ans" value={v.answer4} /> {v.answer4} <br/>
   </div> :
<div>
   <input type="radio" name="Ans" value={v.answer1} />{v.answer1} <br/>
     <input type="radio" name="Ans" value={v.answer2} /> {v.answer2} <br/>
    
</div>
   }
   <button onClick={()=>{this.next()}}> Next</button>
      </div>
    );
  }
}

export default Quiz_Start;
