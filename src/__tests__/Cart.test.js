import { act, fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../utils/appStore"
import Header from "../components/Header"
import RestaurantMenu from "../components/RestaurantMenu"
import Cart from "../components/Cart"
import MOCK_DATA from "../mocks/resMenuMockData.json"


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should test add to cart functionality", async() => {
    await act(async () => {
        render(<BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
                <Cart/>
            </Provider>
        </BrowserRouter>);
    });
    
    fireEvent.click(screen.getByText("Signature Burgers (3)"));

    expect(screen.getAllByTestId("foodItem").length).toBe(3);

    fireEvent.click(screen.getAllByRole("button", {name: "Add +"})[0]);

    expect(screen.getAllByTestId("foodItem").length).toBe(4);

    fireEvent.click(screen.getAllByRole("button", {name: "Add +"})[1]);

    expect(screen.getAllByTestId("foodItem").length).toBe(5);

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

    expect(screen.getAllByTestId("foodItem").length).toBe(3);
    
})