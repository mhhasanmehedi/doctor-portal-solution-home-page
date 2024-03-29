import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
