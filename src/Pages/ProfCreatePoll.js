import React from 'react';

class ProfCreatePoll extends React.Component {
  async submitData() {
    const res = await fetch("https://rocky-badlands-35742.herokuapp.com/professor/question/create", {
      method: "POST",
      body: JSON.stringify({
        professor: "Eggman",
        class: "CS 69",
        title: "Why is React a thing?",
        A: "Tim Gu",
        B: "Gim Tu",
        C: "Yes.js",
        D: "Lmao" 
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await res.json();
  }
render() {
      return (
         <div>
        <form method = "POST" id = "register" type = "text">
        <p>Username:</p>
        <input type="text" placeholder="Jrob" required/>
        <p>Email:</p>
        <input type = "text" placeholder = "JackRob42@ucla.edu" required/> 
        <p>UID</p>
        <input type = "text" placeholder = "424242424" id = "username" required/> 
        <p>Password:</p>
        <input type = "text" id = "password" required/> 
        <p>Retype Password</p>
        <input type = "text" id = "password2" required/> 
        <input type="submit" value="Submit" id = "submit"/>
        </form>
        </div>
      
      );
    }
  }
  
  export default ProfCreatePoll;