import "./payment-form.styles.css";
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
  const { cartTotal } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [message, setMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.log("Stripe.js has not loaded yet.");
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

      if (!response.paymentIntent) {
        console.log("Failed to create payment intent:", response);
        setMessage("Failed to create payment intent.");
        setIsSuccess(false);
        onError("Failed to create payment intent.");
        return;
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
        console.log("Payment failed:", paymentResult.error.message);
        setMessage(paymentResult.error.message);
        setIsSuccess(false);
        onError(paymentResult.error.message);
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        console.log("Payment successful!");
        setMessage("Payment Successful!");
        setIsSuccess(true);
        onSuccess("Payment Successful!");
      } else {
        console.log(
          "Payment failed with status:",
          paymentResult.paymentIntent.status
        );
        setMessage(
          `Payment failed with status: ${paymentResult.paymentIntent.status}`
        );
        setIsSuccess(false);
        onError(
          `Payment failed with status: ${paymentResult.paymentIntent.status}`
        );
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      setMessage("An unexpected error occurred.");
      setIsSuccess(false);
      onError("An unexpected error occurred.");
    } finally {
      setIsProcessingPayment(false);
    }
  };

  return (
    <div className="container-fluid d-flex flex-column justify-content-center  align-items-center px-1 ">
      {message ? (
        <MessageDisplay
          isSuccess={isSuccess}
          message={message}
          onButtonClick={null}
          buttonText={null}
          className="payment-message"
        />
      ) : (
        <form
          className="d-flex flex-column w-75 px-5 py-3 border border-secondary rounded gap-3"
          onSubmit={paymentHandler}
        >
          <h4 className="cc-payment">Credit Card Payment:</h4>
          <CardElement className="border border-dark rounded py-2" />
          <Button buttonType="payment" isLoading={isProcessingPayment}>
            Pay Now
          </Button>
        </form>
      )}
    </div>
  );
};

PaymentForm.propTypes = {
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

export default PaymentForm;
