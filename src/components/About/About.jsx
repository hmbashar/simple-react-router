import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const About = () => {
    const data = useLoaderData();    
    return (
        <div>
            <h2>This is the About Page {data.length}</h2>

            <div className="about-userlist flex flex-wrap justify-center">
                {
                    data.map(user => <User 
                        key={user.id} 
                        user={user}>

                        </User>)
                }
            </div>
        </div>
    );
};

export default About;