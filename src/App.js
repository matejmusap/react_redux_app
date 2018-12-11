import React, { Component } from "react";
import "./App.css";
import Posts from "./components/posts";
import PostForm from "./components/postForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    );
  }
}

export default App;
