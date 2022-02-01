import React from "react";
import { render, getByText, fireEvent } from "@testing-library/react";
import ConnectHeader from './ConnectHeader';

test("Should be rendering properly", () => {
    render(<ConnectHeader />);
});
