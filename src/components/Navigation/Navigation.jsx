import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

class Navigation extends React.Component {
    render() {
        return <section className='Navigation'>
            <ul className='Navigation-NavigationList'>
                <li><NavLink className='Navigation-NavigationLink' to='/users-list'>All users</NavLink></li>
                <li><NavLink className='Navigation-NavigationLink' to='/add-user'>Create user</NavLink></li>
                <li><NavLink className='Navigation-NavigationLink' to='/about'>Profile</NavLink></li>
            </ul>
        </section>
    }
}

export default Navigation;