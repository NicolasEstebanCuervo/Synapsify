import { fireEvent, render, screen } from "@testing-library/react";
import ContextAppComponent, { ITicket } from "../../../Context";
import { Ticket } from ".";
import { BrowserRouter } from "react-router-dom";

const ticketTest: ITicket = {
    idTicket: "testTicket",
    titleTicket: "Ticket test",
    assigneeTicket: "Nicolas Rojas",
    priorityTicket: "Low",
};

test("The ticket are in the document.", () => {
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <Ticket ticket={ticketTest} />
            </BrowserRouter>
        </ContextAppComponent>
    );
    const ticket = screen.getByTestId("ticket");
    expect(ticket).toBeInTheDocument;
});

test("The ticket texts are in the document.", () => {
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <Ticket ticket={ticketTest} />
            </BrowserRouter>
        </ContextAppComponent>
    );
    const titleTicket = screen.getByText("Ticket test");
    expect(titleTicket).toBeInTheDocument;
    const assigneeTicket = screen.getByText("Nicolas Rojas");
    expect(assigneeTicket).toBeInTheDocument;
    const priorityTicket = screen.getByText("Low");
    expect(priorityTicket).toBeInTheDocument;
});

test("The button in the title works.", () => {
    const mockIncrement = jest.fn();
    jest.mock("./", () => ({ createTicketPage: mockIncrement }));
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <Ticket ticket={ticketTest} />
            </BrowserRouter>
        </ContextAppComponent>
    );
    const titleButton = screen.getByText("Ticket test");
    fireEvent.click(titleButton);
    expect(titleButton).toBeInTheDocument;
    expect(titleButton).toHaveBeenCalled;
});

test("The edit button works and are in the document.", () => {
    const mockIncrement = jest.fn();
    jest.mock("./", () => ({ handleEdit: mockIncrement }));
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <Ticket ticket={ticketTest} />
            </BrowserRouter>
        </ContextAppComponent>
    );
    const editButton = screen.getByTestId("edit-icon");
    fireEvent.click(editButton);
    expect(editButton).toBeInTheDocument;
    expect(editButton).toHaveBeenCalled;
});

test("The delete button works and are in the document.", () => {
    const mockIncrement = jest.fn();
    jest.mock("./", () => ({ onDeleteTicket: mockIncrement }));
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <Ticket ticket={ticketTest} />
            </BrowserRouter>
        </ContextAppComponent>
    );
    const deleteButton = screen.getByTestId("exit-icon");
    fireEvent.click(deleteButton);
    expect(deleteButton).toBeInTheDocument;
    expect(deleteButton).toHaveBeenCalled;
});