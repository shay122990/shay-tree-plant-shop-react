import Logo from "../../assets/shays-tree.jpg";

const Cart = () => {
  return (
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src={Logo}
            alt="Logo"
            width="200"
          />
          <h2>Checkout form</h2>
          <p className="lead">
            Below is an example form built entirely with Bootstrap’s form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </div>

        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Product name</h6>
                  <small className="text-body-secondary">
                    Brief description
                  </small>
                </div>
                <span className="text-body-secondary">$12</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Second product</h6>
                  <small className="text-body-secondary">
                    Brief description
                  </small>
                </div>
                <span className="text-body-secondary">$8</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Third item</h6>
                  <small className="text-body-secondary">
                    Brief description
                  </small>
                </div>
                <span className="text-body-secondary">$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-success">−$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>

            <form
              className="card p-2"
              data-dashlane-rid="e05a7e8502ef6604"
              data-form-type="other"
            >
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                  data-dashlane-rid="59fe694eb9d2a473"
                  data-form-type="other"
                />
                <button
                  type="submit"
                  className="btn btn-secondary"
                  data-dashlane-label="true"
                  data-dashlane-rid="6af09a4d6424113c"
                  data-form-type="other"
                >
                  Redeem
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <form
              className="needs-validation"
              noValidate=""
              data-dashlane-rid="22a091d8d02df523"
              data-form-type="payment"
            >
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    required=""
                    data-dashlane-rid="9af78bc936376a10"
                    data-form-type="name,first"
                    data-kwimpalastatus="alive"
                    data-kwimpalaid="1721660133618-0"
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    required=""
                    data-dashlane-rid="0e524b7e28ae6086"
                    data-form-type="name,last"
                    data-kwimpalastatus="alive"
                    data-kwimpalaid="1721660133618-1"
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                      required=""
                      data-dashlane-rid="24659ff202ec3a1a"
                      data-form-type="username"
                      data-kwimpalastatus="alive"
                      data-kwimpalaid="1721660133618-2"
                    />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email{" "}
                    <span className="text-body-secondary">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                    data-dashlane-rid="7be781347bcde49b"
                    data-form-type="email"
                    data-kwimpalastatus="alive"
                    data-kwimpalaid="1721660133618-3"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required=""
                    data-dashlane-rid="6d30bb3d6f3fab57"
                    data-form-type="address"
                    data-kwimpalastatus="alive"
                    data-kwimpalaid="1721660133618-4"
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address2" className="form-label">
                    Address 2{" "}
                    <span className="text-body-secondary">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                    data-dashlane-rid="86e34d55dc469a01"
                    data-form-type="address,extra"
                  />
                </div>

                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <select
                    className="form-select"
                    id="country"
                    required=""
                    data-dashlane-rid="2a2ccb9a37085ce6"
                    data-form-type="address,country"
                    data-kwimpalastatus="dead"
                  >
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <select
                    className="form-select"
                    id="state"
                    required=""
                    data-dashlane-rid="a80df1caea733c4c"
                    data-form-type="address,region"
                    data-kwimpalastatus="dead"
                  >
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    required=""
                    data-dashlane-rid="155bb18022eb4a4c"
                    data-form-type="address,zip"
                    data-kwimpalastatus="alive"
                    data-kwimpalaid="1721660133618-7"
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>

              <hr className="my-4" />

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="same-address"
                  data-dashlane-rid="9208a06eb0a69015"
                  data-form-type="other"
                />
                <label className="form-check-label" htmlFor="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="save-info"
                  data-dashlane-rid="306d9f0b9617df71"
                  data-form-type="other"
                />
                <label className="form-check-label" htmlFor="save-info">
                  Save this information for next time
                </label>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Payment</h4>

              <div className="my-3">
                <div className="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                    data-dashlane-rid="160cb5b123c93d70"
                    data-form-type="radio"
                    data-kwimpalastatus="alive"
                    data-kwimpalaid="1721660133618-11"
                  />
                  <label className="form-check-label" htmlFor="credit">
                    Credit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                    data-dashlane-rid="9443dc87f0b4e9b5"
                    data-form-type="radio"
                    data-kwimpalastatus="alive"
                    data-kwimpalaid="1721660133618-12"
                  />
                  <label className="form-check-label" htmlFor="debit">
                    Debit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                    data-dashlane-rid="ac423a1e62545f69"
                    data-form-type="radio"
                    data-kwimpalastatus="alive"
                    data-kwimpalaid="1721660133618-13"
                  />
                  <label className="form-check-label" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
              </div>

              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">
                    Name on card
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder=""
                    required=""
                    data-dashlane-rid="ca4772c1871a9269"
                    data-form-type="ccname"
                    data-kwimpalastatus="alive"
                    data-kwimpalaid="1721660133618-14"
                  />
                  <small className="text-body-secondary">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder=""
                    required=""
                    data-dashlane-rid="64fdfb0222e1c08a"
                    data-form-type="ccnumber"
                    data-kwimpalastatus="alive"
                    data-kwimpalaid="1721660133618-15"
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">
                    Expiration
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required=""
                    data-dashlane-rid="b317a304fd00dd96"
                    data-form-type="ccexp"
                    data-kwimpalastatus="alive"
                    data-kwimpalaid="1721660133618-16"
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required=""
                    data-dashlane-rid="145618c57a65b9d7"
                    data-form-type="cccvv"
                    data-kwimpalastatus="alive"
                    data-kwimpalaid="1721660133618-17"
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>

              <hr className="my-4" />

              <button
                className="w-100 btn btn-primary btn-lg"
                type="submit"
                data-dashlane-rid="8bbf8d7c9421b3d8"
                data-form-type="action"
              >
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
