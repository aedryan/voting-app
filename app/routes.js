import React from 'react';
import { Router, Route, Redirect } from 'react-router';

import Home from 'components/home/index';
import Poll from 'components/poll/index';
import Profile from 'components/profile/index';

const Routes = (props) => (
    <Router {...props} >
        <div>
            <Route exact path='/' render={() => (
                <Redirect to='/home'/>
            )}/>
            <Route path='/home' component={Home} />
            <Route path='/poll' component={Poll} />
            <Route path='/profile' component={Profile} />
        </div>
    </Router>
)

export default Routes;