import React, { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

function Home() {
  const [posts, setPosts] = useState([]);

  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  });
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
