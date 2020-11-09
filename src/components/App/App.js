import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import './App.scss';
import Navigation from "../Navigation/Navigation";
import Registration from "../Registration/Registration";
import UsersList from "../UsersList/UsersList";
import About from "../About/About";
import { users } from "../../mocks/all-users.json";

class App extends React.Component {
    state = { users }

    addUser = (user) => {
        this.setState((prevState) => {
            return {
                users: [...prevState.users, { ...user }],
            };
        });
    };

    /*
    componentDidMount() {
        fetch('../mocks/all-users.json')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        users: result.users
                    });
                }
            ).then(this.setState)
    }
*/

    render() {
        return (
            <Router>
                <Navigation />
                <Switch>
                    <Route path='/users-list'>
                        <UsersList users={this.state.users} />
                    </Route>
                    <Route path='/add-user'><Registration addUser={this.addUser} /></Route>
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
