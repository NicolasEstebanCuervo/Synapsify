import { NoteAlone } from "../../Components/ComponentsNotes/NoteAlone";
import { useContextFnc } from "../../Context";
import styled from "@emotion/styled";
import * as color from "../../Theme";

export const NotePage = () => {
    const { note } = useContextFnc();

    if (!note) {
        return null;
    }

    return (
        <Container>
            <NoteAlone />
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
