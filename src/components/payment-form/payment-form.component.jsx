import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import Button from "../button/button.component";
import MessageDisplay from "../message-display/message-display.component";

const PaymentForm = ({ onSuccess = () => {}, onError = () => {} }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { cartTotal, clearCart } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [message, setMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.log("Stripe.js has not loaded yet.");
      return;
    }

    setIsProcessingPayment(true);
    setMessage(null);

    try {
      const response = await fetch(
        "/.netlify/functions/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: cartTotal * 100 }),
        }
      ).then((res) => res.json());

      if (!response.paymentIntent) {
        throw new Error("Failed to create payment intent.");
      }

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
        throw new Error(paymentResult.error.message);
      }

      if (paymentResult.paymentIntent.status === "succeeded") {
        clearCart();
        setIsSuccess(true);
        setMessage("Payment Successful!");
        onSuccess("Payment Successful!");
      } else {
        throw new Error(
          `Payment failed with status: ${paymentResult.paymentIntent.status}`
        );
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage(error.message || "An unexpected error occurred.");
      onError(error.message);
    } finally {
      setIsProcessingPayment(false);
    }
  };

  return (
    <div className="container-fluid w-100 d-flex flex-column justify-content-center align-items-center p-0">
      <form
        className="d-flex flex-column w-75 px-5 py-3 border border-secondary rounded gap-2"
        onSubmit={paymentHandler}
      >
        <h4 className="cc-payment">Credit Card Payment:</h4>
        <CardElement className="border border-dark rounded py-2" />
        <Button buttonType="payment" isLoading={isProcessingPayment}>
          Pay Now
        </Button>
      </form>

      {message && (
        <MessageDisplay
          isSuccess={isSuccess}
          message={message}
          onButtonClick={null}
          buttonText={null}
          className="payment-message mb-3 ext-dark"
        />
      )}
    </div>
  );
};

PaymentForm.propTypes = {
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

export default PaymentForm;
