import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Box
} from "@material-ui/core"
import {AccountCircle, Group, GroupAdd} from "@material-ui/icons";

import './Navigation.scss';

const Navigation = () => {
    return (
        <Box className='Navigation' component="nav">
            <AppBar className='Navigation-AppBar'>
                <Toolbar className='Navigation-Toolbar'>
                    <ul className='Navigation-NavigationList'>
                        <li className='Navigation-NavigationListItem'>
                            <NavLink className='Navigation-NavigationLink' to='/users-list'>
                                <Group className='Navigation-NavigationLinkIcon'/>
                            </NavLink>
                        </li>
                        <li className='Navigation-NavigationListItem'>
                            <NavLink className='Navigation-NavigationLink' to='/add-user'>
                                <GroupAdd className='Navigation-NavigationLinkIcon'/>
                            </NavLink>
                        </li>
                        <li className='Navigation-NavigationListItem'>
                            <NavLink className='Navigation-NavigationLink' to='/about'>
                                <AccountCircle className='Navigation-NavigationLinkIcon'/>
                            </NavLink>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navigation;