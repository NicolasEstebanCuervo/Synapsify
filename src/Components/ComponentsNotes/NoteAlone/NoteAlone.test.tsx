import { render, screen } from "@testing-library/react";
import ContextAppComponent from "../../../Context";
import { NoteAlone } from ".";
import { BrowserRouter } from "react-router-dom";

test("The note alone are in the document.", () => {
    render(
        <ContextAppComponent>
            <BrowserRouter>
            <NoteAlone/>
            </BrowserRouter>
        </ContextAppComponent>
    );
    const form = screen.getByTestId("note-alone");
    expect(form).toBeInTheDocument;
});
