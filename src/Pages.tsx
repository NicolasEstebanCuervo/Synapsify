import styled from "@emotion/styled";
import * as color from "./Theme";
import { Outlet } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { useContextFnc } from "./Context";
import { FormTickets } from "./Components/TicketsComponents/FormTickets";
import { Tickets } from "./Components/TicketsComponents/Tickets";
import { ContentIndex } from "./Components/ContentIndex";
import { TicketWithTasks } from "./Components/TicketsComponents/TicketWithTasks";
import { FormNotes } from "./Components/NotesComponents/FormNotes";
import { NoteItem } from "./Components/NotesComponents/NoteItem";

export const IndexPage = () => {
    return <ContentIndex />;
};

export const TicketsPage = () => {
    const { tickets, newTicket, idTicket } = useContextFnc();

    return (
        <>
            {tickets.length === 0 || newTicket ? (
                <FormTickets
                    title="Create ticket"
                    subtitle="Create a ticket for your project."
                />
            ) : (
                <>
                    <Tickets idFilter={idTicket} />
                </>
            )}
        </>
    );
};

export const TicketPage = () => {
    const { ticket } = useContextFnc();
    return <TicketWithTasks ticket={ticket} />;
};

export const NotesPage = () => {
    return <FormNotes />;
};

export const NotePage = () => {
    return <NoteItem />;
};

export const Layout = () => {
    return (
        <>
            <NavBar />
            <Container>
                <Outlet />
            </Container>
        </>
    );
};

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    padding-top: 1rem;
    min-width: 80%;
    min-height: 100vh;
    background: ${color.primaryColor};
`;
