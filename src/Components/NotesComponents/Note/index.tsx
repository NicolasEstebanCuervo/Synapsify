import { Link } from "react-router-dom";
import { INote, useContextFnc } from "../../../Context";
import SheetIcon from "../../../Assets/Icons/SheetIcon";
import styled from "@emotion/styled";
import * as color from "../../../Theme";

export const Note = ({
    note,
    number,
    assignee,
}: {
    note: INote;
    number: number;
    assignee: string | undefined;
}) => {
    const { noteDelete, onClickNote } = useContextFnc();

    const handleDelete = () => {
        noteDelete(note.idNote);
    };

    const createNote = () => {
        onClickNote(note);
    };

    return (
        <Container data-testid="note">
            <Subcontainer>
                <IconContainer>
                    <LinkStyle to={`/Note/${note.idNote}`}>
                        <SheetIcon />
                    </LinkStyle>
                </IconContainer>
                <TextContainer>
                    <LinkStyle
                        data-testid="title-note"
                        onClick={createNote}
                        to={`/Note/${note.idNote}`}
                    >
                        <NoteTitle>{note.NoteTitle}</NoteTitle>
                    </LinkStyle>
                    <NoteText>
                        Task #{number} assigned to{" "}
                        {assignee ? assignee : "Unassigned"}
                    </NoteText>
                </TextContainer>
            </Subcontainer>
            <Button onClick={handleDelete}>Delete</Button>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 400px) {
        flex-direction: column;
        align-items: start;
    }
`;

const Subcontainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 400px) {
        gap: 0.5rem;
    }
`;
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const IconContainer = styled.div`
    background: ${color.grayColor};
    padding: 0.5rem;
    border-radius: 0.5rem;
`;

const LinkStyle = styled(Link)`
    text-decoration: none;
    color: inherit;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        color: inherit;
    }
`;

const NoteTitle = styled.h3`
    color: ${color.textPrimaryColor};
    font-size: 1.3rem;
    margin: 0;

    @media (max-width: 1000px) {
        font-size: 0.9rem;
    }

    @media (max-width: 700px) {
        font-size: 1rem;
    }

    @media (max-width: 400px) {
        font-size: 6vw;
    }

    @media (max-width: 300px) {
        font-size: 7vw;
    }

    @media (max-width: 250px) {
        font-size: 10vw;
    }
`;

const NoteText = styled.h4`
    color: ${color.textSecondaryColor};
    font-size: 0.9rem;
    margin: 0;

    @media (max-width: 1000px) {
        font-size: 0.8rem;
    }

    @media (max-width: 700px) {
        font-size: 0.9rem;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
    }

    @media (max-width: 300px) {
        font-size: 6vw;
    }

    @media (max-width: 250px) {
        font-size: 7vw;
    }
`;

const Button = styled.button`
    display: inline-block;
    border-radius: 0.5rem;
    border: none;
    font-size: 1rem;
    padding: 0.3rem 1.3rem;
    background: ${color.grayColor};
    color: ${color.textPrimaryColor};

    @media (max-width: 1000px) {
        font-size: 0.9rem;
    }

    @media (max-width: 700px) {
        font-size: 1rem;
        padding: 0.2rem 0.9rem;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
        text-align: center;
    }

    @media (max-width: 250px) {
        font-size: 7vw;
    }
`;
