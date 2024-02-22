import styled from "@emotion/styled";
import { NavBar } from "../../Components/NavBar";
import { FormTickets } from "../../Components/TicketsComponents/FormTickets";
import { useContextFnc } from "../../Context";
import { Tickets } from "../../Components/TicketsComponents/Tickets";
import * as color from "../../Theme"

export const Index = () => {
    const { tickets, newTicket, idTicket } = useContextFnc();

    return (
        <Container>
            {tickets.length === 0 || newTicket ? (
                <FormTickets text="Create a ticket" />
            ) : (
                <>
                    <NavBar />
                    <Tickets idFilter={idTicket} />
                </>
            )}
        </Container>
    );
};

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    min-width: 100%;
    min-height: 100vh;
    background: ${color.primaryColor};
`;
