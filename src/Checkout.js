import React from "react";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";

function Checkout({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  const [{ basket, numberItem, Subtotal }] = useStateValue();
  return (
    <div className="checkout">
      <img
        className="checkout_ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt="ad"
      />
      <div>
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping basket is empty</h2>
          </div>
        ) : (
          <div>
            <h2>Your shopping baseket: </h2>
          </div>
        )}
      </div>
      <div className="checkout_content">
        <div>
          {basket.map(({ id, image, title, rating, price, amount }) => {
            return (
              <CheckoutProduct
                key={id}
                id={id}
                title={title}
                price={price}
                rating={rating}
                image={image}
                amount={amount}
              />
            );
          })}
        </div>
        <div className="checkout_totalPrice">
          <p>
            SubTotal ({numberItem} {numberItem > 1 ? "items" : "item"}) is:
            <strong>
              $ {Subtotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </strong>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
