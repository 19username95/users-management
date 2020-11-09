
import React from "react";
const UsersList = ({ users }) => {
    return (
        <section>
            {users.map((user, index) => {
                return (
                    <div key={index}>
                        <div>{user.id}</div>
                        <div>{user.name} {user.surname}</div>
                        <div>{user.sex}</div>
                        <div>{user.card}</div>
                        <div>{user.isLoyalty}</div>
                        <div>{user.coupon}</div>
                        <div>{user.registrationDate.toString()}</div>
                    </div>
                );
            })}
        </section>
    );
};

export default UsersList;