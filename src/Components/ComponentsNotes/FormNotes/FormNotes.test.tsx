import { fireEvent, render, screen } from "@testing-library/react";
import ContextAppComponent from "../../../Context";
import { FormNote } from ".";
import { BrowserRouter } from "react-router-dom";

test("The form are in the document.", () => {
    render(
        <ContextAppComponent>
            <BrowserRouter>
            <FormNote/>
            </BrowserRouter>
        </ContextAppComponent>
    );
    const form = screen.getByTestId("note-form");
    expect(form).toBeInTheDocument;
});

test("The title input works.", () => {
    render(
        <ContextAppComponent>
            <BrowserRouter>
            <FormNote/>
            </BrowserRouter>
        </ContextAppComponent>
    );
    const titleInput = screen.getByPlaceholderText("Title");
    fireEvent.change(titleInput, { target: { value: "My first note." } });

    const newInput = screen.getByDisplayValue("My first note.");

    expect(newInput).toBeInTheDocument;
});


test("The Create note button works.", () => {
    const mockIncrement = jest.fn();
    jest.mock("./", () => ({ handleSubmit: mockIncrement }));
    render(
        <ContextAppComponent>
            <BrowserRouter>
            <FormNote/>
            </BrowserRouter>
        </ContextAppComponent>
    );
    const buttonNotes = screen.getByTestId("button-form-notes");
    fireEvent.click(buttonNotes);
    expect(buttonNotes).toBeInTheDocument;
    expect(buttonNotes).toHaveBeenCalled;
});