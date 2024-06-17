import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Welcome from '../pages/Welcome';
import Register from '../pages/Register';
import Home from '../pages/Home';
import UserList from '../pages/UserList';
import EditUserScreen from '../pages/EditUserScreen';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/signin" component={SignIn} />
                <Route path="/welcome" component={Welcome} />
                <Route path="/register" component={Register} />
                <Route path="/home" component={Home} />
                <Route path="/userlist" component={UserList} />
                <Route path="/edituser/:id" component={EditUserScreen} />
                <Route path="/" component={Welcome} /> 
            </Switch>
        </Router>
    );
}

export default Routes;