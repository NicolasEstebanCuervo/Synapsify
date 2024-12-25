import styled from "@emotion/styled";
import * as color from "../../Theme";
import { Link } from "react-router-dom";

export const ContentIndex = () => {
    return (
        <Container>
            <HeaderTitles>
                <Title>Synapsify</Title>
                <Subtitle>
                    Sail the tide of productivity with Sinapsify.
                </Subtitle>
            </HeaderTitles>

            <SubContainer>
            <IndividualContainer>
                <TextContainer>
                    <TitleContent>
                        Get Things Done Together: Synapsify's Ticket Power!
                    </TitleContent>
                    <TextContent>
                        In Synapsify, tickets serve as the backbone of organized
                        teamwork. From creation to resolution, Synapsify
                        facilitates collaboration among team members to address
                        requests, issues, or any pending tasks efficiently. With
                        Synapsify, you can assign tickets to specific team
                        members, set priorities and deadlines, and track
                        progress in real time. This capability for organized
                        teamwork ensures equitable task distribution, clear
                        communication, and swift and effective issue resolution.
                        Synapsify helps keep your team synchronized and focused
                        on achieving common goals.
                    </TextContent>
                    <Link to="Tickets">
                        <Button>Get Rolling!</Button>
                    </Link>
                </TextContainer>
                <Image
                    src={require("../../Assets/Images/Tickets.png")}
                    alt=""
                />
            </IndividualContainer>

            <IndividualContainer>
                <Image src={require("../../Assets/Images/Tasks.png")} alt="" />
                <TextContainer>
                    <TitleContent>
                        Stay on Top: Conquer Tasks with Synapsify!
                    </TitleContent>
                    <TextContent>
                        The task list feature in Synapsify is your ally for
                        organizing and completing your daily activities
                        effectively. With Synapsify, you can create customized
                        task lists, assign tasks to yourself or other team
                        members, set deadlines, and track progress in real time.
                        From complex projects to simple pending tasks, Synapsify
                        helps you maintain focus and productivity by offering a
                        clear view of what needs to be done and when.
                    </TextContent>
                    <Link to="/Tickets">
                        <Button>Make It Happen!</Button>
                    </Link>
                </TextContainer>
            </IndividualContainer>

            <IndividualContainer>
                <TextContainer>
                    <TitleContent>
                        Brainstorms to Brilliance: Synapsify's Note-taking
                        Magic!
                    </TitleContent>
                    <TextContent>
                        In Synapsify, taking notes is key to capturing ideas,
                        reminders, and any information relevant to your projects
                        and tasks. With Synapsify, you can quickly create notes,
                        organize them into categories or tags, and access them
                        easily when needed. Whether during a meeting, on a phone
                        call, or simply while working on your projects,
                        Synapsify enables you to keep your thoughts and data
                        organized and accessible. Additionally, you can share
                        your notes with colleagues or collaborators for better
                        team collaboration and communication.
                    </TextContent>
                    <Link to="/Notes">
                        <Button>Write Your Story!</Button>
                    </Link>
                </TextContainer>
                <Image src={require("../../Assets/Images/Notes.png")} alt="" />
            </IndividualContainer>
            </SubContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 5rem;
    max-width: 1300px;
`;

const SubContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5rem;
`;

const HeaderTitles = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    margin-bottom: 3rem;

    @media (max-width: 400px) {
        margin-bottom: 1rem;
    }
`;

const Title = styled.h1`
    color: ${color.textPrimaryColor};
    font-size: 4rem;
    font-weight: bold;
    text-align: left;

    @media (max-width: 700px) {
        font-size: 3.5rem;
    }

    @media (max-width: 400px) {
        font-size: 10vw;
        text-align: center;
    }

    @media (max-width: 250px) {
        font-size: 12vw;
    }
`;

const Subtitle = styled.h2`
    color: ${color.textSecondaryColor};
    font-size: 2rem;
    text-align: center;

    @media (max-width: 700px) {
        font-size: 1.5rem;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
        text-align: center;
    }

    @media (max-width: 250px) {
        font-size: 7vw;
    }
`;

const IndividualContainer = styled.section`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 1500px) {
        width: 80%;
    }

    @media (max-width: 1300px) {
        width: 90%;
    }

    @media (max-width: 1000px) {
        width: 95%;
        flex-direction: column-reverse;

        :nth-of-type(2) {
            flex-direction: column-reverse;
        }

        :nth-of-type(3) {
            flex-direction: column;
        }
    }
`;

const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 60%;

    @media (max-width: 1000px) {
        width: 80%;
    }

    @media (max-width: 700px) {
        width: 85%;
    }

    @media (max-width: 400px) {
        width: 90%;
    }

    @media (max-width: 250px) {
        width: 100%;
    }
`;

const TitleContent = styled.h3`
    color: ${color.textPrimaryColor};
    font-size: 2rem;

    @media (max-width: 1000px) {
        font-size: 1.8rem;
    }

    @media (max-width: 700px) {
        font-size: 1.5rem;
    }

    @media (max-width: 400px) {
        font-size: 7vw;
    }

    @media (max-width: 250px) {
        font-size: 9vw;
    }
`;

const TextContent = styled.p`
    color: ${color.textSecondaryColor};
    font-size: 1rem;

    @media (max-width: 1000px) {
        font-size: 1.1rem;
    }

    @media (max-width: 700px) {
        font-size: 1rem;
    }

    @media (max-width: 400px) {
        font-size: 4vw;
    }

    @media (max-width: 300px) {
        font-size: 5vw;
    }

    @media (max-width: 250px) {
        font-size: 5.5vw;
    }
`;

const Image = styled.img`
    width: 100%;
    max-width: 25rem;
    background: #fffefe;
    border-radius: 10px;

    @media (max-width: 1300px) {
        max-width: 25rem;
    }

    @media (max-width: 1200px) {
        max-width: 20rem;
    }

    @media (max-width: 1000px) {
        max-width: 35rem;
    }
`;

const Button = styled.button`
    width: 100%;
    border-radius: 0.5rem;
    border: none;
    padding: 0.7rem 0;
    background: ${color.accentColor};
    color: ${color.textPrimaryColor};

    @media (max-width: 1000px) {
        font-size: 1rem;
    }

    @media (max-width: 400px) {
        padding: 0.4rem 0;
        font-size: 5vw;
    }

    @media (max-width: 250px) {
        font-size: 6vw;
    }
`;
