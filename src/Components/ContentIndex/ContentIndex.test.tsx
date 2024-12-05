import { fireEvent, render, screen } from "@testing-library/react";
import ContextAppComponent from "../../Context";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ContentIndex } from "../ContentIndex";
import { TicketsPage } from "../../Pages/TicketsPage";
import { NotesPage } from "../../Pages/NotesPage";

test("Should navigate to /tickets when clicking the get rolling button", async () => {
    const initialRoute = "/";
    render(
        <ContextAppComponent>
            <MemoryRouter initialEntries={[initialRoute]}>
                <Routes>
                    <Route path="/" element={<ContentIndex />} />
                    <Route path="/tickets" element={<TicketsPage />} />
                </Routes>
            </MemoryRouter>
        </ContextAppComponent>
    );

    const button = screen.getByText(/Get Rolling!/i);
    fireEvent.click(button);
    
    await expect(screen.getByText(/Last tickets/i)).toBeInTheDocument();
});  

test("Should navigate to /tickets when clicking the make it happen! button", async () => {
    const initialRoute = "/";
    render(
        <ContextAppComponent>
            <MemoryRouter initialEntries={[initialRoute]}>
                <Routes>
                    <Route path="/" element={<ContentIndex />} />
                    <Route path="/tickets" element={<TicketsPage />} />
                </Routes>
            </MemoryRouter>
        </ContextAppComponent>
    );

    const button = screen.getByText(/Make It Happen!/i);
    fireEvent.click(button);
    
    await expect(screen.getByText(/Last tickets/i)).toBeInTheDocument();
});

test("Should navigate to /notes when clicking the write your story button", async () => {
    const initialRoute = "/";
    render(
        <ContextAppComponent>
            <MemoryRouter initialEntries={[initialRoute]}>
                <Routes>
                    <Route path="/" element={<ContentIndex />} />
                    <Route path="/notes" element={<NotesPage />} />
                </Routes>
            </MemoryRouter>
        </ContextAppComponent>
    );

    const button = screen.getByText(/Write Your Story!/i);
    fireEvent.click(button);
    
    await expect(screen.getByText(/Recent notes/i)).toBeInTheDocument();
});