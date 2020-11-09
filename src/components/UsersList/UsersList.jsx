import React from "react";
import './UsersList.scss';

const UsersList = ({ users }) => {
    return (
        <section className='UsersList'>
            {users.map((user, index) => {
                return (
                    <div className='UsersList-UserView User' key={index}>
                        <div className='User-Id'>{user.id}</div>
                        <div className='User-Names'>{user.name} {user.surname}</div>
                        <div className='User-Sex'>{user.sex}</div>
                        <div className='User-Card'>{user.card}</div>
                        <div className='User-IsLoyalty'>{user.isLoyalty}</div>
                        <div className='User-Coupon'>{user.coupon}</div>
                        <div className='User-RegistrationDate'>{user.registrationDate.toString()}</div>
                    </div>
                );
            })}
        </section>
    );
};

export default UsersList;