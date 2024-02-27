import { render, screen } from "@testing-library/react";
import ContextAppComponent from "../../../Context";
import { Notes } from ".";
import { BrowserRouter } from "react-router-dom";

test("The tasks are in the document.", () => {
    render(
        <ContextAppComponent>
            <BrowserRouter>
            <Notes/>
            </BrowserRouter>
        </ContextAppComponent>
    );
    const notes = screen.getByTestId("notes");

    expect(notes).toBeInTheDocument;
});
