import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddPostForm from "./components/AddPostForm";
import PostsList from "./components/PostsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        
        <AddPostForm />
        <PostsList />
      </div>
    );
  }
}

export default App;
