import { fireEvent, render, screen } from "@testing-library/react";
import ContextAppComponent from "../../Context";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ContentIndex } from "../ContentIndex";
import { TicketsPage } from "../../Pages/TicketsPage";
import { NavBar } from ".";
import { NotesPage } from "../../Pages/NotesPage";

test("Should navigate to /home when clicking the home navbar button", async () => {
    const initialRoute = "/tickets";
    render(
        <ContextAppComponent>
            <MemoryRouter initialEntries={[initialRoute]}>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ContentIndex />} />
                    <Route path="/tickets" element={<TicketsPage />} />
                </Routes>
            </MemoryRouter>
        </ContextAppComponent>
    );

    const button = screen.getByText(/Home/i);
    fireEvent.click(button);
    
    await expect(screen.getByText(/Sail the tide of productivity with Sinapsify./i)).toBeInTheDocument();
});  

test("Should navigate to the new ticket page when clicking the new ticket navbar button", async () => {
    const initialRoute = "/";
    render(
        <ContextAppComponent>
            <MemoryRouter initialEntries={[initialRoute]}>
                <Routes>
                    <Route path="/" element={<NavBar />} />
                    <Route path="/tickets" element={<TicketsPage />} />
                </Routes>
            </MemoryRouter>
        </ContextAppComponent>
    );

    const button = screen.getByText(/New ticket/i);
    fireEvent.click(button);

    await expect(screen.getByText(/Create a ticket for your project./i)).toBeInTheDocument();
});  

test("Should navigate to /tickets and display the list of created tickets", async () => {
    const initialRoute = "/";
    render(
        <ContextAppComponent>
            <MemoryRouter initialEntries={[initialRoute]}>
                <Routes>
                    <Route path="/" element={<NavBar />} />
                    <Route path="/tickets" element={<TicketsPage />} />
                </Routes>
            </MemoryRouter>
        </ContextAppComponent>
    );

    const button = screen.getByText("Tickets");
    fireEvent.click(button);

    await expect(screen.getByText(/Last tickets/i)).toBeInTheDocument();
});  

test("Should navigate to /notes and display the list of created notes", async () => {
    const initialRoute = "/";
    render(
        <ContextAppComponent>
            <MemoryRouter initialEntries={[initialRoute]}>
                <Routes>
                    <Route path="/" element={<NavBar />} />
                    <Route path="/notes" element={<NotesPage />} />
                </Routes>
            </MemoryRouter>
        </ContextAppComponent>
    );

    const button = screen.getByText("Create a note");
    fireEvent.click(button);

    await expect(screen.getByText(/Recent notes/i)).toBeInTheDocument();
}); 