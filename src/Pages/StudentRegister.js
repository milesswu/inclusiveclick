import React from 'react';
import {Helmet} from "react-helmet";

class StudentRegister extends React.Component {
  async submitData() {
    const res = await fetch("url", {
      method: "POST",
      body: JSON.stringify({
        studentid: this.state.studentid,
        questionid: "0",
        answer: 0
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
  
  export default StudentRegister;