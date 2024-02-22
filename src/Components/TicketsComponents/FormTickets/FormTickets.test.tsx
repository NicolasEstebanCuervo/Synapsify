import { fireEvent, render, screen } from "@testing-library/react";
import ContextAppComponent from "../../../Context";
import { FormTickets } from ".";

test("The form and the form text are in the document.", () => {
    render(
        <ContextAppComponent>
            <FormTickets text="Create a Ticket" />
        </ContextAppComponent>
    );
    const form = screen.getByTestId("ticket-form");
    const textForm = screen.getByText("Create a Ticket");

    expect(form).toBeInTheDocument;
    expect(textForm).toBeInTheDocument;
});


test("The assignee input works.", () => {
    render(
        <ContextAppComponent>
            <FormTickets text="Create a Ticket" />
        </ContextAppComponent>
    );
    const assigneeInput = screen.getByPlaceholderText("Assignee");
    fireEvent.change(assigneeInput, { target: { value: "Nicolas Rojas" } });

    const newInput = screen.getByDisplayValue("Nicolas Rojas");

    expect(newInput).toBeInTheDocument;
});

test("The priority input works.", () => {
    render(
        <ContextAppComponent>
            <FormTickets text="Create a Ticket" />
        </ContextAppComponent>
    );
    const priorityInput = screen.getByPlaceholderText("Priority");
    fireEvent.change(priorityInput, { target: { value: "Medium" } });

    const newInput = screen.getByDisplayValue("Medium");

    expect(newInput).toBeInTheDocument;
});

test("The Create ticket button works.", () => {
    const mockIncrement = jest.fn();
    jest.mock("./", () => ({ toggleNewTicketFnc: mockIncrement }));
    render(
        <ContextAppComponent>
            <FormTickets text="Create a Ticket" />
        </ContextAppComponent>
    );
    const buttonTicket = screen.getByText("Create a ticket");
    fireEvent.click(buttonTicket);
    expect(buttonTicket).toBeInTheDocument;
    expect(buttonTicket).toHaveBeenCalled;
});
