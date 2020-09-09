import React from 'react';

const ChatWindow = props => {

    return (
        <div>
            <h5> Chat with <strong>{ props.user.username }</strong> </h5>
            <div className="chatwindow">

            </div>
        </div>
    );
}

export default ChatWindow;