import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import * as color from "../../Theme";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NavContainer>
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
                        <NavLink as={Link} to="/">
                            Home
                        </NavLink>
                        <NavLink
                            as={Link}
                            to="/ticket/form"
                        >
                            New ticket
                        </NavLink>
                        <NavLink as={Link} to="/Tickets">
                            Tickets
                        </NavLink>
                        <NavLink as={Link} to="/Notes/">
                            Create a note
                        </NavLink>
                    </LinksContainer>
                </Navbar.Collapse>
            </NavBarContainer>
        </NavContainer>
    );
};

const NavContainer = styled.nav`
    border-bottom: 1px solid ${color.secondaryColor};
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0.5rem ;
    align-items: center;
    background: ${color.primaryColor};
`;

const NavBarContainer = styled(Navbar)`
    width: 90%;
`;
const LinksContainer = styled(Nav)`
    display: flex;
    justify-content: end;
    width: 100%;
`;

const NavLink = styled(Nav.Link)`
    color: ${color.textPrimaryColor};
    font-size: 1rem;

    :hover {
        border-bottom: 2px solid ${color.accentColor};
        padding-bottom: 2px;
    }
`;
