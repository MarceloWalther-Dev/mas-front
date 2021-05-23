import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Register} from '../pages/Register';
import {Login} from '../pages/Login';
import {Dashboard} from '../pages/Dashboard';
import {NotFound} from '../pages/NotFound';

const Routes: React.FC = () =>(
<Switch>
    <Route path="/" exact component={Login} />
    <Route path="/register" exact component={Register} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/*" component={NotFound}/>
</Switch>

)


export default Routes;