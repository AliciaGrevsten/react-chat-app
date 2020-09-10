import React from 'react';
import profilePicture from '../images/profilePicture.png';


const User = props => {

    return (
        <div>
            <img id="userpic" src={profilePicture}></img>
            <p>{props.user.username}</p>
        </div>
    );
}

export default User;