import { fireEvent, render, screen, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resListData.json"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})


it("should test search functionality in Body component for spice text input", async () => {

    await act(async () => 
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    );

    const resCardBeforeSearch = screen.getAllByTestId("resCard");

    expect(resCardBeforeSearch.length).toBe(9);

    const searchInput = screen.getByTestId("searchBox");

    const searchBtn = screen.getByRole("button", {name: "Search"});

    fireEvent.change(searchInput, {target: {value: "spice"}});

    fireEvent.click(searchBtn);

    const resCardAfterSearch = screen.getAllByTestId("resCard");

    expect(resCardAfterSearch.length).toBe(2);
    
});

it("should filter Top Rated Restaurants", async () => {

    await act(async () => 
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    );

    const restaurantsBeforeFilter = screen.getAllByTestId("resCard");

    expect(restaurantsBeforeFilter.length).toBe(9);

    const TopRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});

    fireEvent.click(TopRatedBtn);

    const restaurantsCardAfterFilter = screen.getAllByTestId("resCard");

    expect(restaurantsCardAfterFilter.length).toBe(8);
    
});