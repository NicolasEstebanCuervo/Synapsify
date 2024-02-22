import { fireEvent, render, screen } from "@testing-library/react";
import ContextAppComponent from "../../Context";
import { NavBar } from ".";
import { BrowserRouter } from "react-router-dom";

test("Navbar is in the document.", () => {
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        </ContextAppComponent>
    );

    const navBar = screen.getByTestId("nav-bar");
    expect(navBar).toBeInTheDocument;
});

test("The new ticket button works.", () => {
    const mockIncrement = jest.fn();
    jest.mock("./", () => ({ toggleNewTicketFnc: mockIncrement }));
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        </ContextAppComponent>
    );
    const navButton = screen.getByText("New ticket");
    fireEvent.click(navButton);
    expect(navButton).toBeInTheDocument;
    expect(navButton).toHaveBeenCalled;
});

test("The new tickets button works.", () => {
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        </ContextAppComponent>
    );
    const navButton = screen.getByText("Tickets");
    fireEvent.click(navButton);
    expect(navButton).toBeInTheDocument;
});

test("The Create a note button works.", () => {
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        </ContextAppComponent>
    );
    const navButton = screen.getByText("Create a note");
    expect(navButton).toBeInTheDocument;
});
