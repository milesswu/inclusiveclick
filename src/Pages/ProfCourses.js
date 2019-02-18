import React from 'react';
import { Link } from 'react-router-dom';
const getURL = 'https://rocky-badlands-35742.herokuapp.com/professor/class/list'


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
                <p>{this.state.className}</p>
            </div>
        );
    }
}
class ProfCourses extends React.Component {
    constructor() {
        super();
        this.state = {
            courses: []
        };
    }

    async componentDidMount() {
        this.loadCourses();
    }

    async loadCourses() {
        const courses = await fetch(getURL, {
            method: "POST",
        });
        this.setState({ courses });
    }

    render() {
        const { courses } = this.state;
        const listOfCourses = courses.map((c) => <li>{c}</li>)
        return (
            <div id="parent">
                {courses}
            </div>
        );
    }
}

export default ProfCourses;