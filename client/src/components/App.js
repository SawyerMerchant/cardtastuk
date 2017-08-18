import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import NavigationContainer from "../containers/Shared/NavigationContainer";
import CardsAllContainer from "../containers/CardsAll/CardsAllContainer";
import CardDescriptionContainer from "../containers/CurrentCard/CardDescriptionContainer";
import CardEditContainer from "../containers/CurrentCard/CardEditContainer";
import CardSignatureContainer from "../containers/CurrentCard/CardSignatureContainer";
import ListHandlerContainer from "../containers/CurrentCard/ListHandlerContainer";
import ReturnAddressContainer from "../containers/CurrentCard/CardReturnAddressContainer";
import ShoppingCartContainer from "../containers/ShoppingCart/ShoppingCartContainer";
import AuthContainer from "../containers/Auth/AuthContainer";
import RedirectContainer from "../containers/Redirect/RedirectContainer";
import CheckoutContainer from "../containers/Checkout/CheckoutContainer";
import WelcomeContainer from "../containers/Welcome/WelcomeContainer";
import LandingPage from "./LandingPage/";
import AdminRegister from "./AdminRegister/";
import SuccessfulTransaction from "../containers/Checkout/SuccessfulTransactionContainer";

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
            <Route path="/fundraise" component={AdminRegister} />
            <Route path="/welcome" component={WelcomeContainer} />
            <Route path="/success" component={SuccessfulTransaction} />
            <Route path="/checkout" component={CheckoutContainer} />
            <Route
              path="/cards/:id/address"
              component={ReturnAddressContainer}
            />
            <Route path="/cards/:id/upload" component={ListHandlerContainer} />
            <Route
              path="/cards/:id/signature"
              component={CardSignatureContainer}
            />
            <Route path="/cards/:id/edit" component={CardEditContainer} />
            <Route path="/cards/:id" component={CardDescriptionContainer} />
            <Route path="/u/:code" component={RedirectContainer} />
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
