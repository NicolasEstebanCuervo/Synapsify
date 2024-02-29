import styled from "@emotion/styled";
import { NavBar } from "../../Components/NavBar";
import * as color from "../../Theme";
import { ContentIndex } from "../../Components/ContentIndex";

export const Index = () => {
    return (
        <Container>
            <NavBar />
            <ContentIndex/>
        </Container>
    );
};

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    min-width: 100%;
    min-height: 100vh;
    background: ${color.primaryColor};
`;

