import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ContextAppComponent, { ITicket } from "../../../Context";
import { Ticket } from ".";
import { TicketsPage } from "../../../Pages/TicketsPage";
import { TicketPage } from "../../../Pages/TicketPage";

const ticket: ITicket = {
    idTicket: "ajsn1kasd",
    titleTicket: "Urgent Fix Needed",
    assigneeTicket: "John Smith",
    priorityTicket: "High",
};

test('Should click on the ticket name and navigate to the specific ticket page', async () => {
    const initialRoute = "/tickets";
    render(
        <ContextAppComponent>
            <MemoryRouter initialEntries={[initialRoute]}>
                <Routes>
                    <Route path="/tickets" element={<Ticket ticket={ticket} />} />
                    <Route path="/ticket/ajsn1kasd" element={<TicketPage />} />
                </Routes>
            </MemoryRouter>
        </ContextAppComponent>
    );

    const titleTicket = screen.getByTestId('ticket-title');

    fireEvent.click(titleTicket);

    expect(screen.getByText(/Urgent Fix Needed/i)).toBeInTheDocument();
});


test("Should remove the ticket from the list when the delete button is clicked", async () => {
    render(
        <ContextAppComponent>
            <MemoryRouter>
                <TicketsPage />
            </MemoryRouter>
        </ContextAppComponent>
    );

    const deleteButton = screen.getAllByTestId("delete-button")[0];
    fireEvent.click(deleteButton);

    await expect(screen.queryByText("Urgent Fix Needed")).not.toBeInTheDocument();
});

test("Should open the edit form when the edit button is clicked", async () => {
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <Ticket ticket={ticket} />
            </BrowserRouter>
        </ContextAppComponent>
    );

    const editButton = screen.getByTestId("edit-button");
    fireEvent.click(editButton);

    const titleForm = screen.getByText("Edit the ticket");
    await expect(titleForm).toBeInTheDocument();
});


test("Should load the ticket data into the form inputs and display 'Edit ticket' button", async () => {
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <Ticket ticket={ticket} />
            </BrowserRouter>
        </ContextAppComponent>
    );

    const editButton = screen.getByTestId("edit-button");
    fireEvent.click(editButton);

    const titleInput = screen.getByPlaceholderText("Title") as HTMLInputElement;
    const assigneeInput = screen.getByPlaceholderText("Assignee") as HTMLInputElement;
    const priorityInput = screen.getByPlaceholderText("Priority") as HTMLInputElement;
    const editButtonForm = screen.getByText("Edit ticket");

    expect(titleInput.value).toBe('Urgent Fix Needed');
    expect(assigneeInput.value).toBe('John Smith');
    expect(priorityInput.value).toBe('High');

    expect(editButtonForm).toBeInTheDocument();;
});


test("Should edit the ticket with the changes made when clicking the edit button", async () => {
    const initialRoute = "/tickets";

    render(
        <ContextAppComponent>
            <MemoryRouter initialEntries={[initialRoute]}>
                <Routes>
                    <Route path="/tickets" element={<TicketsPage />} />
                </Routes>
            </MemoryRouter>
        </ContextAppComponent>
    );

    const editButton = screen.queryAllByTestId("edit-button")[0];
    fireEvent.click(editButton);

    const titleInput = screen.getByPlaceholderText("Title");
    const assigneeInput = screen.getByPlaceholderText("Assignee");
    const priorityInput = screen.getByPlaceholderText("Priority");
    
    fireEvent.change(titleInput, { target: { value: "Create framework" } });
    fireEvent.change(assigneeInput, { target: { value: "Jhon Doe" } });
    fireEvent.change(priorityInput, { target: { value: "Important" } });

    const editButtonForm = screen.getByText("Edit ticket");
    fireEvent.click(editButtonForm);

    await expect(screen.getAllByText(/Create framework/i)[0]).toBeInTheDocument();
    await expect(screen.getAllByText(/Create framework/i)[1]).toBeInTheDocument();
    await expect(screen.getByText(/Jhon Doe/i)).toBeInTheDocument();
    await expect(screen.getByText(/Important/i)).toBeInTheDocument();
}); 