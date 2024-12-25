import { fireEvent, render, screen } from "@testing-library/react";
import ContextAppComponent from "../../../Context";
import { FormTickets } from ".";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Tickets } from "../Tickets";

test('Should return to the tickets list view when clicking "Return to tickets"', async () => {
    const initialRoute = "/tickets";
    render(
        <ContextAppComponent>
            <MemoryRouter initialEntries={[initialRoute]}>
                <Routes>
                    <Route
                        path="/tickets"
                        element={
                            <>
                                <FormTickets />

                                <Tickets />
                            </>
                        }
                    />
                </Routes>
            </MemoryRouter>
        </ContextAppComponent>
    );

    const button = screen.getByText(/Return to tickets/i);
    fireEvent.click(button);

    const text = screen.queryByText(/Last tickets/i);

    await expect(text).toBeInTheDocument();
});

test('Should show the "Create ticket" button when all inputs have text', async () => {
    render(
        <ContextAppComponent>
            <FormTickets />
        </ContextAppComponent>
    );

    const titleInput = screen.getByPlaceholderText("Title");
    const assigneeInput = screen.getByPlaceholderText("Assignee");
    const priorityInput = screen.getByPlaceholderText("Priority");

    fireEvent.change(titleInput, { target: { value: "Important bug" } });
    fireEvent.change(assigneeInput, { target: { value: "Nico Rojas" } });
    fireEvent.change(priorityInput, { target: { value: "Very important" } });

    const button = await screen.findByTestId("create-ticket-button");

    expect(button).toBeInTheDocument();
});

test("Should display the ticket when the form is submitted", async () => {
    const initialRoute = "/tickets";
    render(
        <ContextAppComponent>
            <MemoryRouter initialEntries={[initialRoute]}>
                <Routes>
                    <Route
                        path="/tickets"
                        element={
                            <>
                                <FormTickets />

                                <Tickets />
                            </>
                        }
                    />
                </Routes>
            </MemoryRouter>
        </ContextAppComponent>
    );

    const titleInput = screen.getByPlaceholderText("Title");
    const assigneeInput = screen.getByPlaceholderText("Assignee");
    const priorityInput = screen.getByPlaceholderText("Priority");

    fireEvent.change(titleInput, { target: { value: "Important bug" } });
    fireEvent.change(assigneeInput, { target: { value: "Nico Rojas" } });
    fireEvent.change(priorityInput, { target: { value: "Very important" } });

    const button = await screen.findByTestId("create-ticket-button");
    fireEvent.click(button);

    await expect(screen.getAllByText(/Important bug/i)[0]).toBeInTheDocument();
    await expect(screen.getAllByText(/Important bug/i)[1]).toBeInTheDocument();
    await expect(screen.getByText(/Nico Rojas/i)).toBeInTheDocument();
    await expect(screen.getByText(/Very important/i)).toBeInTheDocument();
});
