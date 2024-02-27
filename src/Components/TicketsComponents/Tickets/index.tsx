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
                            <ListItem key={ticket.idTicket}>
                                {ticket.titleTicket}
                            </ListItem>
                        ))}
                    </UnorderedList>
                </div>
            )}

            <div>
                {!idFilter && <TitleToDo>Your tickets</TitleToDo>}

                <ContainerTickets edit={!idFilter}>
                    <TableTickets>
                        {!idFilter && (
                            <TitlesTable>
                                <tr>
                                    <th>Tickets</th>
                                    <th>Assignee</th>
                                    <th>Priority</th>
                                    <th>Edit</th>
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

    @media (max-width: 700px) {
        width: 95%;
    }

    ol,
    ul {
        padding-left: 2rem !important;

        @media (max-width: 400px) {
            padding-left: 1.5rem !important;
        }

        @media (max-width: 250px) {
            padding-left: 1rem !important;
        }
    }
`;

const TitleTicketsList = styled.h1`
    color: ${color.textColor};
    font-size: 2.5rem;
    font-weight: bold;

    @media (max-width: 1000px) {
        font-size: 3rem;
    }

    @media (max-width: 700px) {
        font-size: 2.5rem;
    }

    @media (max-width: 400px) {
        font-size: 10vw;
    }

    @media (max-width: 250px) {
        font-size: 12vw;
    }
`;

const SubtitleTicketsList = styled.h3`
    color: ${color.textColorGray};
    font-size: 1.2rem;

    @media (max-width: 1000px) {
        font-size: 1.1rem;
    }

    @media (max-width: 700px) {
        font-size: 1rem;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
    }

    @media (max-width: 250px) {
        font-size: 7vw;
    }
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

    @media (max-width: 1000px) {
        font-size: 1.1rem;
    }

    @media (max-width: 700px) {
        font-size: 1rem;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
    }

    @media (max-width: 250px) {
        font-size: 6vw;
        padding: 0 0.5rem;
    }
`;

const TitleToDo = styled.h1`
    color: ${color.textColor};
    font-size: 1.5rem;

    @media (max-width: 1000px) {
        font-size: 1.4rem;
    }

    @media (max-width: 700px) {
        font-size: 1.2rem;
    }

    @media (max-width: 400px) {
        font-size: 7vw;
    }

    @media (max-width: 250px) {
        font-size: 9vw;
    }
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
    width: 100%;

    tr {
        border-radius: 0.5rem;

        th {
            padding: 0.5rem 0;
            font-size: 1.1rem;
            color: ${color.textColor};
            font-weight: 400;

            @media (max-width: 700px) {
                :nth-of-type(1) {
                    width: 100%;
                }

                :nth-of-type(2) {
                    display: none;
                }

                :nth-of-type(3) {
                    display: none;
                }

                :nth-of-type(4) {
                    display: none;
                }
            }

            @media (max-width: 400px) {
                font-size: 5vw;
            }

            @media (max-width: 250px) {
                font-size: 7vw;
            }
        }
    }
`;

const TableBody = styled.tbody`
    text-align: center;
`;
