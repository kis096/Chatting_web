import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const [err, setErr] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    if (!currentUser?.uid) {
      console.log("❌ currentUser.uid is undefined!"); // Debugging log
      return;
    }

    console.log(`📌 Fetching chats for UID: ${currentUser.uid}`); // Debugging log

    const unsub = onSnapshot(
      doc(db, "userChats", currentUser.uid),
      (doc) => {
        const data = doc.data();
        console.log("✅ Received chat data:", data); // Debugging log
        if (data) {
          setChats(data);
        }
      },
      (error) => {
        console.error("❌ Error fetching user chats:", error.message);
        setErr(error.message);
      }
    );

    return () => unsub();
  }, [currentUser?.uid]);

  const handleSelect = (u) => {
    console.log("📌 Selected user:", u); // Debugging log
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="chats">
      {err && <span>Error: {err}</span>} 
      {chats && Object.entries(chats)
        .sort((a, b) => b[1]?.date - a[1]?.date)
        .map((chat) => (
          <div className="userChat" key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
            <img src={chat[1]?.userInfo?.photoURL || "/default-avatar.png"} alt="User Avatar" />
            <div className="userChatInfo">
              <span>{chat[1]?.userInfo?.displayName || "Unknown User"}</span>
              <p>{chat[1]?.lastMessage?.text || "No messages yet"}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
