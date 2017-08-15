import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import NavigationContainer from "../containers/Shared/NavigationContainer";
import CardsAllContainer from "../containers/CardsAll/CardsAllContainer";
import CardViewContainer from "../containers/CurrentCard/CardViewContainer";
import CardEditContainer from "../containers/CurrentCard/CardEditContainer";
import ListHandlerContainer from "../containers/CurrentCard/ListHandlerContainer";
import ReturnAddressContainer from "../containers/CurrentCard/CardReturnAddressContainer";
import ShoppingCartContainer from "../containers/ShoppingCart/ShoppingCartContainer";
import AuthContainer from "../containers/Auth/AuthContainer";
import CheckoutContainer from "../containers/Checkout/CheckoutContainer";
import WelcomeContainer from "../containers/Welcome/WelcomeContainer";
import LandingPage from "./LandingPage/";
import SuccessfulTransaction from "./Checkout/SuccessfulTransaction";

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
            <Route path="/welcome" component={WelcomeContainer} />
            <Route path="/success" component={SuccessfulTransaction} />
            <Route path="/checkout" component={CheckoutContainer} />
            <Route
              path="/cards/:id/address"
              component={ReturnAddressContainer}
            />
            <Route path="/cards/:id/upload" component={ListHandlerContainer} />
            <Route path="/cards/:id/edit" component={CardEditContainer} />
            <Route path="/cards/:id" component={CardViewContainer} />
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
