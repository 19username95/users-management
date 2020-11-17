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
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: { main: '#8B0000' },
        secondary: { main: '#282c3477' }
    },
});

class App extends React.Component {
    constructor(props) {
        super(props);

        // get users from local storage
        const users = localStorage.hasOwnProperty("users") ?
            JSON.parse(localStorage.getItem("users")) : []

        // initialize state
        this.state = { users }
    }

    addUser = (user) => {
        const users = [...this.state.users, user]

        // updated users in state
        this.setState({ users });

        // update users in local storage
        localStorage.setItem("users", JSON.stringify(users))
    };

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Router>
                    <Navigation />
                    <Switch>
                        <Route path='/users-list'>
                            <UsersList users={this.state.users} />
                        </Route>
                        <Route path='/add-user'>
                            <Registration addUser={this.addUser} />
                        </Route>
                        <Route path='/about'>
                            <About />
                        </Route>
                        <Route path='/'>
                            <Redirect to='users-list'/>
                        </Route>
                    </Switch>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
