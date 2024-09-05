import Button from "../button/button.component";
const PaymentForm = () => {
  return (
    <div className="payment-form-container">
      <form className="form-container">
        <h2>Credit Card Payment:</h2>
        {/* <CardElement className="card" /> */}
        <div className="payment-button">
          <Button buttonType="payment">Pay Now</Button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
