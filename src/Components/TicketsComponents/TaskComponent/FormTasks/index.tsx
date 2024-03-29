import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { ITask, useContextFnc } from "../../../../Context";
import * as color from "../../../../Theme";

interface FormTicketsProps {
    ticketId: string | "";
    task?: ITask;
    setEdit?: React.Dispatch<React.SetStateAction<boolean>>;
    text: string;
}

export const FormTasks: React.FC<FormTicketsProps> = ({
    ticketId,
    task,
    setEdit,
    text,
}) => {
    const { tasks, updateTasks, toggleHiddenTicket} = useContextFnc();
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
        <SectionFormTickets>
            <ContainerFormTickets>
                <TitleFormTickets>{text}</TitleFormTickets>
                <TextFormTickets>
                    Create a task to organize yourself better
                </TextFormTickets>
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

                    <Button
                        type="submit"
                        disabled={
                            !setEdit &&
                            (!titleTask.trim() || !descriptionTask.trim())
                        }
                    >
                        Create a task
                    </Button>
                </Form>
            </ContainerFormTickets>
        </SectionFormTickets>
    );
};

const SectionFormTickets = styled.main`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContainerFormTickets = styled.div`
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

const TitleFormTickets = styled.h1`
    color: ${color.textColor};
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

const TextFormTickets = styled.h1`
    color: ${color.textColorGray};
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
    background: ${color.placeHolderColor};
    border: none;
    outline: 1px solid ${color.borderInputColor};
    color: ${color.textColor};
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
    background: ${color.tertiaryColor};
    color: ${color.textColor};

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
