import React from 'react';
import './MessageList.css';
import MessageItem from './MessageItem/MessageItem';

export default function MessageList({ messages, toggleLike }) {
    const messagesJsx = messages.map(message => 
        <MessageItem message={message} key={message.id} toggleLike={toggleLike} />);

    return (
        <>
            <h4>Message List</h4>
            <ul>{messagesJsx}</ul>        
        </>

    );
}