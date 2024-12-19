import { ITicket, useContextFnc } from "../../../Context";
import styled from "@emotion/styled";
import { FormTasks } from "../TaskComponent/FormTasks";
import { Tasks } from "../TaskComponent/Tasks";
import * as color from "../../../Theme";
import AddIcon from "../../../Assets/Icons/AddIcon";
import { useEffect, useState } from "react";

export const TicketWithTasks = ({ ticket }: { ticket: ITicket | any }) => {
    const [loaded, setLoaded] = useState(false);
    const [ticketData, setTicketData] = useState<ITicket | null>(null);
    const { toggleHiddenTicket, hiddenTickets } = useContextFnc();

    useEffect(() => {
        const savedTicketJSON = localStorage.getItem("ticket");
        if (savedTicketJSON) {
            const savedTicket = JSON.parse(savedTicketJSON);
            setTicketData(savedTicket);
        }
        setLoaded(true);
    }, []);

    if (!loaded) {
        return <div>Loading...</div>;
    }

    if (!ticketData) {
        return (
            <div>
                No ticket data found in localStorage.
            </div>
        );
    }

    const isTicketHidden = hiddenTickets.includes(ticketData.idTicket);

    const toggleHidden = () => {
        toggleHiddenTicket(ticketData.idTicket);
    };

    return (
        <Container>
            {!isTicketHidden ? (
                <>
                    <InfoTicket>
                        <Title>{ticketData.titleTicket}</Title>
                        <ContainerSubtitles>
                            <TicketDetails>
                                <Subtitle>{ticketData.assigneeTicket}</Subtitle>
                                <Subtitle>{ticketData.priorityTicket}</Subtitle>
                            </TicketDetails>
                            <AddIcon
                                onClick={toggleHidden}
                                data-testid="add-icon"
                            >
                                +
                            </AddIcon>
                        </ContainerSubtitles>
                    </InfoTicket>

                    <Tasks ticketId={ticket.idTicket} />
                </>
            ) : (
                <>
                    <FormTasks
                        text="Create a task"
                        ticketId={ticket.idTicket}
                    />
                </>
            )}
        </Container>
    );
};

const Container = styled.section`
    width: 60%;
    min-height: 100vh;
    gap: 3rem;
    display: flex;
    flex-direction: column;

    @media (max-width: 700px) {
        width: 90%;
    }

    @media (max-width: 300px) {
        width: 95%;
    }

    @media (max-width: 400px) {
        gap: 2rem;
    }
`;

const InfoTicket = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;

    @media (max-width: 400px) {
        gap: 0.2rem;
    }
`;

const Title = styled.h1`
    color: ${color.textPrimaryColor};
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;

    @media (max-width: 1000px) {
        font-size: 2.3rem;
    }

    @media (max-width: 700px) {
        font-size: 2rem;
    }

    @media (max-width: 400px) {
        font-size: 10vw;
    }

    @media (max-width: 250px) {
        font-size: 12vw;
    }
`;

const ContainerSubtitles = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;

    @media (max-width: 400px) {
        justify-content: space-between;
    }
`;

const TicketDetails = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;

    @media (max-width: 400px) {
        justify-content: space-between;
    }
`;

const Subtitle = styled.h3`
    display: inline-block;
    background: ${color.grayColor};
    padding: 0.2rem 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    color: ${color.textPrimaryColor};
    margin: 0;

    @media (max-width: 1000px) {
        font-size: 0.9rem;
    }

    @media (max-width: 700px) {
        font-size: 1rem;
        padding: 0.2rem 0.9rem;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
        text-align: center;
    }

    @media (max-width: 250px) {
        font-size: 6vw;
    }
`;
