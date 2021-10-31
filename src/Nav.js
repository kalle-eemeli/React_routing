import './App.css';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

function Nav() {

  const navStyle = {
    color: 'white'
  }

  return (
    <div>
        <nav>
            <a href="https://reactjs.org/">
              <img src={logo} className="App-logo" alt="logo" />
            </a>
            <ul className="nav-links">
                <Link style={navStyle} to="/about">
                  <li>About</li>
                </Link>
                <Link style={navStyle} to="/employees">
                  <li>Employees</li>
                </Link>
                <Link style={navStyle} to="/departments">
                  <li>Departments</li>
                </Link>
            </ul>
        </nav>
    </div>
  );
}

export default Nav;