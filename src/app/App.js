import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import './App.scss';
import Navigation from "../components/Navigation/Navigation";
import Registration from "../pages/Registration/Registration";
import UsersList from "../pages/UsersList/UsersList";
import About from "../pages/About/About";
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

        // initialize state
        this.state = { users: [] }
    }

    componentDidMount() {
        if (localStorage.hasOwnProperty("users")) {
            // get users from local storage
            const users = JSON.parse(localStorage.getItem("users"));
            this.setState({ users })
        }
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
