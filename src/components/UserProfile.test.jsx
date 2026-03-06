import React from "react"
import {render, screen, waitFor} from "@testing-library/react"
import UserProfile from "./UserProfile"
import {describe,it,expect, beforeEach,vi, afterEach} from "vitest"
import "@testing-library/jest-dom/vitest"

describe("UserProfile", ()=>{

    beforeEach(()=>{
        global.fetch = vi.fn()
    })

    afterEach(()=>{
        vi.resetAllMocks();
    })

   it("fetches and displays user data", async () => {
    global.fetch.mockResolvedValueOnce({
        json: async () => ({id:4 , name:"John", email: "john@gmail.com"})
    })
        render(<UserProfile userId={4} />);
        
        await waitFor(()=>{

            expect(screen.getByRole("heading",{name:/John/i})).toBeInTheDocument();
            expect(screen.getByRole("paragraph",{email:/john@gmail.com/i})).toBeInTheDocument();
        })
   })
})