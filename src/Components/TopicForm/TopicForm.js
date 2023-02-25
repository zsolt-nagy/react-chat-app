import React from 'react';
import './TopicForm.css';

export default function TopicForm({ addItem }) {
    const [name, setName] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [error, setError] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let trimmedName = name.trim();
        let trimmedMessage = message.trim();
        if (trimmedName.length > 0 && trimmedMessage.length > 0) {
            addItem(trimmedName, trimmedMessage);
            setName('');
            setMessage('');
            setError('');
        } else {
            setError('One of your fields only contains whitespaces.');
        }
    }

    function handleNameChange(event) {
        setName(event.target.value);
        setError('');
    }

    function handleMessageChange(event) {
        setMessage(event.target.value);
        setError('');
    }

    return (
        <>
            <h4>Topic form</h4>
            <form action="#" method="GET" className="form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="name-field" className="form-label">Name:</label>
                    <input 
                        id="name-field" 
                        type="text" 
                        name="name" 
                        value={name}
                        onChange={handleNameChange}
                        required />
                </div>
                <div className="form-row">
                    <label htmlFor="message-field" className="form-label">Message:</label> 
                    <textarea 
                        id="message-field" 
                        name="message" 
                        value={message}
                        onChange={handleMessageChange}
                        required></textarea>
                </div>
                <div className="form-row">
                    <button type="submit">Create</button>
                </div>
                <div className="form-row  error">
                    {error}
                </div>                
            </form>     
        </>
    );
}