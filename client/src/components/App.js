import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Navigation from "./Navigation";
import CardsAllContainer from "../containers/CardsAllContainer";
import LandingPage from "./LandingPage";

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Navigation title={"CardTastuk"} />
          <Switch>
            <Route path="/cards" component={CardsAllContainer} />
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
