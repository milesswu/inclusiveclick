import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FrontPage from './Pages/FrontPage';
import ProfLogin from './Pages/ProfLogin';
import StudentLogin from './Pages/StudentLogin';
import StudentRegister from './Pages/StudentRegister';
import StudentCourses from './Pages/StudentCourses';
import ProfCreatePoll from './Pages/ProfCreatePoll';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={FrontPage}/>
                <Route path='/prof-login' component={ProfLogin}/>
                <Route path='/student-login' component={StudentLogin}/>
                <Route path='/student-register' component={StudentRegister}/>
                <Route path='/courses' component={StudentCourses}/>
                <Route path='/prof-poll-create' component={ProfCreatePoll}/>
            </Switch>
        );
    }
}

export default Routes;