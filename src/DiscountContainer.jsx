import "./DiscountContainer.css";
function DiscountContainer() {
  return (
    <>
      <div id="discount-container">
        <p id="discount-heading">How does it work</p>
        <div id="discount-box">
          <div className="left-line">
            <img src="/icons/discount-icon.svg" alt="discount-icon" />
            <p className="discount-text">
              Daily <br />
              Discounts
            </p>
          </div>
          <div className="left-line">
            <img src="/icons/location-icon.svg" alt="location-icon" />
            <span className="discount-text">
              Live <br />
              Tracking
            </span>
          </div>
          <div className="left-line">
            <img src="/icons/time-icon.svg" alt="time-icon" />
            <span className="discount-text">
              Quick <br />
              Delivery
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiscountContainer;
