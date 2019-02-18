import React from 'react';

class ProfCreateCourse extends React.Component {
    constructor(props){
        super(props)
    this.state={
        professor: null,
        class: null,
        students: ["222222222 ", "111222333 "],
        north: 120,
        west:  93.93
    }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

async submitData() {
    const res = await fetch("https://rocky-badlands-35742.herokuapp.com/professor/class/register", {
      method: "POST",
      body: JSON.stringify({
        professor: "Eggert",
        class: "CS 69",
        students: ["222222222 ", "111222333 "],
        north: 120,
        west:  93.93
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await res.json();
  }
  
handleChange(event) {    
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
  handleSubmit(event) {
    this.setState({
      loading: false
    })
  }
 
render() {
      return (
         <div>
             
        <form type = "text">
        <label>
            title:    
        <input name = "title" onChange = {this.handleChange}/>
        </label>
        <br/>
        <label>
            answer A
        <input name =  "A" onChange = {this.handleChange}/>
        </label>
        </form>
        <button onClick = {this.submitData}>send some real data</button>
        </div>
      );
    }
}
  export default ProfCreateCourse;