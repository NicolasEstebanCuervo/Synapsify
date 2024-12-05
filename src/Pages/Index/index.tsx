import styled from "@emotion/styled";
import * as color from "../../Theme";
import { ContentIndex } from "../../Components/ContentIndex";

export const Index = () => {
    return (
        <Container>
            <ContentIndex />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    min-width: 100%;
    min-height: 100vh;
    background: ${color.primaryColor};
`;
