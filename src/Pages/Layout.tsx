import { Outlet } from "react-router-dom";
import { NavBar } from "../Components/NavBar";
import styled from "@emotion/styled";
import * as color from "../Theme"

function Layout() {
    return (
        <Container>
            <NavBar/>
            <Outlet />
        </Container>
    );
}

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    min-width: 80%;
    min-height: 100vh;
    background: ${color.primaryColor};
`;

export default Layout;
