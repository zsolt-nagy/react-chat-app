import React from 'react';
import TopicForm from './Components/TopicForm/TopicForm';
import MessageList from './Components/MessageList/MessageList';
import './App.css';

function App() {
  const [messages, setMessages] = React.useState([
    {
      name: 'Player 1',
      message: 'I am ready.',
      liked: false,
      id: 1
    },
    {
      name: 'Player 2',
      message: 'I am not ready yet.',
      liked: false,
      id: 2
    }
  ]);

  function addItem(name, message) {
    setMessages(oldMessages => {
      // Step 1: clone the old value to separate the old from the new.
      const newMessages = structuredClone(oldMessages);
      // Step 2: update the new value
      newMessages.push({
        name,
        message,
        liked: false,
        id: new Date().getTime()
      });
      // Step 3: return the updated new value
      return newMessages;
    });
  }

  function toggleLike(id) {
    setMessages(oldMessages => {
      // Step 1: clone the old value to separate the old from the new.
      const newMessages = structuredClone(oldMessages);
      // Step 2: update the new value
      const toggledItem = newMessages.find(message => message.id === id);
      toggledItem.liked = !toggledItem.liked;

      // Step 3: return the updated new value
      return newMessages;
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Chat app
        </p>
      </header>
      <main>
        <TopicForm addItem={addItem} />
        <MessageList messages={messages} toggleLike={toggleLike} />
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
