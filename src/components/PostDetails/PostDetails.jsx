import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetails = useLoaderData();
    const {id, title, useId, body} = postDetails;


    // go back btn
    const goBackNavigate = useNavigate();
    const handelGoBack = () => {
        goBackNavigate(-1);
    }
    
    return (
        <div>
            <h2>Details about your post</h2>
            <h4>{title}</h4>
            <h5>ID : {id}</h5>
            <p>{body}</p>
            <button onClick={handelGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;