import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import "./MessageSender.css";

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('')
    const hadleSubmit = (e) => {
        e.preventDefault();

        //Some clever db stuf

        setInput("");
        setImageUrl("")
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messageSender__input"
                        placeholder={`What's on yoyr mind`}
                    />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="Image url (Optional)"
                    />
                    <button onClick={hadleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon syle={{ color: "red" }} />
                    <h3>Live video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon syle={{ color: "green" }} />
                    <h3>Photo/video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon syle={{ color: "orange" }} />
                    <h3>Live video</h3>
                </div>
            </div>
        </div>
    );
}

export default MessageSender