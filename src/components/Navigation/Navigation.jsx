import React from 'react';

class Navigation extends React.Component {
    render() {
        return <section className='navigation'>
            <ul>
                <li><a href='/'>Main page</a></li>
                <li><a href='/users-list'>All users</a></li>
                <li><a href='/add-user'>Create user</a></li>
                <li><a href='/about'>Profile</a></li>
            </ul>
        </section>
    }
}

export default Navigation;

     /*   return <section className= 'navigation'>
            <Router>
                <div className="navigation">
                    <ul>
                        <li><a href='/'>Main</a> </li>
                        <li><a href='/add-user'>Create user</a> </li>
                        <li><a href='/user-list'>Users list</a> </li>
                        <li><a href='/about'>About</a> </li>
                    </ul>
                </div>

            <Switch>
                <Route path="/">
                    <Redirect to="/user-list" />
                </Route>
                <Route path="/add-user">
                    <Registration />
                </Route>
                <Route path="/user-list">
                    <UserList />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </Router>
        </section>

    }
} */