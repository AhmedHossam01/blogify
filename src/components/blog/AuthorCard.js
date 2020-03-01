import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export default class AuthorCard extends Component {
  render() {
    const { author } = this.props;
    return (
      <div>
        <ListGroup className="list-group-flush mb-3">
          <ListGroupItem>Author: {author.name}</ListGroupItem>
          <ListGroupItem>
            Website: <a href={author.website}>{author.website}</a>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
