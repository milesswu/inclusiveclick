import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FrontPage from './FrontPage';
import ProfLogin from './ProfLogin';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={FrontPage}/>
                <Route path='/prof-login' component={ProfLogin}/>
            </Switch>
        );
    }
}

export default Routes;