import { useContextFnc } from "../../Context";
import { TicketWithTasks } from "../../Components/TicketsComponents/TicketWithTasks";
import styled from "@emotion/styled";
import * as color from "../../Theme";

export const TicketPage = () => {
    const { ticket } = useContextFnc();

    return (
        <Container>
            <TicketWithTasks ticket={ticket} />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    min-width: 90%;
    min-height: 100vh;
    background: ${color.primaryColor};
`;
