import { render, screen } from "@testing-library/react";
import ContextAppComponent from "../../../Context";
import { Tickets } from ".";

test("The tickets are in the document.", () => {
    render(
        <ContextAppComponent>
            <Tickets />
        </ContextAppComponent>
    );
    const tickets = screen.getByTestId("tickets");

    expect(tickets).toBeInTheDocument;
});
