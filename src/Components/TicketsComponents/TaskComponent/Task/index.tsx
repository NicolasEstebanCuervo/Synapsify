import { useState, useEffect } from "react";
import { ITask, useContextFnc } from "../../../../Context";
import styled from "@emotion/styled";
import ExitIcon from "../../../../Assets/Icons/ExitIcon";
import * as color from "../../../../Theme";
import EditIcon from "../../../../Assets/Icons/EditIcon";
import { useNavigate } from "react-router-dom";

export const Task = ({ task }: { task: ITask }) => {
    const { taskDelete } = useContextFnc();
    const [isChecked, setIsChecked] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const savedCheckboxValue = localStorage.getItem(
            `task_${task.idTask}_isChecked`
        );
        if (savedCheckboxValue !== null) {
            setIsChecked(savedCheckboxValue === "true");
        }
    }, [task.idTask]);

    const taskDeleteFnc = () => {
        taskDelete(task.idTask);
    };

    const handleCheckboxChange = () => {
        const newValue = !isChecked;
        setIsChecked(newValue);
        localStorage.setItem(
            `task_${task.idTask}_isChecked`,
            newValue.toString()
        );
    };

    const editTask = () => {
        navigate("/task/form", { state: { isEdit: true, task: task } });
    };

    return (
        <Container>
            <TaskContainer>
                <InfoTask>
                    <Input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        data-testid="check-box"
                    />
                    <TextTask>
                        <Title>{task.titleTask}</Title>
                        <Description>{task.descriptionTask}</Description>
                    </TextTask>
                </InfoTask>
                <TaskButtons>
                    <Button>
                        <EditIcon
                            data-testid="edit-button"
                            onClick={()=>editTask()}
                        ></EditIcon>
                    </Button>
                    <Button>
                        <ExitIcon
                            data-testid="delete-button"
                            onClick={taskDeleteFnc}
                        ></ExitIcon>
                    </Button>
                </TaskButtons>
            </TaskContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 400px) {
        position: relative;
    }
`;

const TaskContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const InfoTask = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 700px) {
        gap: 0.5rem;
    }
`;

const Input = styled.input`
    width: 1.1rem;
`;

const TextTask = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.2rem;
`;

const Title = styled.h2`
    color: ${color.textPrimaryColor};
    font-size: 1.3rem;
    margin: 0;

    @media (max-width: 1000px) {
        font-size: 1.2rem;
    }

    @media (max-width: 700px) {
        font-size: 1.1rem;
    }

    @media (max-width: 400px) {
        font-size: 5vw;
    }

    @media (max-width: 300px) {
        font-size: 6vw;
    }

    @media (max-width: 250px) {
        font-size: 7vw;
    }
`;

const Description = styled.h3`
    color: ${color.textSecondaryColor};
    font-size: 1.2rem;
    margin: 0;

    @media (max-width: 1000px) {
        font-size: 1.1rem;
    }

    @media (max-width: 700px) {
        font-size: 1rem;
    }

    @media (max-width: 400px) {
        font-size: 4vw;
    }

    @media (max-width: 300px) {
        font-size: 5vw;
    }

    @media (max-width: 250px) {
        font-size: 5.5vw;
    }
`;

const TaskButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (max-width: 700px) {
        gap: 0;
    }

    @media (max-width: 400px) {
        flex-direction: column;
    }
`;

const Button = styled.button`
    background: none;
    border: none;
    color: ${color.textPrimaryColor};
`;
