import React from 'react';

export default function MessageList({ messages }) {
    const messagesJsx = messages.map(message => (
        <li key={message.id}><strong>{message.name}:</strong> {message.message}</li>
    ));
    return (
        <>
            <h4>Message List</h4>
            <ul>{messagesJsx}</ul>        
        </>

    );
}