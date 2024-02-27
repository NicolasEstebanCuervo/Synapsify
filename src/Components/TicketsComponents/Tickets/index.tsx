import { useContextFnc } from "../../../Context";
import { Ticket } from "../Ticket";
import styled from "@emotion/styled";
import * as color from "../../../Theme";

export const Tickets = ({ idFilter }: { idFilter?: string | undefined }) => {
    const { tickets } = useContextFnc();

    const ticketToShow = idFilter
        ? tickets.filter((ticket) => ticket.idTicket === idFilter)
        : tickets;

    return (
        <SectionTickets data-testid="tickets">
            {!idFilter && (
                <div>
                    <TitleTicketsList>Tickets</TitleTicketsList>
                    <SubtitleTicketsList>Last tickets</SubtitleTicketsList>
                    <UnorderedList>
                        {tickets.map((ticket) => (
                            <ListItem key={ticket.idTicket}>{ticket.titleTicket}</ListItem>
                        ))}
                    </UnorderedList>
                </div>
            )}

            <div>
                {!idFilter && <TitleToDo>To Do</TitleToDo>}

                <ContainerTickets edit={!idFilter}>
                    <TableTickets>
                        {!idFilter && (
                            <TitlesTable>
                                <tr>
                                    <th>Title</th>
                                    <th>Assignee</th>
                                    <th>Priority</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </TitlesTable>
                        )}
                        <TableBody>
                            {ticketToShow.map((ticket) => (
                                <Ticket key={ticket.idTicket} ticket={ticket} />
                            ))}
                        </TableBody>
                    </TableTickets>
                </ContainerTickets>
            </div>
        </SectionTickets>
    );
};

const SectionTickets = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-height: 100vh;
    width: 90%;
`;

const TitleTicketsList = styled.h1`
    color: ${color.textColor};
    font-size: 2.5rem;
    font-weight: bold;
`;

const SubtitleTicketsList = styled.h3`
    color: ${color.textColorGray};
    font-size: 1.2rem;
`;

const UnorderedList = styled.ul`
    list-style: none;
`;

const ListItem = styled.li`
    font-size: 1rem;
    position: relative;
    padding-left: 1rem;
    list-style-type: none;
    color: ${color.textColor};
    margin: 1rem 0;

    &:before {
        content: "";
        position: absolute;
        left: -15px;
        top: 50%;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: ${color.whiteColor};
        transform: translateY(-50%);
        z-index: 1;
    }

    &:after {
        content: "";
        position: absolute;
        left: -10px;
        top: 0;
        width: 2px;
        height: calc(100% + 20px);
        background-color: ${color.secondaryColor};
        transform: translateX(-50%);
    }

    &:last-child:after {
        height: calc(100% + 5px);
    }
`;

const TitleToDo = styled.h1`
    color: ${color.textColor};
    font-size: 1.5rem;
`;

const ContainerTickets = styled.div`
    border: ${({ edit }: { edit: boolean }) =>
        edit ? ` 2px solid ${color.placeHolderColor}` : ""};
    width: 100%;
    border-radius: 0.5rem;
`;

const TableTickets = styled.table`
    width: 100%;
    border-radius: 0.5rem;
`;

const TitlesTable = styled.thead`
    text-align: center;
    background: ${color.backgroundTableTitles};

    tr {
        border-radius: 0.5rem;

        th {
            padding: 0.5rem 0;
            font-size: 1.1rem;
            color: ${color.textColor};
            font-weight: 400;
        }
    }
`;

const TableBody = styled.tbody`
    text-align: center;
`;
