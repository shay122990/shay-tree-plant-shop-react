import "./payment-form.styles.css";
import { useContext, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import Button from "../button/button.component";

const PaymentForm = ({ onSuccess = () => {}, onError = () => {} }) => {
  const stripe = useStripe();
  const elements = useElements();

  const { cartTotal } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    try {
      const response = await fetch(
        "/.netlify/functions/create-payment-intent",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: cartTotal * 100 }),
        }
      ).then((res) => res.json());

      const clientSecret = response.paymentIntent.client_secret;

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: currentUser ? currentUser.displayName : "Guest",
          },
        },
      });

      if (paymentResult.error) {
        onError(paymentResult.error.message);
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        onSuccess("Payment Successful!");
      }
    } catch (error) {
      onError("An unexpected error occurred.");
    } finally {
      setIsProcessingPayment(false);
    }
  };

  return (
    <div className="payment-form-container">
      <form className="form-container" onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement className="card-element" />
        <div className="payment-button">
          <Button buttonType="payment" isLoading={isProcessingPayment}>
            Pay Now
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
