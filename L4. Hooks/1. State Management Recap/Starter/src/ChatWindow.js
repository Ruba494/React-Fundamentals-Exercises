import MessageList from "./MessageList";
import AddMessage from "./AddMessage";
import PropTypes from "prop-types";


export const ChatWindow = ({user, messages, onMessage}) => {
    const onMessageHandeler=(message)=>{
        onMessage(user.username,message)
    }
  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{user.username}</div>
      <MessageList messages={messages} user={user}  />
      <AddMessage onMessage={onMessageHandeler} />
    </div>
  );
};

ChatWindow.prototype={
    user:PropTypes.object.isRequired, 
    messages:PropTypes.array.isRequired, 
    onMessage:PropTypes.func.isRequired
}
  
export default ChatWindow;
