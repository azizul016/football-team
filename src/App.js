import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import TeamDetails from './components/TeamDetails/TeamDetails';

function App() {

  return (
    <div className="App">
      <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/team-details/:idTeam">
            <TeamDetails></TeamDetails>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
