import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Post() {
  let [post, setPost] = useState([]);
  let [postData, setpostData] = useState([]);

  let [inpTerm, setinpTerm] = useState("");
  useEffect(() => {
    function getData() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          let allpost = data;
          setPost(allpost);
          setpostData(allpost);
        });
    }
    getData();
  }, []);

  function inputHandler(e) {
    setinpTerm(e.target.value.toLowerCase());
  }
  const search = () => {
    console.log(inpTerm);
    let filteredData = postData.filter((item, i) =>
      item.title.includes(inpTerm)
    );
    setPost(filteredData);
  };

  return (
    <div>
      <div className="search-bar">
        <input placeholder="search here" type="text" onChange={inputHandler} />
        <button onClick={search}>Search</button>
      </div>
      <div className="all-posts">
        {post.map((item, index) => (
          <Card key={index} post={item} />
        ))}
      </div>
    </div>
  );
}
