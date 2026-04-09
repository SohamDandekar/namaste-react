import { render, screen } from "@testing-library/react";
import RestaurantCard, { withVegLabel } from "../components/RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMockData.json";

it("Should render Restaurant Card Component with mock props data", () => {
   render(<RestaurantCard resData={MOCK_DATA}/>);
   
   expect(screen.getByText("Green Bites")).toBeInTheDocument();

});

it("Should render Restaurant Card Component with mock props data and Veg Label", () => {
  
   const RestaurantCardVeg = withVegLabel();
   
   render(<RestaurantCardVeg resData={MOCK_DATA}/>);
   
   expect(screen.getByText("Green Bites")).toBeInTheDocument();

});