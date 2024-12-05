import { Link, useLocation } from "react-router-dom";
import { useContextFnc } from "../../Context";
import styled from "@emotion/styled";
import { Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import * as color from "../../Theme"

export const NavBar = () => {
    const { toggleNewTicket } = useContextFnc();
    const [isOpen, setIsOpen] = useState(false);

    const toggleNewTicketFnc = () => {
        toggleNewTicket();
    };

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NavSection>
            <NavBarContainer expand="lg" data-bs-theme="dark">
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav show "
                    onClick={handleClick}
                />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className={`${isOpen ? "show" : ""}`}
                >
                    <LinksContainer className="mr-auto">
                        <NavLink as={Link} to="/">Home</NavLink>
                            <NavLink as={Link} to="/Tickets" onClick={toggleNewTicketFnc}>
                                New ticket
                            </NavLink>
                        <NavLink as={Link} to="/Tickets">Tickets</NavLink>
                        <NavLink as={Link} to="/Notes/">Create a note</NavLink>
                    </LinksContainer>
                </Navbar.Collapse>
            </NavBarContainer>
        </NavSection>
    );
};

const NavSection = styled.nav`
    border-bottom: 1px solid ${color.secondaryColor};
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0.5rem 0;
    align-items: center;
`

const NavBarContainer = styled(Navbar)`
    width: 90%;

`
const LinksContainer = styled(Nav)`
    display: flex;
    justify-content: end;
    width: 100%;
`

const NavLink = styled(Nav.Link)`
    color: ${color.textColor};
    font-size: 1rem;

    :hover{
        border-bottom: 2px solid ${color.tertiaryColor};
        padding-bottom: 2px;
    }
`

