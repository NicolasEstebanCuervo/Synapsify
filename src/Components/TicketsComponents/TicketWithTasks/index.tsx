import { ITicket, useContextFnc } from "../../../Context";
import styled from "@emotion/styled";
import { FormTasks } from "../TaskComponent/FormTasks";
import { Tasks } from "../TaskComponent/Tasks";
import * as color from "../../../Theme";
import AddIcon from "../../../Assets/Icons/AddIcon";

export const TicketWithTasks = ({ ticket }: { ticket: ITicket | any }) => {
    const { toggleHiddenTicket, hiddenTickets } = useContextFnc();

    if (!ticket) {
        return null;
    }

    const isTicketHidden = hiddenTickets.includes(ticket.idTicket);

    const toggleHidden = () => {
        toggleHiddenTicket(ticket.idTicket);
    };

    return (
        <SectionTicket>
            {!isTicketHidden ? (
                <>
                    <ContainerInfoTicket>
                        <TitleTicket>{ticket.titleTicket}</TitleTicket>
                        <ContainerSubtitles>
                            <SubtitlesTickets>
                                {ticket.assigneeTicket}
                            </SubtitlesTickets>
                            <SubtitlesTickets>
                                {ticket.priorityTicket}
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
