import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Navigation from "./Navigation";
import CardsAllContainer from "../containers/CardsAllContainer";
import CurrentCardContainer from "../containers/CurrentCardContainer";
import CurrentCardEditContainer from "../containers/CurrentCardEditContainer";
import ListResolverContainer from "../containers/ListResolverContainer";
import AuthContainer from "../containers/AuthContainer";
import LandingPage from "./LandingPage";

class App extends Component {
  render() {
    if (!navigator.cookieEnabled) {
      return (
        <Router>
          <Navigation title={"CardTastuk"} />
          <h1>You must enable cookies in order to use this website.</h1>
        </Router>
      );
    }
    return (
      <Router>
        <ScrollToTop>
          <Navigation title={"CardTastuk"} />
          <Switch>
            <Route path="/cards/:id/upload" component={ListResolverContainer} />
            <Route
              path="/cards/:id/edit"
              component={CurrentCardEditContainer}
            />
            <Route path="/cards/:id" component={CurrentCardContainer} />
            <Route path="/cards" component={CardsAllContainer} />
            <Route path="/auth" component={AuthContainer} />
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
