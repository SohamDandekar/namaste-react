import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../utils/appStore"
import Header from "../components/Header"
import "@testing-library/jest-dom";

it("Should render Header component with Login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}><Header/></Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    expect(loginButton).toBeInTheDocument();
});

it("Should render Header component with 🛒 (0 items)", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}><Header/></Provider>
        </BrowserRouter>
    );

    const cart = screen.getByText("🛒 (0 items)");

    expect(cart).toBeInTheDocument();
});

it("Should render Header component with items text", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}><Header/></Provider>
        </BrowserRouter>
    );

    const cart = screen.getByText(/items/);

    expect(cart).toBeInTheDocument();
});

it("Should Login button to Logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}><Header/></Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
});