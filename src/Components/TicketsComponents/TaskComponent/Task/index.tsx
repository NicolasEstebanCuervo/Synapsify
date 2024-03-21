import React, { useState, useEffect } from "react";
import { ITask, useContextFnc } from "../../../../Context";
import styled from "@emotion/styled";
import { FormTasks } from "../FormTasks";
import ExitIcon from "../../../../Assets/Icons/ExitIcon";
import * as color from "../../../../Theme";
import EditIcon from "../../../../Assets/Icons/EditIcon";

export const Task = ({ task }: { task: ITask }) => {
    const { taskDelete } = useContextFnc();
    const [edit, setEdit] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

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

    const handleEdit = () => {
        setEdit(true);
    };

    return (
        <SectionTask>
            {edit ? (
                <>
                    <FormTasks
                        text="Edit the task"
                        ticketId=""
                        task={task}
                        setEdit={setEdit}
                    />
                </>
            ) : (
                <ContainerTask data-testid="task">
                    <FirstSubContainerTask>
                        <Input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            data-testid="check-box-cypress"
                        />
                        <ContainerTextsTask>
                            <TitleTask>{task.titleTask}</TitleTask>
                            <DescriptionTask>
                                {task.descriptionTask}
                            </DescriptionTask>
                        </ContainerTextsTask>
                    </FirstSubContainerTask>
                    <SecondSubContainerTask>
                        <Button>
                            <EditIcon data-testid="edit-icon" onClick={handleEdit}></EditIcon>
                        </Button>
                        <Button>
                            <ExitIcon data-testid="exit-icon" onClick={taskDeleteFnc}></ExitIcon>
                        </Button>
                    </SecondSubContainerTask>
                </ContainerTask>
            )}
        </SectionTask>
    );
};

const SectionTask = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 400px) {
        position: relative;
    }
`;

const ContainerTask = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const FirstSubContainerTask = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 700px) {
        gap: 0.5rem;
    }
`;

const Input = styled.input`
    width: 1.1rem;
`;

const ContainerTextsTask = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.2rem;
`;

const TitleTask = styled.h1`
    color: ${color.textColor};
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

const DescriptionTask = styled.h3`
    color: ${color.textColorGray};
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

const SecondSubContainerTask = styled.div`
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
    color: ${color.textColor};
`;
