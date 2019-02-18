import React from 'react';
import Popup from "reactjs-popup";
class StudentCourses extends React.Component {

render() {
      return (
          <div>
         <ul>
             <li>CS 32</li>
         </ul>
         
         <Popup trigger={<button className="button"> Add Course </button>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="content">
          {' '}
        Class Code: 
        </div>
        <div className="actions">
         <input type= "text"/>
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ')
              close()
            }}
          >
            🚮
          </button>
        </div>
      </div>
    )}
  </Popup>
          </div>
      );     
    }
  }
  
  export default StudentCourses;