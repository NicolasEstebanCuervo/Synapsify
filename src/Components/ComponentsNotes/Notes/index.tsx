import styled from "@emotion/styled";
import { useContextFnc } from "../../../Context";
import { Note } from "../Note";

export const Notes = () => {
    const { notes } = useContextFnc();
    return (
        <ContainerNotes data-testid="notes">
            {notes.map((note, index) => (
                <ContainerNote>
                <Note
                    assignee={note.assigneNote}
                    note={note}
                    number={index + 1}
                    key={note.idNote}
                />
                </ContainerNote>
            ))}
        </ContainerNotes>
    );
};

const ContainerNotes = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
`;

const ContainerNote = styled.div`
    width: 100%;
`