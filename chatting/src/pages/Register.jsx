import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      // Create user with Firebase Auth
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Create a unique image name for the file upload
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      // Upload image to Firebase Storage
      await uploadBytesResumable(storageRef, file);

      // Get the download URL of the uploaded image
      const downloadURL = await getDownloadURL(storageRef);

      // Update profile with display name and photo URL
      await updateProfile(res.user, {
        displayName,
        photoURL: downloadURL,
      });

      // Create user document in Firestore
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        photoURL: downloadURL,
      });

      // Create empty user chats document in Firestore
      await setDoc(doc(db, "userChats", res.user.uid), {});

      // Redirect to home page after successful registration
      navigate("/");
    } catch (err) {
      console.error("Error during registration:", err);
      setErr(err.message); // Set specific error message
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">ChatterUp</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button disabled={loading}>Sign up</button>
          {loading && <p>Loading....</p>} {/* Display a generic loading message */}
          {err && <span>{err}</span>} {/* Display specific error message */}
        </form>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
