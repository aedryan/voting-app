import React from 'react';
import { 
    BrowserRouter as Router, 
    Route, 
    Redirect, 
    Switch 
} from 'react-router-dom';

import Home from 'components/home';
import Poll from 'components/poll';
import NewPoll from 'components/new-poll';
import MyPolls from 'components/my-polls';
import NotFound from 'components/404';

const Routes = (props) => (
    <Router {...props} >
        <div className="main-content">
            <Switch>
                <Route exact path='/' render={() => (
                    <Redirect to='/home'/>
                )}/>
                <Route exact path='/home' render={() => (
                    <Home loggedIn={props.loggedIn}/>
                )} />
                <Route path='/poll' render={() => (
                    <Poll loggedIn={props.loggedIn} userID={props.userID} />
                )} />
                <Route exact path='/newpoll' component={NewPoll} />
                <Route exact path='/mypolls' component={MyPolls} />
                <Route path='*' component={NotFound} />
            </Switch>
        </div>
    </Router>
)

export default Routes;