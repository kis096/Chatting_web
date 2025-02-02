import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const TestAuth = () => {
  const { currentUser } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data only if the currentUser is defined and has a UID
    if (currentUser?.uid) {
      const fetchUserData = async () => {
        try {
          const docRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            console.log("User data:", docSnap.data());  // Debugging line
            setUserData(docSnap.data());
          } else {
            console.log("No such document!");
          }
        } catch (err) {
          console.log("Error getting user data:", err);
        }
      };

      fetchUserData();
    }
  }, [currentUser?.uid]);  // Re-run the effect when currentUser's UID changes

  // Handle the case when currentUser is null or undefined
  if (currentUser === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Test Authentication</h1>
      <p>User is authenticated: {currentUser?.uid}</p>
      {userData ? (
        <p>User Data: {JSON.stringify(userData)}</p>
      ) : (
        <p>No user data found</p>
      )}
    </div>
  );
};

export default TestAuth;
