import { render, screen } from "@testing-library/react";
import ContextAppComponent from "../../../../Context";
import { Tasks } from ".";

test("The tasks are in the document.", () => {
    render(
        <ContextAppComponent>
            <Tasks ticketId="ticketTest"/>
        </ContextAppComponent>
    );
    const tasks = screen.getByTestId("tasks");

    expect(tasks).toBeInTheDocument;
});
