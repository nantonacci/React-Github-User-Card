import React from 'react';

import './App.css';

class App extends React.Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    console.log("CDM");
    fetch('https://api.github.com/users/nantonacci')
    .then(res => res.json())
    .then(user => {console.log(user);
      this.setState({deets: user})
    })
    .catch(err => console.log(err))
  }

  render() {
    console.log("render");
    return(
      <div>
      </div>
    )
  }
}

export default App;
