import React from 'react';

class ProfCreatePoll extends React.Component {
    constructor(props){
        super(props)

    this.state={
        professor: null,
        class: null,
        title: null,
        A: null,
        B: null,
        C: null,
        D: null,
        loading: true,
    }
  async submitData() {
    const res = await fetch("https://rocky-badlands-35742.herokuapp.com/professor/question/create", {
      method: "POST",
      body: JSON.stringify({
        professor: "Eggert",
        class: "CS 131",
        title: this.state.title,
        A: this.state.A,
        B: "??",
        C: "Yes.js",
        D: "Lmao" 
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await res.json();
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event) {
    this.setState({
      A: event.target.value
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
        <input onChange = {this.handleChange}/>
        
        </form>
        <button onClick = {this.submitData}>send fake data</button>
        </div>
      );
    }
  }
  
  export default ProfCreatePoll;