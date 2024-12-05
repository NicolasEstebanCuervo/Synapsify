import styled from "@emotion/styled";
import { FormNote } from "../../Components/ComponentsNotes/FormNotes";
import * as color from "../../Theme";

export const NotesPage = () => {
    return (
        <Container>
            <FormNote />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    min-width: 80%;
    min-height: 100vh;
    background: ${color.primaryColor};
`;
