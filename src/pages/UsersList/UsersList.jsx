import React from "react";
import './UsersList.scss';

import Title from '../../components/Title/Title';

import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@material-ui/core";

const UsersList = ({ users }) => {
    return (
        <Box className='UsersSection'>
            <Title className='UsersSection-UsersTitle'>Users</Title>
            <Table className='UsersSection-UsersTable UsersTable'>
                <TableHead className='UsersTable-Head'>
                    <TableRow className='UsersTable-HeadRow'>
                        <TableCell className='UsersTable-HeadCell'>Name</TableCell>
                        <TableCell className='UsersTable-HeadCell'>Gender</TableCell>
                        <TableCell className='UsersTable-HeadCell'>Registration</TableCell>
                        <TableCell className='UsersTable-HeadCell'>Loyalty</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className='UsersTable-Body'>
                    {users.map((user) => (
                        <TableRow  className='UsersTable-BodyRow' key={user.id}>
                            <TableCell className='UsersTable-BodyCell UsersTable-BodyCell_name'>{user.name} {user.surname}</TableCell>
                            <TableCell className='UsersTable-BodyCell UsersTable-BodyCell_sex'>{user.sex}</TableCell>
                            <TableCell className='UsersTable-BodyCell UsersTable-BodyCell_registration'>{user.registrationDate.toString()}</TableCell>
                            <TableCell className='UsersTable-BodyCell UsersTable-BodyCell_loyalty'>{user.isLoyalty?'Yes':'No'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
};

export default UsersList;