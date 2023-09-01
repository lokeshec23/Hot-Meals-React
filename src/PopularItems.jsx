import "./PopularItem.css";
function PopularItem() {
  return (
    <>
      {/* <!-- popular items --> */}
      <div id="popular-items-container">
        <div>
          <p id="heading">Popular items</p>
        </div>

        <div className="row">
          {/* <!-- 1 --> */}
          <div className="col-4">
            <img src="/images/murukku.png" alt="murukku" />
            <p>Murukku</p>
            <button>Order Now</button>
          </div>

          {/* <!-- 2 --> */}
          <div className="col-4">
            <img src="/images/paniyaram.png" alt="paniyaram" />
            <p>Paniyaram</p>
            <button>Order Now</button>
          </div>
          {/* <!-- 3 --> */}
          <div className="col-4">
            <img src="/images/seeval-murukku.png" alt="seeval=seeval-murukku" />
            <p>Seeval Murukku</p>
            <button>Order Now</button>
          </div>
          {/* <!-- 4 --> */}
          <div className="col-4">
            <img src="/images/mixture.png" alt="mixture" />
            <p>Mixture</p>
            <button>Order Now</button>
          </div>
          {/* <!-- 5 --> */}
          <div className="col-4">
            <img src="/images/veg-soup.png" alt="veg sopu" />
            <p>Veg Soup</p>
            <button>Order Now</button>
          </div>
        </div>

        <div className="row mt-5">
          {/* <!-- 6 --> */}
          <div className="col-4">
            <img src="/images/gulab-jamun.png" alt="Gulab jamun" />
            <p>Gulab Jamun</p>
            <button>Order Now</button>
          </div>

          {/* <!-- 7 --> */}
          <div className="col-4">
            <img
              src="/images/porivellangai-urudai.png"
              alt="porivellangai-urudai"
            />
            <p>Porivellangai Urudai</p>
            <button>Order Now</button>
          </div>

          {/* <!-- 8 --> */}
          <div className="col-4">
            <img src="/images/jangri.png" alt="jangri" />
            <p>Jangri</p>
            <button>Order Now</button>
          </div>
          {/* <!-- 9 --> */}
          <div className="col-4">
            <img src="/images/lattu.png" alt="lattu" />
            <p>Lattu</p>
            <button>Order Now</button>
          </div>
          {/* <!-- 10 --> */}
          <div className="col-4">
            <img src="/images/halwa.png" alt="halwa" />
            <p>Halwa</p>
            <button>Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularItem;
