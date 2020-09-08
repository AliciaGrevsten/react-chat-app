import React from 'react';
import ChatInput from '../ChatInput';
import ChatWindow from '../ChatWindow';
import UserList from '../UserList';

const Chat = () => {

    return (
        <div className="container-fluid">
            <div className="row">
            <div className="col-4 float-left">
                <UserList />
            </div>
            <div className="col-8 float-left">
                <div className="row">
                    <ChatWindow />
                </div>
                <div className="row">
                    <ChatInput />
                </div>
            </div>
            </div>
        </div>
    );
}

export default Chat;
