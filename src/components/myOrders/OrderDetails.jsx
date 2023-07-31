import React from "react";

const OrderDetails = () => {
  const date = "2023-07-30"
  const deliverydate = "2023-07-31"
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b> {"Street address"}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b> {"John Doe"}
          </p>
          <p>
            <b>Phone</b> {2131232123}
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b> {"Processing"}
          </p>
          <p>
            <b>Placed At</b> {date}
          </p>
          <p>
            <b>Delivered At</b> {deliverydate}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b> {"COD"}
          </p>
          <p>
            <b>Payment Reference</b> #{/*"asdasdsadsad"*/}{" "}
          </p>
          <p>
            <b>Paid At</b> {date}
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b> €{900}
          </p>
          <p>
            <b>Shipping Charges</b> €{0}
          </p>
          <p>
            <b>Tax</b> €{45}
          </p>
          <p>
            <b>Total Amount</b> €{900 + 0 + 45}
          </p>
        </div>
        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Double Cheese Burger</h4>
            <div>
              <span>{10}</span> x <span>{30}</span>
            </div>
          </div>
          <div>
            <h4>Classic Cheese Burger</h4>
            <div>
              <span>{10}</span> x <span>{25}</span>
            </div>
          </div>
          <div>
            <h4>Cheese & Bacon Burger</h4>
            <div>
              <span>{10}</span> x <span>{35}</span>
            </div>
          </div>
          <div style={{ fontWeight: 800 }}>
            <h4>Sub Total</h4>
            <div>€{900}</div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
