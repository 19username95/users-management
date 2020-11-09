import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return <section className='navigation'>
            <ul>
                <li><NavLink to='/users-list'>All users</NavLink></li>
                <li><NavLink to='/add-user'>Create user</NavLink></li>
                <li><NavLink to='/about'>Profile</NavLink></li>
            </ul>
        </section>
    }
}

export default Navigation;