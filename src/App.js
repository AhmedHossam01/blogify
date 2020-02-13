import React, { Component } from "react";
import AppBar from "./components/layout/Navbar";
import Content from "./components/layout/Content";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: ["hello"]
    };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div className="App">
        <AppBar></AppBar>
        <Content posts={this.state.posts}></Content>
      </div>
    );
  }
}

export default App;
