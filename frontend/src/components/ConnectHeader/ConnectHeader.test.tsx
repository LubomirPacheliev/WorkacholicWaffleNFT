/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, getByText, fireEvent, screen } from "@testing-library/react";
import ConnectHeader from './ConnectHeader';

test("Should be rendering properly", () => {
    render(<ConnectHeader />);
});

test("Solana is NOT in window", () => { // known bug
    // @ts-ignore
    const solana = window.solana;
    expect(solana).toBe(undefined);
});

test("Btn requests connection on click", () => {
    render(<ConnectHeader />);
    const btn = document.createElement('button');
    const connect = screen.getByText('connect');
    fireEvent.click(connect);
});