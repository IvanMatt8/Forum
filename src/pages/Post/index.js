import Header from "../../components/Header"
import { BsArrowRight } from "react-icons/bs"
import Card from "../../components/Card"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./index.css"

function Post() {

  const [posts, setPosts] = useState([])
  const [firstPost,setFirstPost] = useState({})


  useEffect(() => {
    axios.get('https://xwty58thd3.execute-api.sa-east-1.amazonaws.com/dev/forum', {
      headers: {
        'X-API-key': '3kNK1HiMH41UkI2irIWVB29AkVkWvqcH2hySl1dZ',
        'Accept': 'application/json'
      }
    }).then(response => {
      setPosts(response.data.posts)
      setFirstPost(response.data.posts.shift())
      

    });

  }, [])

  return (
    <div className="App">

      <Header />
      <div className="wrapperLayout">
        <div className="front">
          <img className="imageBody" src={firstPost.image} alt="imagem"  /> </div>

        <div className="wrapperTitle">
          <h2>{firstPost.title}</h2>
          <p>{firstPost.description}</p>
          <a href="http://localhost:3000/Create"> Read Full  <BsArrowRight className="iconArrow" color="blue" width="27" height="25" /> </a>
        </div>
      </div>
      <div className="contentCards">
        {posts.map((post, key) => (
          <Card key={key} image={post.image} title={post.title} description={post.description} />
        ))}
      </div>

    </div>
  );
}

export default Post;
