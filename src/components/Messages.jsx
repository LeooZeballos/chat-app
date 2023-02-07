import React from "react";
import Message from "./Message";
import { useState, useEffect, useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data?.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unsub();
    };
  }, [data.chatId]);

  return (
    data.chatId !== "null" ? (
    <div className="messages">
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </div>) : (
      <div className="noMessages">
        <h1>Selecciona un chat</h1>
      </div>
    )
  );
};

export default Messages;
