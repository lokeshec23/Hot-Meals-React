import "./YellowContainer.css";
function YellowContainer() {
  return (
    <>
      <div id="yellow-container">
        <div id="text-container">
          <p id="main-text">Look at your fav meals</p>
          <p id="sub-text">
            Within a few clicks, find meals that are accessible near you
          </p>

          <div id="tab">
            <span id="fa-motorcycle">
              <i
                className="fa-solid fa-motorcycle"
                style={{ color: "#f17228", marginRight: "5" }}
              ></i>
              Delivery
            </span>
            <span id="fa-bag-shopping">
              <i
                className="fa-solid fa-bag-shopping"
                style={{ color: "#757575", marginRight: "5" }}
              ></i>
              Pickup
            </span>
          </div>
          <div id="address-form-container">
            <div id="box">
              <i
                className="fa-solid fa-location-dot"
                style={{ color: "#ff7474" }}
              ></i>
              <input type="text" placeholder="Enter Your Address" />
            </div>
            <button>
              <span>
                <i
                  className="fa-solid fa-magnifying-glass"
                  style={{ color: "#fff" }}
                ></i>
              </span>
              Find Food
            </button>
          </div>
        </div>
        <div>
          <img
            id="main-food"
            src="/images/main-food.png"
            width="500px"
            alt="Main food"
          />
        </div>
      </div>
    </>
  );
}

export default YellowContainer;
