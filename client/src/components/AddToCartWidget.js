import React, { Component } from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Glyphicon
} from "react-bootstrap";
import serialize from "form-serialize";
import { calculatePrice } from "../helpers";

class AddToCartWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: "$0.00"
    };
  }

  onQuantityChange = (e, prices) => {
    const form = e.target.parentNode.parentNode;
    const quantity = serialize(form, { hash: true }).quantity || 0;
    let price = calculatePrice(+quantity, prices);

    this.setState({
      price
    });
  };

  render() {
    const { card, currentList, cardMessage, onAddToCart } = this.props;
    return (
      <div>
        <h3>Total: {this.state.price}</h3>

        <form
          id="add-to-cart"
          onSubmit={e => onAddToCart(e, card, currentList, cardMessage)}
          onChange={e => this.onQuantityChange(e, card.price)}
        >
          <FormGroup controlId="quantity">
            <ControlLabel>Quantity</ControlLabel>
            <FormControl
              type="number"
              name="quantity"
              defaultValue={0}
              min={1}
              step={1}
              required
            />
          </FormGroup>
          <Button bsStyle="info" bsSize="large" type="submit" block>
            <Glyphicon glyph="shopping-cart" />{" "}
            Add To Cart
          </Button>
        </form>
      </div>
    );
  }
}

export default AddToCartWidget;
