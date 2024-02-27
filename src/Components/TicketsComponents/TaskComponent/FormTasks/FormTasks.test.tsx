import { fireEvent, render, screen } from "@testing-library/react";
import ContextAppComponent from "../../../../Context";
import { FormTasks } from ".";

const idTicketTest = "1jasd1"

test("The form and the form text are in the document.", () => {
    render(
        <ContextAppComponent>
            <FormTasks ticketId={idTicketTest} text="Create a new task" />
        </ContextAppComponent>
    );
    const form = screen.getByTestId("task-form");
    const textForm = screen.getByText("Create a new task");

    expect(form).toBeInTheDocument;
    expect(textForm).toBeInTheDocument;
});

test("The title input works.", () => {
    render(
        <ContextAppComponent>
            <FormTasks ticketId={idTicketTest} text="Create a new task" />
        </ContextAppComponent>
    );
    const titleInput = screen.getByPlaceholderText("Title");
    fireEvent.change(titleInput, { target: { value: "Study github." } });

    const newInput = screen.getByDisplayValue("Study github.");

    expect(newInput).toBeInTheDocument;
});

test("The description input works.", () => {
    render(
        <ContextAppComponent>
            <FormTasks ticketId={idTicketTest} text="Create a new task" />
        </ContextAppComponent>
    );
    const descriptionInput = screen.getByPlaceholderText("Description");
    fireEvent.change(descriptionInput, { target: { value: "View a Github course." } });

    const newInput = screen.getByDisplayValue("View a Github course.");

    expect(newInput).toBeInTheDocument;
});

test("The Create task button works.", () => {
    const mockIncrement = jest.fn();
    jest.mock("./", () => ({ handleSubmit: mockIncrement }));
    render(
        <ContextAppComponent>
            <FormTasks ticketId={idTicketTest} text="Create a new task" />
        </ContextAppComponent>
    );
    const buttonTask = screen.getByText("Create a task");
    fireEvent.click(buttonTask);
    expect(buttonTask).toBeInTheDocument;
    expect(buttonTask).toHaveBeenCalled;
});
