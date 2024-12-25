import { fireEvent, render, screen } from "@testing-library/react";
import ContextAppComponent from "../../../../Context";
import { FormTasks } from ".";

test('Should show the "Create ticket" button when all inputs have text', async () => {
    render(
        <ContextAppComponent>
            <FormTasks />
        </ContextAppComponent>
    );

    const titleInput = screen.getByPlaceholderText("Title");
    const descriptionInput = screen.getByPlaceholderText("Description");

    fireEvent.change(titleInput, { target: { value: "Important bug" } });
    fireEvent.change(descriptionInput, {
        target: { value: "Fix the bug in login form." },
    });
    
    fireEvent.change(titleInput, { target: { value: "Important bug" } });
    fireEvent.change(descriptionInput, {
        target: { value: "Fix the bug in the login form" },
    });

    const button = await screen.findByTestId("create-task-button");
    expect(button).toBeInTheDocument();
});
