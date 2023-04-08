import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {

    const user = useLoaderData();

    console.log(user);

    return (
        <div>
            <h2>User Details</h2>
            <h3>Name: {user.name}</h3>
            <p>username: {user.username}</p>
        </div>
    );
};

export default UserDetails;