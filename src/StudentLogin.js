import React from 'react';
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
        </div>
      
      );
    }
  }
  
  export default StudentLogin;