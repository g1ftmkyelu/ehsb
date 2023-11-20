import React, { useRef, useEffect, useState } from "react";
import PaymentFailure from "./PaymentFailiure";
import PaymentSuccess from "./PaymentSuccess";

function PayPalCheckout() {
  const paypal = useRef();
  const [transactionStatus, setTransactionStatus] = useState(null);
  const hasEffectRun = useRef(false);

  useEffect(() => {
    if (!hasEffectRun.current) {
      window.paypal
        .Buttons({
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log("success", order);
            setTransactionStatus("success");
          },
          onError: (err) => {
            console.log(err);
            setTransactionStatus("failure");
          },
        })
        .render(paypal.current);
      
      hasEffectRun.current = true;
    }
  }, []);

  if (transactionStatus === "success") {
    return <PaymentSuccess />;
  }

  if (transactionStatus === "failure") {
    return <PaymentFailure />;
  }

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}

export default PayPalCheckout;
