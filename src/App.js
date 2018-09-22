import React, { Component } from "react";

import "./App.css";
import Login from "./Screens/Login/Login";
import Quiz_List from "./Screens/Quiz_List/Quiz_List"
import Quiz_Infoo from "./Screens/Quiz_Info/Quiz_Info"
import Quiz_start from "./Screens/Quiz_Start"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
      
      ActiveUser: {},
      Quiz_Info:null,
      Quiz_index:null,
      Quiz: [
        {
          name: "HTML",
          subquiz:[ {
            name: "Quiz 1",
            passingmakrs: 30,
            time: 30,
            question: [
              {
                question: "HTML Stands For ?",
                answer1: "Hyper Text Mark Up Language",
                answer2: "Hydro Technical Mark Up Language",
                answer3: "Hyper Text Mark Up LanguageASD",
                answer4: "Hydro Technical Mark Up LanguageS",
                correctAnswer: "Hyper Text Mark Up Language"
              },
              {
                question: "HTML Is Used For  ?",
                answer1: "Designing The Page",
                answer2: "Structuring The Page",

                answer1: "Designing ",
                answer2: "Structuring ",
                correctAnswer: "Structuring The Page"
              },
              {
                question: "In HTML You Can Use JS In Tag?",
                answer1: "false",
                answer2: "true",
                correctAnswer: "true"
              }
            ]
          },
          {
            name: "Quiz 1",
            passingmakrs: 30,
            time: 30,
            question: [
              {
                question: "HTML Stands For ?",
                answer1: "Hyper Text Mark Up Language",
                answer2: "Hydro Technical Mark Up Language",
                answer3: "Hyper Text Mark Up LanguageASD",
                answer4: "Hydro Technical Mark Up LanguageS",
                correctAnswer: "Hyper Text Mark Up Language"
              },
              {
                question: "HTML Is Used For  ?",
                answer1: "Designing The Page",
                answer2: "Structuring The Page",

                answer1: "Designing ",
                answer2: "Structuring ",
                correctAnswer: "Structuring The Page"
              },
              {
                question: "In HTML You Can Use JS In Tag?",
                answer1: "false",
                answer2: "true",
                correctAnswer: "true"
              }
            ]
          },
         {
            name: "Quiz 2",
            passingmakrs: 30,
            time: 30,
            question: [
              {
                question: "HTML Stands For ?",
                answer1: "Hyper Text Mark Up Language",
                answer2: "Hydro Technical Mark Up Language",
                answer3: "Hyper Text Mark Up LanguageASD",
                answer4: "Hydro Technical Mark Up LanguageS",
                correctAnswer: "Hyper Text Mark Up Language"
              },
              {
                question: "HTML Is Used For  ?",
                answer1: "Designing The Page",
                answer2: "Structuring The Page",

                answer1: "Designing ",
                answer2: "Structuring ",
                correctAnswer: "Structuring The Page"
              },
              {
                question: "In HTML You Can Use JS In Tag?",
                answer1: "false",
                answer2: "true",
                correctAnswer: "true"
              }
            ]
          }
        ]
        },
        {
          name: "Javascript",
          subquiz:[ {
            name: "Quiz 1",
            passingmakrs: 30,
            time: 30,
            question: [
              {
                question: "HTML Stands For ?",
                answer1: "Hyper Text Mark Up Language",
                answer2: "Hydro Technical Mark Up Language",
                answer3: "Hyper Text Mark Up LanguageASD",
                answer4: "Hydro Technical Mark Up LanguageS",
                correctAnswer: "Hyper Text Mark Up Language"
              },
              {
                question: "HTML Is Used For  ?",
                answer1: "Designing The Page",
                answer2: "Structuring The Page",

                answer1: "Designing ",
                answer2: "Structuring ",
                correctAnswer: "Structuring The Page"
              },
              {
                question: "In HTML You Can Use JS In Tag?",
                answer1: "false",
                answer2: "true",
                correctAnswer: "true"
              }
            ]
          },
           {
            name: "Quiz 2",
            passingmakrs: 30,
            time: 30,
            question: [
              {
                question: "HTML Stands For ?",
                answer1: "Hyper Text Mark Up Language",
                answer2: "Hydro Technical Mark Up Language",
                answer3: "Hyper Text Mark Up LanguageASD",
                answer4: "Hydro Technical Mark Up LanguageS",
                correctAnswer: "Hyper Text Mark Up Language"
              },
              {
                question: "HTML Is Used For  ?",
                answer1: "Designing The Page",
                answer2: "Structuring The Page",

                answer1: "Designing ",
                answer2: "Structuring ",
                correctAnswer: "Structuring The Page"
              },
              {
                question: "In HTML You Can Use JS In Tag?",
                answer1: "false",
                answer2: "true",
                correctAnswer: "true"
              }
            ]
          },
           {
            name: "Quiz 3",
            passingmakrs: 30,
            time: 30,
            question: [
              {
                question: "HTML Stands For ?",
                answer1: "Hyper Text Mark Up Language",
                answer2: "Hydro Technical Mark Up Language",
                answer3: "Hyper Text Mark Up LanguageASD",
                answer4: "Hydro Technical Mark Up LanguageS",
                correctAnswer: "Hyper Text Mark Up Language"
              },
              {
                question: "HTML Is Used For  ?",
                answer1: "Designing The Page",
                answer2: "Structuring The Page",

                answer1: "Designing ",
                answer2: "Structuring ",
                correctAnswer: "Structuring The Page"
              },
              {
                question: "In HTML You Can Use JS In Tag?",
                answer1: "false",
                answer2: "true",
                correctAnswer: "true"
              }
            ]
          }
        ]
        },
        {
          name: "React",
          subquiz: [{
            name: "Quiz 1",
            passingmakrs: 30,
            time: 30,
            question: [
              {
                question: "HTML Stands For ?",
                answer1: "Hyper Text Mark Up Language",
                answer2: "Hydro Technical Mark Up Language",
                answer3: "Hyper Text Mark Up LanguageASD",
                answer4: "Hydro Technical Mark Up LanguageS",
                correctAnswer: "Hyper Text Mark Up Language"
              },
              {
                question: "HTML Is Used For  ?",
                answer1: "Designing The Page",
                answer2: "Structuring The Page",

                answer1: "Designing ",
                answer2: "Structuring ",
                correctAnswer: "Structuring The Page"
              },
              {
                question: "In HTML You Can Use JS In Tag?",
                answer1: "false",
                answer2: "true",
                correctAnswer: "true"
              }
            ]
          },
           {
            name: "Quiz 1",
            passingmakrs: 30,
            time: 30,
            question: [
              {
                question: "HTML Stands For ?",
                answer1: "Hyper Text Mark Up Language",
                answer2: "Hydro Technical Mark Up Language",
                answer3: "Hyper Text Mark Up LanguageASD",
                answer4: "Hydro Technical Mark Up LanguageS",
                correctAnswer: "Hyper Text Mark Up Language"
              },
              {
                question: "HTML Is Used For  ?",
                answer1: "Designing The Page",
                answer2: "Structuring The Page",

                answer1: "Designing ",
                answer2: "Structuring ",
                correctAnswer: "Structuring The Page"
              },
              {
                question: "In HTML You Can Use JS In Tag?",
                answer1: "false",
                answer2: "true",
                correctAnswer: "true"
              }
            ]
          },
           {
            name: "Quiz 2",
            passingmakrs: 30,
            time: 30,
            question: [
              {
                question: "HTML Stands For ?",
                answer1: "Hyper Text Mark Up Language",
                answer2: "Hydro Technical Mark Up Language",
                answer3: "Hyper Text Mark Up LanguageASD",
                answer4: "Hydro Technical Mark Up LanguageS",
                correctAnswer: "Hyper Text Mark Up Language"
              },
              {
                question: "HTML Is Used For  ?",
                answer1: "Designing The Page",
                answer2: "Structuring The Page",

                answer1: "Designing ",
                answer2: "Structuring ",
                correctAnswer: "Structuring The Page"
              },
              {
                question: "In HTML You Can Use JS In Tag?",
                answer1: "false",
                answer2: "true",
                correctAnswer: "true"
              }
            ]
          }
        ]
        },
        {
          name: "Redux",
          subquiz: {
            name: "Quiz 1",
            passingmakrs: 30,
            time: 30,
            question: [
              {
                question: "HTML Stands For ?",
                answer1: "Hyper Text Mark Up Language",
                answer2: "Hydro Technical Mark Up Language",
                answer3: "Hyper Text Mark Up LanguageASD",
                answer4: "Hydro Technical Mark Up LanguageS",
                correctAnswer: "Hyper Text Mark Up Language"
              },
              {
                question: "HTML Is Used For  ?",
                answer1: "Designing The Page",
                answer2: "Structuring The Page",

                answer1: "Designing ",
                answer2: "Structuring ",
                correctAnswer: "Structuring The Page"
              },
              {
                question: "In HTML You Can Use JS In Tag?",
                answer1: "false",
                answer2: "true",
                correctAnswer: "true"
              }
            ]
          },
          subquiz: [{
            name: "Quiz 1",
            passingmakrs: 30,
            time: 30,
            question: [
              {
                question: "HTML Stands For ?",
                answer1: "Hyper Text Mark Up Language",
                answer2: "Hydro Technical Mark Up Language",
                answer3: "Hyper Text Mark Up LanguageASD",
                answer4: "Hydro Technical Mark Up LanguageS",
                correctAnswer: "Hyper Text Mark Up Language"
              },
              {
                question: "HTML Is Used For  ?",
                answer1: "Designing The Page",
                answer2: "Structuring The Page",

                answer1: "Designing ",
                answer2: "Structuring ",
                correctAnswer: "Structuring The Page"
              },
              {
                question: "In HTML You Can Use JS In Tag?",
                answer1: "false",
                answer2: "true",
                correctAnswer: "true"
              }
            ]
          },
          {
            name: "Quiz 2",
            passingmakrs: 30,
            time: 30,
            question: [
              {
                question: "HTML Stands For ?",
                answer1: "Hyper Text Mark Up Language",
                answer2: "Hydro Technical Mark Up Language",
                answer3: "Hyper Text Mark Up LanguageASD",
                answer4: "Hydro Technical Mark Up LanguageS",
                correctAnswer: "Hyper Text Mark Up Language"
              },
              {
                question: "HTML Is Used For  ?",
                answer1: "Designing The Page",
                answer2: "Structuring The Page",

                answer1: "Designing ",
                answer2: "Structuring ",
                correctAnswer: "Structuring The Page"
              },
              {
                question: "In HTML You Can Use JS In Tag?",
                answer1: "false",
                answer2: "true",
                correctAnswer: "true"
              }
            ]
          }
        ]
       },
        {
          name: "Phython",
          subquiz: {
            name: "Quiz 1",
            passingmakrs: 30,
            time: 30,
            question: [
              {
                question: "HTML Stands For ?",
                answer1: "Hyper Text Mark Up Language",
                answer2: "Hydro Technical Mark Up Language",
                answer3: "Hyper Text Mark Up LanguageASD",
                answer4: "Hydro Technical Mark Up LanguageS",
                correctAnswer: "Hyper Text Mark Up Language"
              },
              {
                question: "HTML Is Used For  ?",
                answer1: "Designing The Page",
                answer2: "Structuring The Page",

                answer1: "Designing ",
                answer2: "Structuring ",
                correctAnswer: "Structuring The Page"
              },
              {
                question: "In HTML You Can Use JS In Tag?",
                answer1: "false",
                answer2: "true",
                correctAnswer: "true"
              }
            ]
          },
          subquiz:[ {
            name: "Quiz 1",
            passingmakrs: 30,
            time: 30,
            question: [
              {
                question: "HTML Stands For ?",
                answer1: "Hyper Text Mark Up Language",
                answer2: "Hydro Technical Mark Up Language",
                answer3: "Hyper Text Mark Up LanguageASD",
                answer4: "Hydro Technical Mark Up LanguageS",
                correctAnswer: "Hyper Text Mark Up Language"
              },
              {
                question: "HTML Is Used For  ?",
                answer1: "Designing The Page",
                answer2: "Structuring The Page",

                answer1: "Designing ",
                answer2: "Structuring ",
                correctAnswer: "Structuring The Page"
              },
              {
                question: "In HTML You Can Use JS In Tag?",
                answer1: "false",
                answer2: "true",
                correctAnswer: "true"
              }
            ]
          },
           {
            name: "Quiz 2",
            passingmakrs: 30,
            time: 30,
            question: [
              {
                question: "HTML Stands For ?",
                answer1: "Hyper Text Mark Up Language",
                answer2: "Hydro Technical Mark Up Language",
                answer3: "Hyper Text Mark Up LanguageASD",
                answer4: "Hydro Technical Mark Up LanguageS",
                correctAnswer: "Hyper Text Mark Up Language"
              },
              {
                question: "HTML Is Used For  ?",
                answer1: "Designing The Page",
                answer2: "Structuring The Page",

                answer1: "Designing ",
                answer2: "Structuring ",
                correctAnswer: "Structuring The Page"
              },
              {
                question: "In HTML You Can Use JS In Tag?",
                answer1: "false",
                answer2: "true",
                correctAnswer: "true"
              }
            ]
          }
        
        ]
      }
    
    ]
  }
    
       
      
      

    this.login1 = this.login1.bind(this);
    this.signup = this.signup.bind(this);
    this.Info=this.Info.bind(this);
    this.Quiz_start=this.Quiz_start.bind(this);
  }
  componentDidMount() {
    const user = localStorage.getItem("email");
    user && this.setState({ user: true });
    console.log("didmount");
  }
  Info(index)
  {
    this.setState({Quiz_Info:index});


    console.log(index);



  }
  Quiz_start(quizIndex)
  {
alert(quizIndex);
this.setState({Quiz_index:quizIndex});
  }

  signup(firstName, lastName, email, password) {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    const { ActiveUser } = this.state;

    (ActiveUser.name = localStorage.getItem("firstName")),
      (ActiveUser.last = localStorage.getItem("lastName")),
      (ActiveUser.email = localStorage.getItem("email")),
      (ActiveUser.password = localStorage.getItem("password"));

    this.setState({ ActiveUser });
  }

  login1(email, password) {
    console.log("asdasd login" + this);
    const validEmail = localStorage.getItem("email");
    const validPassword = localStorage.getItem("password");
    email == validEmail && validPassword == password
      ? this.setState({ user: true })
      : alert("your passwor is not Correct");

    //console.log("login email****"+email);
  }
  logout() {
    localStorage.clear();
    this.setState({ user: false });
    console.log("logout");
  }

  render() {
    const {Quiz_Info, Quiz, user, ActiveUser } = this.state;
    return (
      <div>
        {!Quiz_Info &&!user && <Login login1={this.login1} signup={this.signup} />}
        {user && "Welcome"}
        {console.log("asdasd**" + Quiz_Info)}
{console.log("Quiz",Quiz)}
     {user && !Quiz_Info && <Quiz_List  Info={this.Info} Quiz_List={Quiz}/>}
     {Quiz_Info &&  user && <Quiz_Infoo Quiz_start={this.Quiz_start} Quiz_info={Quiz_Info} Quiz_list={Quiz}/> }
     {<Quiz_start/>}
    
        {user && <button onClick={() => this.logout()}>log out</button>}
      </div>
    );
  }
}

export default App;

