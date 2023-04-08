import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div>
                <ul className='flex gap-3 justify-center mb-10'>
                    <li><ActiveLink to="/">Home</ActiveLink></li>
                    <li><ActiveLink to="/posts">Posts</ActiveLink></li>
                    <li><ActiveLink to="/about">About</ActiveLink></li>
                    <li><ActiveLink to="/contact">Contact</ActiveLink></li>
                </ul>
        </div>
    );
};

export default Header;