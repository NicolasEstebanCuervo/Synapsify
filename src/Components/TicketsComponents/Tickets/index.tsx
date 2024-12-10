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
        <Container data-testid="tickets">
            {!idFilter && (
                <section>
                    <Title>Tickets</Title>
                    <SubTitle>Last tickets</SubTitle>
                    <UnorderedList>
                        {tickets.map((ticket) => (
                            <ListItem key={ticket.idTicket}>
                                {ticket.titleTicket}
                            </ListItem>
                        ))}
                    </UnorderedList>
                </section>
            )}

            <div>
                {!idFilter && <TitleToDo>Your tickets</TitleToDo>}

                <TicketsContainer edit={!idFilter}>
                    {!idFilter && (
                        <TitlesTable>
                            <h4>Tickets</h4>
                            <h4>Assignee</h4>
                            <h4>Priority</h4>
                            <h4>Edit</h4>
                        </TitlesTable>
                    )}
                    <ContainerTicket>
                        {ticketToShow.map((ticket) => (
                            <Ticket key={ticket.idTicket} ticket={ticket} />
                        ))}
                    </ContainerTicket>
                </TicketsContainer>
            </div>
        </Container>
    );
};

const Container = styled.div`
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

const Title = styled.h1`
    color: ${color.textPrimaryColor};
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

const SubTitle = styled.h2`
    color: ${color.textSecondaryColor};
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
    color: ${color.textPrimaryColor};
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

const TitleToDo = styled.h3`
    color: ${color.textPrimaryColor};
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

const TicketsContainer = styled.section`
    border: ${({ edit }: { edit: boolean }) =>
        edit ? ` 2px solid ${color.placeholderColor}` : ""};
    width: 100%;
    border-radius: 0.5rem;
`;

const TitlesTable = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
    background: ${color.tableHeaderBackground};
    width: 100%;
    h4 {
        padding: 0.5rem 1rem;
        font-size: 1.1rem;
        color: ${color.textPrimaryColor};
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
`;

const ContainerTicket = styled.div`
    text-align: center;
    width: 100%;
`;
