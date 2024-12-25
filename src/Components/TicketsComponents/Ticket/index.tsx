import { Link, useNavigate } from "react-router-dom";
import { ITicket, useContextFnc } from "../../../Context";
import styled from "@emotion/styled";
import * as color from "../../../Theme";
import ExitIcon from "../../../Assets/Icons/ExitIcon";
import EditIcon from "../../../Assets/Icons/EditIcon";

export const Ticket = ({ ticket }: { ticket: ITicket }) => {
    const {
        onClickTicket,
        ticketDelete,
        setTitle,
        setAssigneeTicket,
        setPriorityTicket,
    } = useContextFnc();

    const navigate = useNavigate();

    const createTicketPage = () => {
        onClickTicket(ticket);
    };

    const onDeleteTicket = () => {
        ticketDelete(ticket);
    };

    const handleEditar = () => {
        navigate("/ticket/form", { state: { isEdit: true, ticket:ticket} });
        setTitle(ticket.titleTicket);
        setAssigneeTicket(ticket.assigneeTicket);
        setPriorityTicket(ticket.priorityTicket);
    };

    return (
        <Container>
            <>
                <RowContainer>
                    {" "}
                    <LinkRowContainer
                        to={`/Ticket/${ticket.idTicket}`}
                        onClick={createTicketPage}
                        data-testid="ticket-title"
                    >
                        <Label>Title:</Label>

                        {ticket.titleTicket}
                    </LinkRowContainer>
                </RowContainer>
                <RowContainer>
                    <Label>Assignee:</Label>

                    {ticket.assigneeTicket}
                </RowContainer>
                <RowContainer>
                    <ContainerPriority>
                        <LabelPriority>Priority:</LabelPriority>
                        {ticket.priorityTicket}
                    </ContainerPriority>
                </RowContainer>
                <RowContainer>
                    <Button>
                        <EditIcon
                            data-testid="edit-button"
                            onClick={handleEditar}
                        />
                    </Button>
                    <Button>
                        <ExitIcon
                            data-testid="delete-button"
                            onClick={onDeleteTicket}
                        />
                    </Button>
                </RowContainer>
            </>
        </Container>
    );
};

const Container = styled.div`
    text-align: center;
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    border-top: 1px solid ${color.ticketBorderColor};

    border-bottom: 1px solid ${color.ticketBorderColor};

    &:last-child {
        border-bottom: 0px;
    }

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;
    }

    @media (max-width: 400px) {
        height: 10rem;
    }
`;

const Label = styled.label`
    display: none;
    margin-right: 0.3rem;

    @media (max-width: 700px) {
        display: inline;
        font-size: 1.1rem;
        font-weight: 800;
    }

    @media (max-width: 400px) {
        font-size: 5.5vw;
    }

    @media (max-width: 250px) {
        font-size: 7.5vw;
    }
`;

const RowContainer = styled.div`
    font-size: 1rem;
    padding: 1rem 0;
    color: ${color.textSecondaryColor};
    text-transform: capitalize;

    :nth-of-type(1) {
        color: ${color.textPrimaryColor};
    }

    :nth-of-type(3) {
        color: ${color.textPrimaryColor};
    }

    @media (max-width: 1000px) {
        font-size: 0.9rem;
    }

    @media (max-width: 700px) {
        font-size: 1rem;
        display: flex;
        align-items: center;
        padding: 0.5rem;
        text-align: left;

        :nth-of-type(2) {
        }

        :nth-of-type(3) {
            font-size: 0.8rem;
        }

        :nth-of-type(4) {
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
            padding: 0.2rem 0;
            position: absolute;
            top: 0;
            right: 0;
        }
    }

    @media (max-width: 400px) {
        :nth-of-type(2) {
        }

        :nth-of-type(3) {
        }

        font-size: 5vw;
    }

    @media (max-width: 250px) {
        :nth-of-type(3) {
            font-size: 6.5vw;
        }
        font-size: 7vw;
    }
`;

const LabelPriority = styled.label`
    display: none;
    margin-right: 0.3rem;

    @media (max-width: 700px) {
        display: inline;
        font-size: 0.8rem;
        font-weight: 800;
    }

    @media (max-width: 400px) {
        font-size: 4.5vw;
    }

    @media (max-width: 250px) {
        font-size: 6.5vw;
    }
`;

const ContainerPriority = styled.div`
    background: ${color.grayColor};
    padding: 0.4rem 1rem;
    border-radius: 0.5rem;

    @media (max-width: 700px) {
        background: ${color.grayColor};
        padding: 0.2rem 0.9rem;
    }
`;

const LinkRowContainer = styled(Link)`
    padding: 1rem 0;
    text-decoration: none;
    color: inherit;
    text-align: left;

    @media (max-width: 1000px) {
        font-size: 0.9rem;
    }

    @media (max-width: 700px) {
        font-size: 1rem;
        padding: 0;
        width: 90%;
        word-wrap: break-word;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
    }

    @media (max-width: 250px) {
        font-size: 7vw;
    }
`;

const Button = styled.button`
    background: none;
    border: none;
`;
