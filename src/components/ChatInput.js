import React from 'react';


const ChatInput = () => {

    return (
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Message.." />
            <div class="input-group-append">
                <button class="btn btn-outline-primary" type="button">Send</button>
            </div>
        </div>
    );
}

export default ChatInput;