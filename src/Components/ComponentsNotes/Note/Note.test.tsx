import { fireEvent, render, screen } from "@testing-library/react";
import ContextAppComponent, { INote } from "../../../Context";
import { Note } from ".";
import { BrowserRouter } from "react-router-dom";

const noteTest: INote = {
    idNote:"testNote",
    titleNote:"Test Note",
};

test("The note are in the document.", () => {
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <Note note={noteTest} assignee="James" number={1}/>
            </BrowserRouter>
        </ContextAppComponent>
    );
    const note = screen.getByTestId("note");
    expect(note).toBeInTheDocument;
});

test("The note texts are in the document.", () => {
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <Note note={noteTest} assignee="James" number={1}/>
            </BrowserRouter>
        </ContextAppComponent>
    );
    const titleNote = screen.getByText("Test Note");
    expect(titleNote).toBeInTheDocument;
});

test("The button in the title works.", () => {
    const mockIncrement = jest.fn();
    jest.mock("./", () => ({ createNote: mockIncrement }));
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <Note note={noteTest} assignee="James" number={1}/>
            </BrowserRouter>
        </ContextAppComponent>
    );
    const titleButton = screen.getByTestId("title-note");
    fireEvent.click(titleButton);
    expect(titleButton).toBeInTheDocument;
    expect(titleButton).toHaveBeenCalled;
});

test("The delete button works and are in the document.", () => {
    const mockIncrement = jest.fn();
    jest.mock("./", () => ({ handleDelete: mockIncrement }));
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <Note note={noteTest} assignee="James" number={1}/>
            </BrowserRouter>
        </ContextAppComponent>
    );
    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);
    expect(deleteButton).toBeInTheDocument;
    expect(deleteButton).toHaveBeenCalled;
});