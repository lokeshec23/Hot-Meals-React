import "./Footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div id="main-footer">
          <div className="footer-cols">
            {/* <!-- Footer Links - Column 1 --> */}
            <ul>
              <li>Company</li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
            {/* <!-- Footer Links - Column 2 --> */}
            <ul>
              <li>Contact</li>
              <li>
                <a href="#">Help & Support</a>
              </li>
              <li>
                <a href="#">Partner with us</a>
              </li>
              <li>
                <a href="#">Ride with us</a>
              </li>
            </ul>
            {/* <!-- Footer Links - Column 3 --> */}
            <ul>
              <li>Legal</li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Refund & Cancellation</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
            {/* <!-- Footer Links - Column 4 --> */}
            <div id="left">
              <p id="follow-us">FOLLOW US</p>
              <div id="media-link">
                <span>
                  <i className="fa-brands fa-instagram"></i>
                </span>
                <span>
                  <i className="fa-brands fa-facebook"></i>
                </span>
                <span>
                  <i className="fa-brands fa-twitter"></i>
                </span>
              </div>
              <p id="footer-text">Receive exclusive offers in your mailbox</p>
              <div id="footer-form">
                <div id="icon-link">
                  <i className="fa-solid fa-envelope"></i>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Your email"
                  />
                </div>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div id="sub-footer">
          <p>All rigth Reserved &copy;</p>
          <p>
            Made with 💛 by <strong>SLK</strong>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
