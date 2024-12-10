import { ChangeEvent } from "react";
import { ITicket, useContextFnc } from "../../../Context";
import styled from "@emotion/styled";
import * as color from "../../../Theme";

interface FormTicketsProps {
    ticket?: ITicket;
    setEdit?: React.Dispatch<React.SetStateAction<boolean>>;
    edit?: boolean;
    title: string;
    subtitle: string;
}

export const FormTickets = ({
    ticket,
    setEdit,
    edit,
    title,
    subtitle,
}: FormTicketsProps) => {
    const {
        titleTicket,
        assigneeTicket,
        priorityTicket,
        changeTitle,
        changeAssigneeTicket,
        changePriorityTicket,
        handleSubmitTicket,
        updateTicket,
        getIdTicket,
        toggleNewTicket,
    } = useContextFnc();

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        changeTitle(e);
        console.log(e.target.value)
    };

    const onChangeAssignee = (e: ChangeEvent<HTMLInputElement>) => {
        changeAssigneeTicket(e);
    };

    const onChangePriority = (e: ChangeEvent<HTMLInputElement>) => {
        changePriorityTicket(e);
    };

    const toggleNewTicketFnc = () => {
        toggleNewTicket();
    };

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (ticket) {
            updateTicket(ticket.idTicket);
        } else {
            handleSubmitTicket();
        }
        if (setEdit) {
            setEdit(false);
        }
        getIdTicket("");
    };

    return (
        <Container>
            <FormContainer>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <Form action="" onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        onChange={onChangeTitle}
                        value={titleTicket}
                        placeholder="Title"
                        maxLength={25}
                    />
                    <Input
                        type="text"
                        onChange={onChangeAssignee}
                        value={assigneeTicket}
                        placeholder="Assignee"
                        maxLength={20}
                    />
                    <Input
                        type="text"
                        onChange={onChangePriority}
                        value={priorityTicket}
                        placeholder="Priority"
                        maxLength={10}
                    />

                    {titleTicket.length > 0 &&
                        assigneeTicket.length > 0 &&
                        priorityTicket.length > 0 && (
                            <Button
                                data-testid="create-ticket-button"
                                type="submit"
                            >
                                {edit ? "Edit ticket" : "Create ticket"}
                            </Button>
                        )}

                    {edit ? (
                        <></>
                    ) : (
                        <Button onClick={toggleNewTicketFnc}>
                            Return to tickets
                        </Button>
                    )}
                </Form>
            </FormContainer>
        </Container>
    );
};

const Container = styled.section`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FormContainer = styled.div`
    width: 40%;

    @media (max-width: 1000px) {
        width: 60%;
    }

    @media (max-width: 700px) {
        width: 80%;
    }

    @media (max-width: 300px) {
        width: 90%;
    }
`;

const Title = styled.h1`
    color: ${color.textPrimaryColor};
    font-size: 3.5rem;
    font-weight: bold;
    text-align: left;

    @media (max-width: 1000px) {
        font-size: 3rem;
    }

    @media (max-width: 700px) {
        font-size: 2.5rem;
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
    font-size: 1.2rem;
    text-align: left;

    @media (max-width: 1000px) {
        font-size: 1.1rem;
    }

    @media (max-width: 700px) {
        font-size: 1rem;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
        text-align: center;
    }

    @media (max-width: 250px) {
        font-size: 7vw;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 4rem;

    @media (max-width: 1000px) {
        margin-top: 3.5rem;
    }

    @media (max-width: 700px) {
        margin-top: 3rem;
    }

    @media (max-width: 400px) {
        margin-top: 2.5rem;
    }

    @media (max-width: 250px) {
        margin-top: 2rem;
    }
`;

const Input = styled.input`
    padding: 0.7rem 0.5rem;
    border-radius: 0.5rem;
    background: ${color.placeholderColor};
    border: none;
    outline: 1px solid ${color.inputBorderColor};
    color: ${color.textPrimaryColor};
    font-size: 1.2rem;
    border: none;

    @media (max-width: 1000px) {
        font-size: 1.1rem;
    }

    @media (max-width: 700px) {
        font-size: 1rem;
    }

    @media (max-width: 400px) {
        padding: 0.4rem 0.5rem;
        font-size: 5vw;
    }

    @media (max-width: 250px) {
        font-size: 7vw;
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
