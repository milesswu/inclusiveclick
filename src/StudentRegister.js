import React from 'react';
class StudentRegister extends React.Component {
render() {
      return (
         <div>
        <form>
        <p>Username:</p>
        <input type="JRob" placeholder="test" required/>
        <p>Email:</p>
        <input type = "text" placeholder = "JackRob42@ucla.edu" required/> 
        <p>UID</p>
        <input type = "text" placeholder = "424242424" required/> 
        <p>Password:</p>
        <input type = "text" required/> 
        <p>Retype Password</p>
        <input type = "text" required/> 


        <button type="submit">Submit</button>
        </form>
        </div>
//<input type = "text" placeholder = "JRob"> </input>
//<input type = "text" placeholder = "JackRob42@ucla.edu"> </input>
      
      );
    }
  }
  
  export default StudentRegister;