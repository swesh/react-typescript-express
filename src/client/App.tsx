import * as React from 'react';
import './app.css';
import About from './components/About';
import Home from './components/HomeComponent';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class App extends React.Component {

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => { console.log("From API--->", user) });
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/home"> Home </Link>
              </li>
              <li>
                <Link to="/about"> About </Link>
              </li>
            </ul>
            <Route exact path='/home' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
          </div>
        </Router>

      </div>
    );
  }
}
