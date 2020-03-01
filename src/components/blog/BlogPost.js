import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AuthorCard from "./AuthorCard";

export default class BlogPost extends Component {
  render() {
    const { author, title, body, picture } = this.props;
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
          <AuthorCard author={author}></AuthorCard>
          <Button variant="dark" bg="dark">
            Read More
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
