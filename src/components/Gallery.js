import React, { useState, useEffect } from "react";

const Gallery = () => {
  const [posts, setPosts] = useState([])
  const token='IGAAibQmQw0ltBZAE1JTDZAlN05oR3p3ZATlNSU05c2FoMWY0dUx6RHhValhuNTNQU2tjMWxQYWZAUaENXYlJudW1JakNsUEVuNlotWGFudUoyejZArRGRkMDBLQ1NWSDlhVlE4YlhMQll1M3VrMFp6X1h1UGxaWE82bWNnZAFMtS0tqWQZDZD'
  const IDInsta = '2422509264753243'

  const fetchInstagramPosts = async () => {
    try {
      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=${IDInsta},media_type,media_url,caption,permalink&access_token=${token}`
      );
      const data = await response.json();
      setPosts(data.data || []); // Salva os posts no estado
    } catch (error) {
      console.error("Erro ao buscar posts do Instagram:", error);
    }
  };

  useEffect(() => {
    fetchInstagramPosts();
  }, []);
 
  return (
    
<div className="gallery-container">
  <div className="gallery-track">
    {posts.concat(posts).map((post, index) => ( // Duplicação de imagens para efeito contínuo
      <div className="gallery-img" key={index}>
        <a href={post.permalink} target="_blank" rel="noreferrer">
          <img src={post.media_url} alt={post.caption || "Post do Instagram"} />
        </a>
      </div>
    ))}
  </div>
</div>



  );
};

export default Gallery;


