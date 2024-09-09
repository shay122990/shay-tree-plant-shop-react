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
    <div className="container d-flex flex-column w-sm-100 w-md-75 px-5 py-3 border border-secondary rounded">
      {message ? (
        <MessageDisplay
          isSuccess={isSuccess}
          message={message}
          onButtonClick={null}
          buttonText={null}
        />
      ) : (
        <form className="container-fluid" onSubmit={paymentHandler}>
          <h2 className="">Credit Card Payment:</h2>
          <CardElement className="card-element" />
          <div className="payment-button">
            <Button buttonType="payment" isLoading={isProcessingPayment}>
              Pay Now
            </Button>
          </div>
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
