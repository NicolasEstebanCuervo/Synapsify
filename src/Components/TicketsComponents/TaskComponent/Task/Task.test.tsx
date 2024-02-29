import { fireEvent, render, screen } from "@testing-library/react";
import ContextAppComponent, { ITask} from "../../../../Context";
import { Task } from ".";
import { BrowserRouter } from "react-router-dom";

const taskTask: ITask = {
    idTicket: "idTicket",
    idTask: "idTask",
    titleTask: "Task test",
    descriptionTask: "Description task",
};

test("The task are in the document.", () => {
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <Task task={taskTask} />
            </BrowserRouter>
        </ContextAppComponent>
    );
    const task = screen.getByTestId("task");
    expect(task).toBeInTheDocument;
});

test("The task texts are in the document.", () => {
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <Task task={taskTask} />
            </BrowserRouter>
        </ContextAppComponent>
    );
    const titleTask = screen.getByText("Task test");
    expect(titleTask).toBeInTheDocument;
    const descriptionTask = screen.getByText("Description task");
    expect(descriptionTask).toBeInTheDocument;
});

test("The edit button works and are in the document.", () => {
    const mockIncrement = jest.fn();
    jest.mock("./", () => ({ handleEdit: mockIncrement }));
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <Task task={taskTask} />
            </BrowserRouter>
        </ContextAppComponent>
    );
    const editButton = screen.getByTestId("edit-icon");
    fireEvent.click(editButton);
    expect(editButton).toBeInTheDocument;
    expect(editButton).toHaveBeenCalled;
});

test("The delete button works and are in the document.", () => {
    const mockIncrement = jest.fn();
    jest.mock("./", () => ({ onDeleteTicket: mockIncrement }));
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <Task task={taskTask} />
            </BrowserRouter>
        </ContextAppComponent>
    );
    const deleteButton = screen.getByTestId("exit-icon");
    fireEvent.click(deleteButton);
    expect(deleteButton).toBeInTheDocument;
    expect(deleteButton).toHaveBeenCalled;
});