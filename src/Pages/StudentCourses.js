import React from 'react';
import { Router, RouteHandler } from 'react-router'
import { Link } from 'react-router-dom'
const getURL = 'https://rocky-badlands-35742.herokuapp.com/student/class/list'

class Course extends React.Component {
    render() {
      return (
          <div id="parent">
              <Link to="StudPolls" params={{ id: '' + this.props.id}}>{this.props.name}</Link>          </div>
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

class StudentCourses extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          courses: []
      };
  }

  componentDidMount() {
      this.loadCourses();
  }

  async loadCourses() {
      const response = await fetch(getURL, {
          method: "POST",
          body: JSON.stringify({
              studentid: "222222222"
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
      const courses = this.state.courses.map(course => <Course {...course} key={course.id} />);
      return (
          <div>
              {courses}
          </div>
      );
  }
}
  
  
export default StudentCourses;