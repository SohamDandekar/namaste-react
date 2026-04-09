import { render, screen } from "@testing-library/react";
import About from "../components/About";
import "@testing-library/jest-dom";

describe("About Us Component Test Cases", () => {
    it("Should load About Us Component", () => {
        render(<About/>);

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
    });

    it("Should contain button text in About Us Component", () => {
        render(<About/>);

        const button = screen.getByText("Submit");

        expect(button).toBeInTheDocument();
    });

    test("Should contain placeholder text in About Us Component", () => {
        render(<About/>);

        const placeholder = screen.getByPlaceholderText("name");

        expect(placeholder).toBeInTheDocument();
    });

    test("Should contain 2 input boxes in About Us Component", () => {
        render(<About/>);

        const inputBoxes = screen.getAllByRole("textbox");

        expect(inputBoxes.length).toBe(2);
    });
});