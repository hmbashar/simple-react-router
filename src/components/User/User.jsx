import React from 'react';
import './User.css';
import { Link } from 'react-router-dom';

const User = ({user}) => {
   
    const {email, name, id, phone} = user;
    return (
        <div className='single-user bg-sky-400 mt-3'>
            <h2 className='text-white text-2xl'>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>id: {id}</p> 
            <p>                
                <Link to={`/user/${id}`} className='text-white'>Show Me Details</Link>
            </p>           
        </div>
    );
};

export default User;