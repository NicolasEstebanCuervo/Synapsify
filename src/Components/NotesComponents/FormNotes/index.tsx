import { ChangeEvent, useState } from "react";
import { useContextFnc } from "../../../Context";
import { Notes } from "../Notes";
import styled from "@emotion/styled";
import * as color from "../../../Theme";

export const FormNotes = () => {
    const { NoteTitle, changeNoteTitle, handleCreateNote, tickets } =
        useContextFnc();

    const [assignee, setAssignee] = useState("");

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        changeNoteTitle(e);
    };

    const onChangeAssigne = (e: ChangeEvent<HTMLSelectElement>) => {
        setAssignee(e.target.value);
    };

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!NoteTitle.trim()) {
            return;
        }

        handleCreateNote(assignee);
        setAssignee("");
    };

    return (
        <Container>
            <FormContainer>
                <Title>Create a note</Title>
                <Form action="" data-testid="note-form" onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        onChange={onChangeTitle}
                        value={NoteTitle}
                        placeholder="Title"
                        maxLength={20}
                    />

                    <Select value={assignee} onChange={onChangeAssigne}>
                        <option value="">Selected the assignee</option>
                        {tickets.map((ticket, index) => (
                            <option key={index} value={ticket.assigneeTicket}>
                                {ticket.assigneeTicket}
                            </option>
                        ))}
                    </Select>

                    <NotesContainer>
                        <NoteText>Recent notes</NoteText>
                        <Notes />
                    </NotesContainer>

                    <Button type="submit" data-testid="button-form-notes">
                        Create a note
                    </Button>
                </Form>
            </FormContainer>
        </Container>
    );
};

const Container = styled.section`
    width: 80%;
    display: flex;
    justify-content: center;

    @media (max-width: 1000px) {
        width: 60%;
    }

    @media (max-width: 700px) {
        width: 90%;
    }

    @media (max-width: 300px) {
        width: 95%;
    }
`;

const FormContainer = styled.div`
    width: 60%;

    @media (max-width: 1000px) {
        width: 90%;
    }

    @media (max-width: 300px) {
        width: 100%;
    }
`;

const Title = styled.h1`
    color: ${color.textPrimaryColor};
    font-size: 2rem;
    font-weight: bold;
    text-align: center;

    @media (max-width: 400px) {
        font-size: 10vw;
        text-align: center;
    }

    @media (max-width: 250px) {
        font-size: 12vw;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2rem;
`;

const Input = styled.input`
    padding: 0.7rem 0.5rem;
    border-radius: 0.5rem;
    background: ${color.placeholderColor};
    border: none;
    outline: 1px solid ${color.inputBorderColor};
    color: ${color.textPrimaryColor};
    font-size: 1.2rem;

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

const Select = styled.select`
    background: ${color.placeholderColor};
    color: ${color.textPrimaryColor};
    border-radius: 0.5rem;
    padding: 0.5rem;

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

const NoteText = styled.h2`
    color: ${color.textPrimaryColor};
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;

    @media (max-width: 1000px) {
        font-size: 1.4rem;
    }

    @media (max-width: 700px) {
        font-size: 1.3rem;
    }

    @media (max-width: 400px) {
        font-size: 9vw;
    }

    @media (max-width: 250px) {
        font-size: 12vw;
    }
`;

const NotesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
