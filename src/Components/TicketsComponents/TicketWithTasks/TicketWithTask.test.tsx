import { fireEvent, render, screen } from "@testing-library/react";
import { TicketWithTasks } from ".";
import ContextAppComponent from "../../../Context";
import { ITicket } from "../../../Context";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Ticket } from "../Ticket";
import { Tasks } from "../TaskComponent/Tasks";

const ticket: ITicket = {
    idTicket: "ajsn1kasd",
    titleTicket: "Urgent Fix Needed",
    assigneeTicket: "John Smith",
    priorityTicket: "High",
};

test("Should display a new task form.", async () => {
    const initialRoute = "/tickets";
    render(
        <ContextAppComponent>
            <MemoryRouter initialEntries={[initialRoute]}>
                <Routes>
                    <Route
                        path="/tickets"
                        element={<Ticket ticket={ticket} />}
                    />
                    <Route
                        path="/ticket/ajsn1kasd"
                        element={<TicketWithTasks ticket={ticket} />}
                    />
                </Routes>
            </MemoryRouter>
        </ContextAppComponent>
    );

    const Title = screen.getByTestId("ticket-title");

    fireEvent.click(Title);

    const addIcon = screen.getByTestId("add-icon");

    fireEvent.click(addIcon);

    const titleInput = screen.getByPlaceholderText("Title");
    const descriptionInput = screen.getByPlaceholderText("Description");

    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
});

test("Should display a new task when the input is sent.", async () => {
    const initialRoute = "/tickets";
    render(
        <ContextAppComponent>
            <MemoryRouter initialEntries={[initialRoute]}>
                <Routes>
                    <Route
                        path="/tickets"
                        element={<Ticket ticket={ticket} />}
                    />
                    <Route
                        path="/ticket/ajsn1kasd"
                        element={<TicketWithTasks ticket={ticket} />}
                    />
                </Routes>
            </MemoryRouter>
            <Tasks ticketId={ticket.idTicket} />
        </ContextAppComponent>
    );

    const Title = screen.getByTestId("ticket-title");

    fireEvent.click(Title);

    const addIcon = screen.getByTestId("add-icon");

    fireEvent.click(addIcon);

    const titleInput = screen.getByPlaceholderText("Title");
    const descriptionInput = screen.getByPlaceholderText("Description");

    fireEvent.change(titleInput, { target: { value: "Important bug" } });
    fireEvent.change(descriptionInput, {
        target: { value: "Fix the bug in the login form" },
    });

    const button = await screen.findByTestId("create-task-button");
    expect(button).toBeInTheDocument();
});
