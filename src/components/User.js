import React from 'react';
import profilePicture from '../images/profilePicture.png';


const User = props => {

    const userClicked = ev => {
      props.userClicked(props.user.username, props.user.id);
    }

    return (
        <div>
            <img id="userpic" src={profilePicture}></img>
            <button type="button" className="btn" onClick={ userClicked }>{props.user.username}</button>
        </div>
    );
}

export default User;