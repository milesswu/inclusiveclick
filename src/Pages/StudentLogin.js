import React from 'react';
import { Link } from 'react-router-dom';
class StudentLogin extends React.Component {
render() {
      return (
         <div>
        <form>
        <p>Username:</p>
        <input type="text" placeholder="JRob" required/>
        <p>UID</p>
        <input type = "text" placeholder = "424242424" required/> 
        <p>Password:</p>
        <input type = "text" required/> 

        <button type="submit">Submit</button>
        </form>
        <Link to="/student-register">New Student?</Link>
        </div>
      );
    }
  }
  
  export default StudentLogin;