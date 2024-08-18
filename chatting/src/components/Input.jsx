import React, { useContext, useState } from "react";
import Img from "../img/img.png";
// import Attach from "../img/attach.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
  writeBatch,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Compressor from "compressorjs";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    setLoading(true);

    try {
      if (img) {
        // Compress image before upload
        new Compressor(img, {
          quality: 0.6, // Adjust quality as needed
          success: async (compressedImage) => {
            const fileRef = ref(storage, `images/${uuid()}`);
            const uploadTask = uploadBytesResumable(fileRef, compressedImage);

            uploadTask.on(
              "state_changed",
              (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Upload is ${progress}% done`);
              },
              (error) => {
                console.error("Upload error:", error);
                setLoading(false);
              },
              async () => {
                try {
                  const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                  await updateDoc(doc(db, "chats", data.chatId), {
                    messages: arrayUnion({
                      id: uuid(),
                      text,
                      senderId: currentUser.uid,
                      date: Timestamp.now(),
                      img: downloadURL,
                    }),
                  });
                } catch (error) {
                  console.error("Error getting download URL or updating message:", error);
                }
              }
            );
          },
        });
      } else {
        await updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            date: Timestamp.now(),
          }),
        });
      }

      // Use batch to update userChats for both users
      const batch = writeBatch(db);
      const userChatRef1 = doc(db, "userChats", currentUser.uid);
      const userChatRef2 = doc(db, "userChats", data.user.uid);

      batch.update(userChatRef1, {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });

      batch.update(userChatRef2, {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });

      await batch.commit();

      console.log("UserChats updated successfully");

      setText("");
      setImg(null);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        {/* <img src={Attach} alt="Attach" /> */}
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src={Img} alt="Upload" />
        </label>
        <button onClick={handleSend} disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default Input;

