import { fireEvent, render, screen } from "@testing-library/react";
import ContextAppComponent, { ITask, ITicket } from "../../../../Context";
import { Task } from ".";
import { Tasks } from "../Tasks";
import userEvent from "@testing-library/user-event";

const ticket: ITicket = {
    idTicket: "ajsn1kasd",
    titleTicket: "Urgent Fix Needed",
    assigneeTicket: "John Smith",
    priorityTicket: "High",
};

const task: ITask = {
    idTask: "asd",
    idTicket: "ajsn1kasd",
    titleTask: "Investigate Root Cause",
    descriptionTask:
        "Analyze server logs, error messages, and infrastructure components to identify why the website is down.",
};

test("Should toggle the checkbox state on click", async () => {
    render(
        <ContextAppComponent>
            <Task task={task} />
        </ContextAppComponent>
    );

    const checkbox = screen.getByTestId("check-box") as HTMLInputElement;

    expect(checkbox.checked).toBe(false);

    await userEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);

    await userEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
});

test("Should open the edit form when the edit button is clicked", async () => {
    render(
        <ContextAppComponent>
                <Task task={task} />
        </ContextAppComponent>
    );

    const editButton = screen.getByTestId("edit-button");
    fireEvent.click(editButton);

    const titleForm = screen.getByText("Edit the task");
    await expect(titleForm).toBeInTheDocument();
});

test("Should remove the ticket from the list when the delete button is clicked", async () => {
    render(
        <ContextAppComponent>
            <Tasks ticketId={ticket.idTicket} />
        </ContextAppComponent>
    );

    const taskTitle = screen.getByText("Investigate Root Cause");

    expect(taskTitle).toBeInTheDocument();

    const deleteButton = screen.getAllByTestId("delete-button")[0];
    fireEvent.click(deleteButton);

    await expect(taskTitle).not.toBeInTheDocument();
});

test("Should load the ticket data into the form inputs and display 'Edit ticket' button", async () => {
    render(
        <ContextAppComponent>
                <Task task={task} />
        </ContextAppComponent>
    );

    const editButton = screen.getByTestId("edit-button");
    fireEvent.click(editButton);

    const titleInput = screen.getByPlaceholderText("Title") as HTMLInputElement;
    const descriptionInput = screen.getByPlaceholderText(
        "Description"
    ) as HTMLInputElement;
    const editButtonForm = screen.getByText("Edit task");

    expect(titleInput.value).toBe("Investigate Root Cause");
    expect(descriptionInput.value).toBe(
        "Analyze server logs, error messages, and infrastructure components to identify why the website is down."
    );

    expect(editButtonForm).toBeInTheDocument();
});

test("Should edit the ticket with the changes made when clicking the edit button", async () => {
    render(
        <ContextAppComponent>
            <Tasks ticketId={ticket.idTicket} />
        </ContextAppComponent>
    );

    const editButton = screen.queryAllByTestId("edit-button")[0];
    fireEvent.click(editButton);

    const titleInput = screen.getByPlaceholderText("Title");
    const descriptionInput = screen.getByPlaceholderText("Description");

    fireEvent.change(titleInput, { target: { value: "Fix important bug" } });
    fireEvent.change(descriptionInput, { target: { value: "Fix the bug in the login form." } });

    const editButtonForm = screen.getByText("Edit task");
    fireEvent.click(editButtonForm);

    await expect(
        screen.getByText(/Fix important bug/i)
    ).toBeInTheDocument();
    await expect(
        screen.getByText(/Fix the bug in the login form/i)
    ).toBeInTheDocument();
});
