import './App.css';
import { useState, useEffect } from 'react';
import Nav from './Nav';
import About from './Pages/About';
import Employees from './Pages/Employees';
import Departments from './Pages/Departments';
import BottomBar from './Components/BottomBar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  useEffect(() => {
    const interval = setInterval(() => {
      fetchStatus();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [status, setStatus] = useState(false);

  const fetchStatus = async () => {
    try {
      await fetch('http://localhost:8081/status', {
        timeout: 6000
      }).then((res) => {
        console.log(res)
        if(res.ok){
          setStatus(true)
        }
      });
    } catch (error) {
      console.log(error);
      setStatus(false)
    }
  }
  
  const StatusIndicator = () => {
  
    return(
      <div className={status ? 'background-green' : 'background-red'}>
         API STATUS
      </div>
    )
  }

  return (
    <Router>
      <div className="App">
        {StatusIndicator()}
        <Nav />
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/employees" component={Employees}/>
          <Route path="/departments" component={Departments}/>
        </Switch>
        <BottomBar />
      </div>
    </Router>
  );
}

export default App;
