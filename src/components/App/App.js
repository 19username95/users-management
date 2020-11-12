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
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: { main: '#8B0000' },
        secondary: { main: '#282c3477' }
    },
});

class App extends React.Component {
    state = { users }

    addUser = (user) => {
        this.setState((prevState) => {
            return {
                users: [...prevState.users, { ...user }],
            };
        });
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
                    <Route path='/add-user'><Registration addUser={this.addUser} /></Route>
                    <Route path='/about'><About /></Route>
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
