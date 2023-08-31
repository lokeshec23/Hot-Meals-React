import "./Header.css";
function Header() {
  return (
    <>
      <header>
        <p id="heading">Hot meals</p>
        <p id="address">
          <strong>Deliver to: </strong>
          <span>
            <i
              className="fa-solid fa-location-dot"
              style={{ color: "#ffb329" }}
            ></i>
          </span>
          Current Location <strong>Ashok Nagar, Chennai-600013</strong>
        </p>
        <p>
          <span>
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ color: "#ffb30e" }}
            ></i>
          </span>
          <strong>Search Food</strong>
        </p>
        <button>
          <span>
            <i className="fa-solid fa-user" style={{ color: "#ffb30e" }}></i>
          </span>
          Login
        </button>
      </header>
    </>
  );
}

export default Header;
