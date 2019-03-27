import * as React from 'react';
import './app.css';
export default class App extends React.Component {
  
  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => {console.log(user) });
  }

  render() {
    return (
      <div>
        <h1> Hello react </h1>
      </div>
    );
  }
}
