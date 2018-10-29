import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import store from "./store";
import AddPostForm from "./components/AddPostForm";
import PostsList from "./components/PostsList";

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <AddPostForm />
          <PostsList />
        </div>
      </Provider>
    );
  }
}

export default App;
