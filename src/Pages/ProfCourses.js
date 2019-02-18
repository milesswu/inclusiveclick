import React from 'react';
import { Link } from 'react-router-dom';
class Course extends React.Component {
    constructor() {
        super();
        this.state = {
            professor: "",
            className: "",
            students: [],
            north: 0,
            west: 0
        };   
    }
    render() {
        return (
            <div id="parent">
                <p>{ this.props.course }</p>
            </div>
        );
    }
}
class ProfCourses extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const classes = [{name:"CS 32"}, {name:"CS 131"}];
        const listOfCourses = classes.map((c) => <li key={c.name}>{c.name}</li>);
        return (
            <div id="parent">
                {listOfCourses}
            </div>
        );
    }
}

export default ProfCourses;