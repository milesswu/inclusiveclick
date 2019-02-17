import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FrontPage from './FrontPage';
import ProfLogin from './ProfLogin';
import StudentLogin from './StudentLogin';
import StudentRegister from './StudentRegister';
import StudentCourses from './StudentCourses';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={FrontPage}/>
                <Route path='/prof-login' component={ProfLogin}/>
                <Route path='/student-login' component={StudentLogin}/>
                <Route path='/student-register' component={StudentRegister}/>
                <Route path='/courses' component={StudentCourses}/>
            </Switch>
        );
    }
}

export default Routes;