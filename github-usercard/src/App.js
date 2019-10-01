import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = {
    users: {},
    followers: [],
  };

  getUser = () => {
    axios
    .get('https://api.github.com/users/Brendajoshua')
    // .then(res => console.log(res))
    .then(response => {
      console.log(response);
      this.setState({ users: response.data })
    });
    .catch(error => console.log(error))
  }

  getFollowers = () => {
    axios
    .get(`https://api.github.com/users/Brendajoshua/followers`)
    .then(response => {
      console.log(response.data);
      this.setState({ followers: response.data })
    })
    .catch(err => console.log(err))
  }

export default App;
