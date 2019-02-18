import React from 'react';

class ProfCreateCourse extends React.Component {
    constructor(){
        super()
    this.state={
        professor: null,
        class: null,
        students: ["222222222 ", "111222333 "],
        north: 120.1,
        west:  93.93
    }
  this.handleChange = this.handleChange.bind(this);
  this.submitData = this.submitData.bind(this);
}

async submitData(event) {
    const res = await fetch("https://rocky-badlands-35742.herokuapp.com/professor/class/register", {
      method: "POST",
      body: JSON.stringify({
        professor: "Eggert",
        class: "CS 183",
        students: ["222222222", "111222333"],
        north: parseInt(this.state.north),
        west: parseInt(this.state.west)
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await res.json();
    console.log(json.success)
  }

  handleChange(event) {    
    this.setState({ [event.target.name]: event.target.value });
 console.log("field updated")
};
 
render() {
      return (
         <div>
             
        <form>
        <label>    north:   </label>     
        <input type = "number" step = "0.01" name = "north" value={this.state.north} onChange = {this.handleChange}/>
        <br/>
        <label>
            west:
        <input type = "number" step = "0.01" name =  "west" value={this.state.west} onChange = {this.handleChange}/>
        </label>
        </form>
        <button onClick = {this.submitData}>send some real data</button>
        </div>
      );
    }
}
  export default ProfCreateCourse;