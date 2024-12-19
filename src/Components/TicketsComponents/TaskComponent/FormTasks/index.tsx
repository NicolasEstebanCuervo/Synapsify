import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { ITask, useContextFnc } from "../../../../Context";
import * as color from "../../../../Theme";

interface FormTicketsProps {
    ticketId: string | "";
    task?: ITask;
    setEdit?: React.Dispatch<React.SetStateAction<boolean>>;
    text: string;
    edit?: boolean;
}

export const FormTasks = ({
    ticketId,
    task,
    setEdit,
    edit,
    text,
}: FormTicketsProps) => {
    const { tasks, updateTasks, toggleHiddenTicket } = useContextFnc();
    const { handleSubmitTask } = useContextFnc();
    const [titleTask, setTitleTask] = useState(task?.titleTask || "");
    const [descriptionTask, setDescriptionTask] = useState(
        task?.descriptionTask || ""
    );

    const setHidden = () => {
        toggleHiddenTicket(ticketId);
    };

    const updateTask = (idTask: string) => {
        if (!titleTask.trim() || !descriptionTask.trim()) {
            return;
        }

        const updatedTasks = tasks.map((task: ITask) => {
            if (task.idTask === idTask) {
                return {
                    ...task,
                    titleTask: titleTask,
                    descriptionTask: descriptionTask,
                };
            } else {
                return task;
            }
        });
        updateTasks(updatedTasks);
    };

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleTask(e.target.value);
    };

    const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDescriptionTask(e.target.value);
    };

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!setEdit && (!titleTask.trim() || !descriptionTask.trim())) {
            return;
        }

        if (task) {
            updateTask(task.idTask);
        }

        if (setEdit) {
            setEdit(false);
        }
        handleSubmitTask(titleTask, descriptionTask, ticketId);
        setHidden();
    };

    return (
        <Container>
            <FormContainer>
                <Title>{text}</Title>
                <Subtitle>Create a task to organize yourself better</Subtitle>
                <Form data-testid="task-form" onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="Title"
                        value={titleTask}
                        onChange={handleTitleChange}
                        maxLength={30}
                    />
                    <Input
                        type="text"
                        placeholder="Description"
                        value={descriptionTask}
                        onChange={handleDescriptionChange}
                        maxLength={50}
                    />

                    {titleTask.length > 0 &&
                        descriptionTask.length > 0 &&
                        (edit ? (
                            <>
                                <Button type="submit">Edit task</Button>
                            </>
                        ) : (
                            <>
                                <Button data-testid="create-task-button" type="submit">Create a task</Button>
                            </>
                        ))}
                </Form>
            </FormContainer>
        </Container>
    );
};

const Container = styled.section`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FormContainer = styled.div`
    width: 60%;

    @media (max-width: 1000px) {
        width: 75%;
    }

    @media (max-width: 700px) {
        width: 80%;
    }

    @media (max-width: 300px) {
        width: 90%;
    }
`;

const Title = styled.h1`
    color: ${color.textPrimaryColor};
    font-size: 3.5rem;
    font-weight: bold;
    text-align: left;

    @media (max-width: 1000px) {
        font-size: 3rem;
    }

    @media (max-width: 700px) {
        font-size: 2.5rem;
    }

    @media (max-width: 400px) {
        font-size: 10vw;
        text-align: center;
    }

    @media (max-width: 250px) {
        font-size: 12vw;
    }
`;

const Subtitle = styled.h2`
    color: ${color.textSecondaryColor};
    font-size: 1.2rem;
    text-align: left;

    @media (max-width: 1000px) {
        font-size: 1.1rem;
    }

    @media (max-width: 700px) {
        font-size: 1rem;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
        text-align: center;
    }

    @media (max-width: 250px) {
        font-size: 7vw;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 4rem;

    @media (max-width: 1000px) {
        margin-top: 3.5rem;
    }

    @media (max-width: 700px) {
        margin-top: 3rem;
    }

    @media (max-width: 400px) {
        margin-top: 2.5rem;
    }

    @media (max-width: 250px) {
        margin-top: 2rem;
    }
`;
const Input = styled.input`
    padding: 0.7rem 0.5rem;
    border-radius: 0.5rem;
    background: ${color.placeholderColor};
    border: none;
    outline: 1px solid ${color.inputBorderColor};
    color: ${color.textPrimaryColor};
    font-size: 1.2rem;
    border: none;

    @media (max-width: 1000px) {
        font-size: 1.1rem;
    }

    @media (max-width: 700px) {
        font-size: 1rem;
    }

    @media (max-width: 400px) {
        padding: 0.4rem 0.5rem;
        font-size: 5vw;
    }

    @media (max-width: 250px) {
        font-size: 7vw;
    }
`;

const Button = styled.button`
    width: 100%;
    border-radius: 0.5rem;
    border: none;
    padding: 0.7rem 0;
    background: ${color.accentColor};
    color: ${color.textPrimaryColor};

    @media (max-width: 1000px) {
        font-size: 1rem;
    }

    @media (max-width: 400px) {
        padding: 0.4rem 0;
        font-size: 5vw;
    }

    @media (max-width: 250px) {
        font-size: 6vw;
    }
`;
