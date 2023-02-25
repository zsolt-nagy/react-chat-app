import React from 'react';
import './TopicForm.css';

export default function TopicForm() {
    const [name, setName] = React.useState('');
    const [message, setMessage] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log(name, message);
        setName('');
        setMessage('');
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleMessageChange(event) {
        setMessage(event.target.value);
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
            </form>     
        </>
    );
}