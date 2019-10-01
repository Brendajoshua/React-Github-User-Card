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

  
  render() {
    return (
        <div className="App">
            <Header as="h1" content="GitHub User Card" />
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Input
                        name="github username"
                        placeholder="Github Username"
                        value={this.state.searchUserName}
                        onChange={this.handleChange}
                    />
                    <Form.Button content="Submit" />
                </Form.Group>
            </Form>
            <FollowersList
                userName={this.state.userName}
                user={this.state.userObject}
            />
        </div>
    );
}
}
export default App;
