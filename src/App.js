import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/index';

function App() {
  return(
    <Router>
      <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/contact" component={Contact} /> */}
      </Switch>
    </Router>
  )
}

export default App;
