import React from 'react';


const ChatInput = () => {

    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Message.." />
            <div className="input-group-append">
                <button className="btn btn-outline-primary" type="button">Send</button>
            </div>
        </div>
    );
}

export default ChatInput;