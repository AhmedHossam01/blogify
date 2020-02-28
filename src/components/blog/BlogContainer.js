import React, { Component } from "react";
import BlogPost from "./BlogPost";
import CardColumns from "react-bootstrap/CardColumns";
import paginate from "../../utils/paginate";

export default class BlogContainer extends Component {
  getPosts = () => {
    return paginate.getItems(
      this.props.posts,
      this.props.currentPage,
      this.props.numberPerPage
    );
  };

  render() {
    const currentPosts = this.getPosts();

    return (
      <CardColumns>
        {currentPosts.map((post, index) => {
          return (
            <BlogPost
              key={index}
              title={post.title}
              body={post.body}
              picture="image.jpg"
            ></BlogPost>
          );
        })}
      </CardColumns>
    );
  }
}
