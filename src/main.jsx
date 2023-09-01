import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import YellowComponent from "./YellowComponent";
import ShowCaseFood from "./ShowCaseFood";
import DiscountContainer from "./DiscountContainer";
import FoodSearchContainer from "./FoodSearchContainer";
import BestDealsContainer from "./BestDealsContainer";
import PopularItem from "./PopularItems";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <YellowComponent />
    <ShowCaseFood />
    <DiscountContainer />
    <FoodSearchContainer />
    <BestDealsContainer />
    <PopularItem />
  </React.StrictMode>
);
