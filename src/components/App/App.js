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
    state = {
        users: [
            {
                id: 0,
                name: "username",
                surname: "usernamov",
                sex: "male",
                card: "0000 0000 0000 0000",
                isLoyalty: false,
                coupon: "",
                registrationDate: ""
            },
            {
                id: 2,
                name: "useriha",
                surname: "usernamova",
                sex: "female",
                card: "0000 0000 0000 0000",
                isLoyalty: false,
                coupon: "",
                registrationDate: ""
            },
        ],
    }

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
