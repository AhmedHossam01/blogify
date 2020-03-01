import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./Sidebar";
import BlogContainer from "../blog/BlogContainer";
import PaginationUI from "../blog/PaginationUI";

export default class Content extends Component {
  render() {
    let BlogOutput = null;

    if (this.props.appState === "loading") {
      BlogOutput = <div>Loading...</div>;
    } else if (this.props.appState === "error") {
      BlogOutput = <div>Something went wrong: {this.props.errorMessage}</div>;
    } else if (this.props.appState === "success" && !this.props.posts.length) {
      BlogOutput = <div>No Posts</div>;
    } else {
      BlogOutput = (
        <BlogContainer
          posts={this.props.posts}
          currentPage={this.props.currentPage}
          numberPerPage={this.props.numberPerPage}
        ></BlogContainer>
      );
    }

    return (
      <div className="my-5">
        <Container>
          <Row>
            <Col xs={12} md={2}>
              <Sidebar></Sidebar>
            </Col>
            <Col xs={12} md={10}>
              {BlogOutput}

              <PaginationUI
                changePage={this.props.changePage}
                posts={this.props.posts}
                currentPage={this.props.currentPage}
                numberPerPage={this.props.numberPerPage}
                pages={this.props.pages}
              ></PaginationUI>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
