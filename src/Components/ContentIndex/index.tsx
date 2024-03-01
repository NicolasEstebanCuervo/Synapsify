import styled from "@emotion/styled";
import * as color from "../../Theme";
import { Link } from "react-router-dom";

export const ContentIndex = () => {
    return (
        <MainContent>
            <ContainerTitles>
                <TitleIndex>Synapsify</TitleIndex>
                <Slogan>Sail the tide of productivity with Sinapsify.</Slogan>
            </ContainerTitles>

            <ContainerContent>
                <ContainerTexsContent>
                    <TitleContent>
                        Get Things Done Together: Synapsify's Ticket Power!
                    </TitleContent>
                    <DescriptionContent>
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
                    </DescriptionContent>
                    <Link to="Tickets">
                        <Button>Get Rolling!</Button>
                    </Link>
                </ContainerTexsContent>
                <Illustration
                    src={require("../../Assets/Illustrations/Tickets.png")}
                    alt=""
                />
            </ContainerContent>

            <ContainerContent>
                <Illustration
                    src={require("../../Assets/Illustrations/Tasks.png")}
                    alt=""
                />
                <ContainerTexsContent>
                    <TitleContent>
                        Stay on Top: Conquer Tasks with Synapsify!
                    </TitleContent>
                    <DescriptionContent>
                        The task list feature in Synapsify is your ally for
                        organizing and completing your daily activities
                        effectively. With Synapsify, you can create customized
                        task lists, assign tasks to yourself or other team
                        members, set deadlines, and track progress in real time.
                        From complex projects to simple pending tasks, Synapsify
                        helps you maintain focus and productivity by offering a
                        clear view of what needs to be done and when.
                    </DescriptionContent>
                    <Link to="Tickets">
                        <Button>Make It Happen!</Button>
                    </Link>
                </ContainerTexsContent>
            </ContainerContent>

            <ContainerContent>
                <ContainerTexsContent>
                    <TitleContent>
                        Brainstorms to Brilliance: Synapsify's Note-taking
                        Magic!
                    </TitleContent>
                    <DescriptionContent>
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
                    </DescriptionContent>
                    <Link to="Notes">
                        <Button>Write Your Story!</Button>
                    </Link>
                </ContainerTexsContent>
                <Illustration
                    src={require("../../Assets/Illustrations/Notes.png")}
                    alt=""
                />
            </ContainerContent>
        </MainContent>
    );
};

const MainContent = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 5rem;
`;

const ContainerTitles = styled.div`
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

const TitleIndex = styled.h1`
    color: ${color.textColor};
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

const Slogan = styled.h3`
    color: ${color.textColorGray};
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

const ContainerContent = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;

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

const ContainerTexsContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;

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

const TitleContent = styled.h1`
    color: ${color.textColor};
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

const DescriptionContent = styled.p`
    color: ${color.textColorGray};
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

const Illustration = styled.img`
    width: 100%;
    max-width: 35rem;

    @media (max-width: 1300px) {
        max-width: 30rem;
    }

    @media (max-width: 1200px) {
        max-width: 25rem;
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
    background: ${color.tertiaryColor};
    color: ${color.textColor};

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
