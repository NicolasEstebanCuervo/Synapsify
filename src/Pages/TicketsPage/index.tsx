import styled from "@emotion/styled";
import { FormTickets } from "../../Components/TicketsComponents/FormTickets";
import { useContextFnc } from "../../Context";
import { Tickets } from "../../Components/TicketsComponents/Tickets";
import * as color from "../../Theme";

export const TicketsPage = () => {
    const { tickets, newTicket, idTicket } = useContextFnc();

    return (
        <Container>
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
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    min-width: 100%;
    min-height: 100vh;
    background: ${color.primaryColor};
`;
