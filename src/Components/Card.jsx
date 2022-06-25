import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-child">
        <div className="title">
          <b> title:</b>
          {props.post.title}
        </div>
        <div className="body">
          <b>body:</b>
          {props.post.body}
        </div>
      </div>
    </div>
  );
}
