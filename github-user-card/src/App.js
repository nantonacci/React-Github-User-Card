import React from 'react';
import './App.css';
import UserCard from './components/UserCard.js';
import FollowerCard from './components/FollowerCard.js';


class App extends React.Component {
  constructor(){
  console.log("constructor");
    super();
    this.state = {
      user: {},
      followers: []
    };
  }
    
  componentDidMount() {
  console.log("CDM");
  // fetch user data
    fetch("https://api.github.com/users/nantonacci")
      .then(res => res.json())
      .then(res => this.setState({ user: res }))
      .catch(err => console.log(err));

  // fet follower data
    fetch("https://api.github.com/users/nantonacci/followers")
      .then(res => res.json())
      .then(res => this.setState({ followers: res }))
      .catch(err => console.log(err));
  }

  
  render() {
    console.log("render");
    return (
      <div>
        <UserCard user={this.state.user}/>
        <FollowerCard follower={this.state.followers}/>
        
      </div>
    );
  }
}

export default App;