import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class BlogPost extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/image.jpg" />
        <Card.Body>
          <Card.Title> {this.props.title} </Card.Title>
          <Card.Text> {this.props.body} </Card.Text>
          <Button variant="dark" bg="dark">
            Read More
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
