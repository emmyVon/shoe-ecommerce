import React from "react";
import pro1 from "./images/image-product-1.jpg";
import deleteIcon from "./images/icon-delete.svg";

const Cart = ({ itemNo, sum, price, cart, setCart }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.empty || itemNo === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.Added && (
          <div className="cart-info">
            <div>
              <img src={pro1} alt="pro1" />
              <div>
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  ${price} x {itemNo}{" "}
                  <div style={{ display: "inline-block", fontWeight: "bold" }}>
                    {sum(itemNo)}
                  </div>
                </p>
              </div>
              <img
                src={deleteIcon}
                onClick={() => setCart({ ...cart, empty: true })}
                alt="delete"
              />
            </div>
            <button>checkout</button>
          </div>
        )
      )}
    </div>
  );
};

export default Cart;
