import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("calculates the sum of two numbers", () => {
    const { getByLabelText, getByText, getByRole } = render(<App />);

    const firstNumberInput = screen.getByLabelText("put a first number");
    const secondNumberInput = screen.getByLabelText("put a second number");
    const addButton = screen.getByRole("button", { name: "+" });

    fireEvent.change(firstNumberInput, { target: { value: "5" } });
    fireEvent.change(secondNumberInput, { target: { value: "10" } });
    fireEvent.click(addButton);

    expect(screen.getByText("result: 15")).toBeInTheDocument();
});

test("shows error when trying to divide by zero", () => {
    const { getByLabelText, getByText, getByRole } = render(<App />);

    const firstNumberInput = screen.getByLabelText("put a first number");
    const secondNumberInput = screen.getByLabelText("put a second number");
    const divideButton = screen.getByRole("button", { name: "/" });

    fireEvent.change(firstNumberInput, { target: { value: "5" } });
    fireEvent.change(secondNumberInput, { target: { value: "0" } });
    fireEvent.click(divideButton);

    expect(screen.getByText("Error: Cannot be divided by zero")).toBeInTheDocument();
});
