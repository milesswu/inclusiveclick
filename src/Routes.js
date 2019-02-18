import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FrontPage from './Pages/FrontPage';
import ProfLogin from './Pages/ProfLogin';
import ProfRegister from './Pages/ProfRegister';
import StudentLogin from './Pages/StudentLogin';
import StudentRegister from './Pages/StudentRegister';
import StudentCourses from './Pages/StudentCourses';
import ProfCourses from './Pages/ProfCourses';
import ProfCreatePoll from './Pages/ProfCreatePoll';
import ProfCreateCourse from './Pages/ProfCreateCourse';
import ProfCoursePolls from './Pages/ProfCoursePolls';
import StudentClicker from './Pages/StudentClicker';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={FrontPage}/>
                <Route path='/prof-login' component={ProfLogin}/>
                <Route path='/prof-register' component={ProfRegister}/>
                <Route path='/prof-courses' component={ProfCourses}/>
                <Route path='/prof-courses-create' component={ProfCreateCourse}/>
                <Route path='/prof-poll-create' component={ProfCreatePoll}/>                
                <Route path='/student-login' component={StudentLogin}/>
                <Route path='/student-register' component={StudentRegister}/>
                <Route path='/student-courses' component={StudentCourses}/> 
                <Route name="polls" path="/:classid" component={ProfCoursePolls}/>
                <Route name="StudPolls" path="/student-courses/:id" component={StudentClicker}/>              
           </Switch>
        );
    }
}

export default Routes;