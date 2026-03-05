import React from "react"
import {render, screen} from "@testing-library/react"
import Greeting from "./Greeting"
import {describe,it,expect} from "vitest"
import "@testing-library/jest-dom/vitest"

describe("Greeting", ()=>{
    it("renders the greeting with default name", ()=>{
        render(<Greeting />);
        expect(screen.getByText("Hello,World!")).toBeInTheDocument();
    })
    it("renders the greeting with a name", ()=>{
        render(<Greeting name="Arbaz" />);
        expect(screen.getByText("Hello,Arbaz!")).toBeInTheDocument();
    })
})