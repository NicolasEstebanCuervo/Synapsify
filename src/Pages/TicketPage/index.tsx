import { useContextFnc } from "../../Context";
import { TicketWithTasks } from "../../Components/TicketsComponents/TicketWithTasks";
import { NavBar } from "../../Components/NavBar";
import styled from "@emotion/styled";
import * as color from "../../Theme"

export const TicketPage = () => {
    const { ticket } = useContextFnc();

    return (
        <Container>
            <NavBar />
            <TicketWithTasks  ticket={ticket} />
        </Container>
    );
};


const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    min-width: 90%;
    min-height: 100vh;
    background: ${color.primaryColor};
`;