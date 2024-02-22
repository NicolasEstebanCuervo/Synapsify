import styled from "@emotion/styled";
import { FormNote } from "../../Components/ComponentsNotes/FormNotes"
import { NavBar } from "../../Components/NavBar"
import * as color from "../../Theme"

export const NotesPage = ()=>{
    return(
        <Container>
            <NavBar/>
            <FormNote/>
        </Container>
    )
}

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    min-width: 80%;
    min-height: 100vh;
    background: ${color.primaryColor};
`;
