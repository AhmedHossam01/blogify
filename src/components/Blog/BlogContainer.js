import React, { Component } from "react";
import BlogPost from "./BlogPost";
import CardColumns from "react-bootstrap/CardColumns";
import { paginate } from "../../Functions/paginate";

export default class BlogContainer extends Component {
  render() {
    const currentPosts = paginate(this.props.posts, this.props.currentPage);
    return (
      <CardColumns>
        {currentPosts.map(post => {
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
