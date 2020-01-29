import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./Sidebar";
import BlogContainer from "../Blog/BlogContainer";

export default class Content extends Component {
  render() {
    return (
      <div className="my-5">
        <Container>
          <Row>
            <Col xs={12} md={2}>
              <Sidebar></Sidebar>
            </Col>
            <Col xs={12} md={10}>
              <BlogContainer posts={this.props.posts}></BlogContainer>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}