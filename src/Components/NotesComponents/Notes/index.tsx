import styled from "@emotion/styled";
import { useContextFnc } from "../../../Context";
import { Note } from "../Note";

export const Notes = () => {
    const { notes } = useContextFnc();
    return (
        <Container data-testid="notes">
            {notes.map((note, index) => (
                <NoteContainer key={index}>
                    <Note
                        assignee={note.NoteAssignee}
                        note={note}
                        number={index + 1}
                    />
                </NoteContainer>
            ))}
        </Container>
    );
};

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;

    @media (max-width: 400px) {
        gap: 3rem;
    }

    @media (max-width: 250px) {
        gap: 2rem;
    }
`;

const NoteContainer = styled.div`
    width: 100%;
`;
