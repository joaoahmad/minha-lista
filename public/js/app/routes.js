import React from 'react';
import Router, {Route, Redirect, IndexRoute} from 'react-router';
import App from './components/App';

// Pages
import UI from './components/pages/UI';
import Events from './components/pages/Events';
import NewEvent from './components/pages/NewEvent';
import Event from './components/pages/Event';

let routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Events}/>
        <Route path="/events" component={Events}/>
        <Route path="/event/new" component={NewEvent}/>
        <Route path="/event/:id" component={Event}/>
    </Route>
);

module.exports = routes;
