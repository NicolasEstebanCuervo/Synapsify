import { render, screen } from "@testing-library/react";
import ContextAppComponent, { ITicket } from "../../../Context";
import { TicketWithTasks } from ".";

const ticketTest : ITicket = {
    idTicket:"idTicket",
    titleTicket:"Title ticket",
    assigneeTicket:"Assignee ticket",
    priorityTicket:"Low"
}

test("The ticket with task is in the document.", () => {
    render(
        <ContextAppComponent>
            <TicketWithTasks ticket={ticketTest}/>
        </ContextAppComponent>
    );
    const ticket = screen.getByTestId("ticket-with-task");
    expect(ticket).toBeInTheDocument();
});