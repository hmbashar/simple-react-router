import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {

    const {id, title, body} = post;


    // go single post page with btn onclick
    const navigate = useNavigate();
    const handelNavigation = () => {
        navigate(`/post/${id}`);
    }



 

    return (
        <div className='border-2 border-sky-300 m-4 rounded-md p-5'>
            <h2>ID : {id}</h2>
            <h2>Title : {title}</h2>
            <Link to={`/post/${id}`} className='bg-sky-400 p-3 rounded-sm text-white inline-block mt-3'>Show Details</Link>
            
            <button onClick={handelNavigation}>Details with btn</button>
            
        </div>
    );
};

export default Post;