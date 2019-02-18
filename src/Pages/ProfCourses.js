import React from 'react';
import { Link } from 'react-router-dom';
const getURL = 'https://rocky-badlands-35742.herokuapp.com/professor/class/list'


class Course extends React.Component {
    render() {
        return (
            <div id="parent">
                <Link to="polls" params={{ classid: '' + this.props.classid}}>{this.props.name}</Link>
            </div>
        );
    }
}

const throwError = async (resp) => {
    const unknownErr = { errorMessage: 'Unknown error' };
    try {
        const body = await resp.json();
        if (body.message !== undefined) {
            let err = { errorMessage: body.message };
            throw err;
        } else {
            throw unknownErr;
        }
    } catch (e) {
        throw unknownErr;
    }
};

class ProfCourses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //professor: "",
            courses: []
        };
    }
    
    componentDidMount() {
        this.loadCourses();
        console.log(this.props.history.location.pathname);
    }

    async loadCourses() {
        const response = await fetch(getURL, {
            method: "POST",
            body: JSON.stringify({
                professor: "Eggert"
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throwError(response);
        }
        const data = await response.json();
        this.setState({ courses: data.classes });
    }
    
   render() {
        const courses = this.state.courses.map(course => <Course {...course} key={course.classid} />);
        return (
            <div id="parent">
                {courses}
            </div>
        );
    }
}

export default ProfCourses;