import React from 'react'
import { useStateValue } from "./StateProvider";
import './CheckoutProduct.css'

function CheckoutProduct({ id, image, title, rating, price, amount }) {
  const [, dispatch] = useStateValue();
  const removeFromBasket = ({ id }) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
      price:price,
    });
  };
  return (
    <div className="checkout_product" key={id}>
      <div className="checkout_product_info">
        <p className="checkout_product_title">{title}</p>
        <div className="checkout_product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span role="img" aria-label="emoji">
                ⭐
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <p className="checkout_product_amount">
        Number of items: <strong>{amount}</strong>
      </p>
      <p className="checkout_product_price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <button
        onClick={() => {
          removeFromBasket({ id, price });
        }}
      >
        Remove to basket
      </button>
    </div>
  );
}

export default CheckoutProduct
