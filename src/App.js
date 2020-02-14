import React, { Component } from "react";
import AppBar from "./components/layout/Navbar";
import Content from "./components/layout/Content";
import axios from "axios";
import { getPages } from "./utils/paginate";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      currentPage: 0,
      pages: []
    };
  }

  changePage = newPage => this.setState({ currentPage: newPage });

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      const posts = res.data;
      const pages = getPages(posts);
      this.setState({ posts, pages });
    });
  }
  render() {
    return (
      <div className="App">
        <AppBar></AppBar>
        <Content
          posts={this.state.posts}
          currentPage={this.state.currentPage}
          changePage={this.changePage}
          pages={this.state.pages}
        ></Content>
      </div>
    );
  }
}

export default App;
