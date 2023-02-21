import React, { useState } from "react";
import logo from "./logo.svg";
import ChatWindow from "./ChatWindow";
import "./App.css";


const users = [{ username: "Amy" }, { username: "John" }];

// const messages = [

// ];

const App = () => {
  const [messages,setMessages]=useState([  { username: "Amy", text: "Hi, Jon!" },
  { username: "Amy", text: "How are you?" },
  { username: "John", text: "Hi, Amy! Good, you?" },])

  const onMessage=(user,message)=>{
    let newMessage= { username: user, text: message}
    setMessages(messages.concat[newMessage])
  }
  // If the user did not type anything, he/she should not be allowed to submit.

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">

        {users.map((user)=>
         ( <ChatWindow
          key={user.username}
          user={user}
          messages={messages}
          onMessage={onMessage}
          />)
        )}
       
      </div>
    </div>
  );
};

export default App;
