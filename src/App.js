import React, { Component } from "react";
import AppBar from "./components/layout/Navbar";
import Content from "./components/layout/Content";
import { fetchPosts } from "./utils/services";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      currentPage: 0,
      numberPerPage: 6,
      appState: "loading",
      errorMessage: ""
    };
  }

  changePage = newPage => this.setState({ currentPage: newPage });

  componentDidMount() {
    fetchPosts()
      .then(posts => {
        this.setState({ posts, appState: "success" });
      })
      .catch(e => this.setState({ appState: "error", errorMessage: e }));
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
          appState={this.state.appState}
          errorMessage={this.state.errorMessage}
        ></Content>
      </div>
    );
  }
}

export default App;
