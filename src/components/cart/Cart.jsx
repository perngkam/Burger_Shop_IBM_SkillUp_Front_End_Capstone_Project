import React from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>
    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const increment = (item) => {};
  const decrement = (item) => {};

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Double Cheese Burger"}
          img={burger1}
          value={10}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Classic Cheese Burger"}
          img={burger2}
          value={10}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Cheese & Bacon Burger"}
          img={burger3}
          value={10}
          increment={(value) => increment(3)}
          decrement={() => decrement(3)}
        />
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>€{900}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>€{45}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>€{0}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>€{900 + 45 + 0}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
