import React from 'react';

class ProfCreateCourse extends React.Component {
    constructor(props){
        super(props)
    this.state={
        professor: null,
        class: "",
        students: ["222222222 ", "111222333 "],
        north: 0.0,
        west: 100.0
    }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.submitData = this.submitData.bind(this);

}

async submitData(event) {
    const res = await fetch("https://rocky-badlands-35742.herokuapp.com/professor/class/register", {
      method: "POST",
      body: JSON.stringify({
        professor: "Eggert",
        class: this.state.class,
        students: ["222222222 ", "111222333 "],
        north: this.state.north,
        west:  this.state.west
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
            class: 
        <input name = "class" value={this.state.class} onChange = {this.handleChange}/>
        </label>
        <br/>
        <label>
            north:  
        <input name = "north" value={this.state.north} onChange = {this.handleChange}/>
        </label>
        <br/>
        <label>
            west:
        <input name =  "west" value={this.state.west} onChange = {this.handleChange}/>
        </label>
        </form>
        <button onClick = {this.submitData}>send some real data</button>
        </div>
      );
    }
}
  export default ProfCreateCourse;