import React, { useState } from "react";

import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../Firebase";

import { useNavigate } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  let nav = useNavigate();

  const postsCollectionRef = collection(db, "posts");

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      text,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    nav("/");
  };

  return (
    <div>
      <div>
        <h1>Create Post</h1>
        <div>
          <input
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <textarea
            placeholder="Type here..."
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
}

export default Create;
