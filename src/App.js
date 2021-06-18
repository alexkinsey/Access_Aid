import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

import NavBar from './components/NavBar';
import LocationListContainer from './container/LocationListContainer';
import Home from './container/HomeContainer';
import LocationContainer from './container/LocationContainer';
import ErrorPage from './container/ErrorPage';
import Resources from './components/Resources';
import './App.css';

function App() {
  const [locations, setLocations] = useState([]);
  const [users, setUsers] = useState([]);
  const [locationsLoaded, setLocationsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://access-aid-default-rtdb.firebaseio.com/locations/.json')
      .then((response) => response.json())
      .then((data) => setLocations(data));

      fetch('https://access-aid-default-rtdb.firebaseio.com/users/.json')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    if (locations.length) {
      setLocationsLoaded(true);
    }
  }, [locations]);

  return (
    <>
      <Router>
        <NavBar className="nav-bar" />
        <div className="page-content">
          <Switch>
            <Route exact path="/">
              <Home locations={locations} locationsLoaded={locationsLoaded} />
            </Route>
            <Route path="/locations">
              <LocationListContainer locations={locations} locationsLoaded={locationsLoaded} />
            </Route>
            <Route path="/location/:id">
              <LocationContainer users={users} />
            </Route>
            <Route path="/resources" component={Resources} />
            <Route path="/mock-business" component={LocationContainer} />
            <Route component={ErrorPage} />
            
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
