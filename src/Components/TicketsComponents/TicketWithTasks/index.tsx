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
        return <div data-testid="ticket-with-task">No ticket data found in localStorage.</div>;
    }

    const isTicketHidden = hiddenTickets.includes(ticketData.idTicket);

    const toggleHidden = () => {
        toggleHiddenTicket(ticketData.idTicket);
    };

    return (
        <SectionTicket> 
            {!isTicketHidden ? (
                <>
                    <ContainerInfoTicket>
                        <TitleTicket>{ticketData.titleTicket}</TitleTicket>
                        <ContainerSubtitles>
                            <SubtitlesTickets>
                                {ticketData.assigneeTicket}
                            </SubtitlesTickets>
                            <SubtitlesTickets>
                                {ticketData.priorityTicket}
                            </SubtitlesTickets>
                            <AddIcon onClick={toggleHidden}>+</AddIcon>
                        </ContainerSubtitles>
                    </ContainerInfoTicket>

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
        </SectionTicket>
    );
};

const SectionTicket = styled.section`
    width: 60%;
    min-height: 100vh;
    gap: 3rem;
    display: flex;
    flex-direction: column;
`;

const ContainerInfoTicket = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
`;

const TitleTicket = styled.h1`
    color: ${color.textColor};
    font-size: 2.5rem;
    font-weight: bold;
`;

const ContainerSubtitles = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const SubtitlesTickets = styled.h3`
    display: inline-block;
    background: ${color.grayColor};
    padding: 0.2rem 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    color: ${color.textColor};
`;
