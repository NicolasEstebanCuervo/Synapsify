import { useState } from "react";
import { Link } from "react-router-dom";
import { ITicket, useContextFnc } from "../../../Context";
import styled from "@emotion/styled";
import * as color from "../../../Theme";
import ExitIcon from "../../../Assets/Icons/ExitIcon";
import EditIcon from "../../../Assets/Icons/EditIcon";
import { FormTickets } from "../FormTickets";

export const Ticket = ({ ticket }: { ticket: ITicket }) => {
    const { onClickTicket, ticketDelete, getIdTicket } = useContextFnc();
    const [edit, setEdit] = useState(false);

    const createTicketPage = () => {
        onClickTicket(ticket);
    };

    const onDeleteTicket = () => {
        ticketDelete(ticket.idTicket);
    };

    const handleEditar = () => {
        setEdit(!edit);
        getIdTicket(ticket.idTicket);
    };

    return (
        <TableRow edit={!edit} data-testid="ticket">
            {edit ? (
                <>
                    <FormTickets
                        text="Edit the ticket"
                        ticket={ticket}
                        setEdit={setEdit}
                    />
                </>
            ) : (
                <>
                    <TableCell>
                        {" "}
                        <LinkTableCell
                            to={`/Ticket/${ticket.idTicket}`}
                            onClick={createTicketPage}
                        >
                            {ticket.titleTicket}
                        </LinkTableCell>
                    </TableCell>

                    <TableCell>{ticket.assigneeTicket}</TableCell>
                    <TableCell>
                        <ContainerPriority>
                            {ticket.priorityTicket}
                        </ContainerPriority>
                    </TableCell>
                    <TableCell>
                        <Button>
                            <EditIcon onClick={handleEditar} />
                        </Button>
                    </TableCell>
                    <TableCell>
                        <Button>
                            <ExitIcon onClick={onDeleteTicket} />
                        </Button>
                    </TableCell>
                </>
            )}
        </TableRow>
    );
};

const TableRow = styled.tr`
    text-align: center;

    border-top: ${({ edit }: { edit: boolean }) =>
        edit ? `1px solid ${color.borderTicket}` : ``};

    border-bottom: ${({ edit }: { edit: boolean }) =>
        edit ? `1px solid ${color.borderTicket}` : ``};

    &:last-child {
        border-bottom: 0px;
    }
`;

const TableCell = styled.td`
    font-size: 1rem;
    padding: 1rem 0;
    color: ${color.textColorGray};
    text-transform: capitalize;

    :nth-of-type(1) {
        color: ${color.textColor};
    }

    :nth-of-type(3) {
        color: ${color.textColor};
        font-size: 0.9rem;
    }
`;

const ContainerPriority = styled.div`
    display: inline-block;
    background: ${color.grayColor};
    padding: 0.4rem 3rem;
    border-radius: 0.5rem;
`;

const LinkTableCell = styled(Link)`
    padding: 1rem 0;
    text-decoration: none;
    color: inherit;
`;

const Button = styled.button`
    background: none;
    border: none;
`;
