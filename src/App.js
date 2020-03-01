import React, { Component } from "react";
import AppBar from "./components/layout/Navbar";
import Content from "./components/layout/Content";
import { fetchData } from "./utils/services";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      users: [],
      currentPage: 3, // It can be changed to any value.. Just for demonstration
      numberPerPage: 6,
      appState: "loading",
      errorMessage: ""
    };
  }

  changePage = newPage => this.setState({ currentPage: newPage });

  componentDidMount() {
    Promise.all([fetchData("posts"), fetchData("users")])
      .then(data =>
        this.setState({ posts: data[0], users: data[1], appState: "success" })
      )
      .catch(e =>
        this.setState({ appState: "error", errorMessage: String(e) })
      );
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
          users={this.state.users}
        ></Content>
      </div>
    );
  }
}

export default App;
