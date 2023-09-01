import "./FoodSearchContainer.css";
function FoodSearchContainer() {
  return (
    <>
      <div id="food-search-container">
        <p id="food-text">Search by Food</p>
        <div id="search-food-container">
          {/* <!-- 1 --> */}
          <div>
            <img src="/images/dosa.png" alt="dosa" />
            <p>Dosa</p>
          </div>

          {/* <!-- 2 --> */}
          <div>
            <img src="/images/aappam.png" alt="aappm" />
            <p>Aapppm</p>
          </div>

          {/* <!-- 3 --> */}
          <div>
            <img src="/images/puttu.png" alt="puttu" />
            <p>Puttu</p>
          </div>

          {/* <!-- 4 --> */}
          <div>
            <img src="/images/idiyappam.png" alt="idiyappam" />
            <p>Idiyappam</p>
          </div>

          {/* <!-- 5 --> */}
          <div>
            <img src="/images/pongal.png" alt="pongal" />
            <p>Pongal</p>
          </div>

          {/* <!-- 6 --> */}
          <div>
            <img src="/images/veg rice.png" alt="veg rice" />
            <p>Veg Rice</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodSearchContainer;
