import React from 'react';
import './App.css';
import UserCard from './components/UserCard';


class App extends React.Component {
  constructor(){
  console.log("constructor");
    super();
    this.state = {
      user: {}
    };
  }
    
  componentDidMount() {
  console.log("CDM");
    fetch("https://api.github.com/users/nantonacci")
      .then(res => res.json())
      .then(res => this.setState({ user: res }))
      .catch(err => console.log(err));

  }

  
  render() {
    console.log("render");
    return (
      <div>
        <UserCard user={this.state.user}/>
     
        
      </div>
    );
  }
}

export default App;