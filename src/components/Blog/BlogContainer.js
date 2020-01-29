import React, { Component } from "react";
import BlogPost from "./BlogPost";
import CardColumns from "react-bootstrap/CardColumns";

export default class BlogContainer extends Component {
  render() {
    return (
      <CardColumns>
        {this.props.posts.map(post => {
          return (
            <BlogPost
              key={post.id}
              title={post.title}
              body={post.body}
            ></BlogPost>
          );
        })}
      </CardColumns>
    );
  }
}
