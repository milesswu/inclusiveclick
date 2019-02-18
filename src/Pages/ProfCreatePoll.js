import React from 'react';
import { Link } from 'react-router-dom'

class ProfCreatePoll extends React.Component {
        constructor(){
            super()
    this.state={
        professor: null,
        class: null,
        title: "",
        A: "",
        B: "",
        C: "",
        D: "",
        loading: true,
    }
  this.handleChange = this.handleChange.bind(this);
  this.submitData = this.submitData.bind(this);
}

async submitData(event) {
    const res = await fetch("https://rocky-badlands-35742.herokuapp.com/professor/question/create", {
      method: "POST",
      body: JSON.stringify({
        professor: "Eggert",
        class: "CS 131",
        title: this.state.title,
        A: this.state.A,
        B: this.state.B,
        C: this.state.C,
        D: this.state.D 
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await res.json();
    console.log(json.success);
  }

handleChange(event) {    
    this.setState({ [event.target.name]: event.target.value });
 console.log("field updated")
}
setAuthorState(event) {
    let field = event.target.name;
    let value = event.target.value;
    this.state[field] = value;
    return this.setState({author: this.state.author});
  };

  
 
render() {
      return (
         <div>
            <form type = "text">
            <label>
                title:    
                <input name = "title" value={this.state.title} onChange = {this.handleChange}/>
            </label>
            <br/>
            <label>
                answer A
                <input name =  "A" value={this.state.A} onChange = {this.handleChange}/>
            </label>
            <br/>
            <label>
                answer B
                <input name =  "B" value={this.state.B} onChange = {this.handleChange}/>
            </label>
            <br/>
            <label>
                answer C
                <input name =  "C" value={this.state.C} onChange = {this.handleChange}/>
            </label>
            <br/>
            <label>
                answer D
                <input name =  "D" value={this.state.D} onChange = {this.handleChange}/>
            </label>
            </form>
            <Link to="/prof-courses"><button onClick = {this.submitData}>send some real data</button></Link>
            <Link to="/prof-courses"><button>Back</button></Link> 
        </div>
      );
    }
}
  export default ProfCreatePoll;