import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/index';
import ContactPage from './pages/contact';
import MarketPage from './pages/recommend';
import RecommendPage from './pages/recommend';
import ForecastPage from './pages/forecast';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';

function App() {
  return(
    <Router>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/market" component={MarketPage} />
          <Route exact path="/recommend" component={RecommendPage} />
          <Route exact path="/forecast" component={ForecastPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/signin" component={SignInPage} />
      </Switch>
    </Router>
  )
}

export default App;
