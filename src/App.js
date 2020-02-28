import React, { Component } from "react";
import AppBar from "./components/layout/Navbar";
import Content from "./components/layout/Content";
import paginatin from "./utils/paginate";
import { fetchPosts } from "./utils/services";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      currentPage: 0,
      numberPerPage: 6
    };
  }

  changePage = newPage => this.setState({ currentPage: newPage });

  getPosts = async () => {
    const posts = await fetchPosts();
    this.setState({ posts });
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <div className="App">
        <AppBar></AppBar>
        <Content
          posts={this.state.posts}
          currentPage={this.state.currentPage}
          changePage={this.changePage}
          numberPerPage={this.state.numberPerPage}
        ></Content>
      </div>
    );
  }
}

export default App;
