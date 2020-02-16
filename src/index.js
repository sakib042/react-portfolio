import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import App from './App';
import Jokes from './components/Jokes';
import Menu from './components/Menu';

ReactDOM.render(
    <Router history={createHistory()}>
        <Switch>
            <Route exact path="/" render={() => <Menu><App /></Menu>} />
            <Route path="/jokes" render={() => <Menu><Jokes /></Menu>} />
        </Switch>
    </Router>,
    document.getElementById('root')
);