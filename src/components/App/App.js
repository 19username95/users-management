import './App.scss';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import Navigation from "../Navigation/Navigation";
import Registration from "../Registration/Registration";
import UsersList from "../UsersList/UsersList";
import About from "../About/About";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Navigation />
                <Switch>
                    <Route path='/users-list'><UsersList /></Route>
                    <Route path='/add-user'><Registration /></Route>
                    <Route path='/about'><About /></Route>
                    <Route path='/'>
                        <Redirect to='users-list'/>
                    </Route>
                </Switch>
            </Router>

        );
    }


}

export default App;
