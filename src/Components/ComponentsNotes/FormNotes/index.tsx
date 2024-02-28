import { ChangeEvent, useState } from "react";
import { useContextFnc } from "../../../Context";
import { Notes } from "../Notes";
import styled from "@emotion/styled";
import * as color from "../../../Theme";

export const FormNote = () => {
    const { titleNote, changeTitleNote, handleCreateNote, tickets, notes } = useContextFnc();

    const [assignee, setAssignee] = useState("");

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        changeTitleNote(e);
    };

    const onChangeAssigne = (e: ChangeEvent<HTMLSelectElement>) => {
        setAssignee(e.target.value);
    };

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!titleNote.trim()) {
            return;
        }

        handleCreateNote(assignee);
        setAssignee("");
    };

    return (
        <SectionFormTickets>
            <ContainerFormTickets>
                <TitleFormTickets>Create a note</TitleFormTickets>
                <Form action="" data-testid="note-form" onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        onChange={onChangeTitle}
                        value={titleNote}
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

                        <ContainerNotes>
                            <TextNote>Recent notes</TextNote>
                                <Notes />
                        </ContainerNotes>

                    <Button type="submit" data-testid="button-form-notes">Create a note</Button>
                </Form>
            </ContainerFormTickets>
        </SectionFormTickets>
    );
};

const SectionFormTickets = styled.main`
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

const ContainerFormTickets = styled.div`
    width: 60%;

    @media (max-width: 1000px) {
        width: 90%;
    }

    @media (max-width: 300px) {
        width: 100%;
    }
`;

const TitleFormTickets = styled.h1`
    color: ${color.textColor};
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
    background: ${color.placeHolderColor};
    border: none;
    outline: 1px solid ${color.borderInputColor};
    color: ${color.textColor};
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
    background: ${color.placeHolderColor};
    color: ${color.textColor};
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

const TextNote = styled.h1`
    color: ${color.textColor};
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

const ContainerNotes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
