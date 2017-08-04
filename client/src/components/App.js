import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import NavigationContainer from "../containers/NavigationContainer";
import CardsAllContainer from "../containers/CardsAllContainer";
import CurrentCardContainer from "../containers/CurrentCardContainer";
import CurrentCardEditContainer from "../containers/CurrentCardEditContainer";
import ListResolverContainer from "../containers/ListResolverContainer";
import ReturnAddressContainer from "../containers/ReturnAddressContainer";
import ShoppingCartContainer from "../containers/ShoppingCartContainer";
import AuthContainer from "../containers/AuthContainer";
import CheckoutContainer from "../containers/CheckoutContainer";
import LandingPage from "./LandingPage";

class App extends Component {
  render() {
    if (!navigator.cookieEnabled) {
      return (
        <Router>
          <NavigationContainer title={"CardTastuk"} />
          <h1>You must enable cookies in order to use this website.</h1>
        </Router>
      );
    }
    return (
      <Router>
        <ScrollToTop>
          <NavigationContainer title={"CardTastuk"} />
          <Switch>
            <Route path="/checkout" component={CheckoutContainer} />
            <Route
              path="/cards/:id/address"
              component={ReturnAddressContainer}
            />
            <Route path="/cards/:id/upload" component={ListResolverContainer} />
            <Route
              path="/cards/:id/edit"
              component={CurrentCardEditContainer}
            />
            <Route path="/cards/:id" component={CurrentCardContainer} />
            <Route path="/cards" component={CardsAllContainer} />
            <Route path="/cart" component={ShoppingCartContainer} />
            <Route path="/auth" component={AuthContainer} />
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
