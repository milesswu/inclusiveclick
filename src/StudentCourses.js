import React from 'react';
import Popup from "reactjs-popup";
class StudentCourses extends React.Component {

render() {
      return (
          <div>
         <ul>
             <li>CS 32</li>
         </ul>
  <Popup trigger={<button> Add Courses</button>} position="right center">
    <div>Code</div>
  </Popup>
);
          </div>
      );
    }
  }
  
  export default StudentCourses;