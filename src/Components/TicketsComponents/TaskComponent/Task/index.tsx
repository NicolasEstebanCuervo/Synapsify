import React, { useState } from "react";
import { ITask, useContextFnc } from "../../../../Context";
import styled from "@emotion/styled";
import { FormTasks } from "../FormTasks";
import ExitIcon from "../../../../Assets/Icons/ExitIcon";
import * as color from "../../../../Theme";

export const Task = ({ task }: { task: ITask }) => {
    const { taskDelete } = useContextFnc();
    const [edit, setEdit] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const taskDeleteFnc = () => {
        taskDelete(task.idTask);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleEdit = ()=>{
        setEdit(true)
    }

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
                <ContainerTask>
                    <FirstSubContainerTask>
                        <Input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <ContainerTextsTask>
                            <TitleTask> {task.titleTask}</TitleTask>
                            <DescriptionTask>

                                {task.descriptionTask}
                            </DescriptionTask>
                        </ContainerTextsTask>
                    </FirstSubContainerTask>
                    <SecondSubContainerTask>
                        <Button onClick={handleEdit}>Edit</Button>
                        <Button>
                            <ExitIcon onClick={taskDeleteFnc}>
                                Borrar la tarea
                            </ExitIcon>
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
`;

const ContainerTask = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const FirstSubContainerTask = styled.div`
    display: flex;
    gap: 1rem;
`;

const Input = styled.input`
    width: 18px;
`;

const ContainerTextsTask = styled.div``;

const TitleTask = styled.h1`
    color: ${color.textColor};
    font-size: 1.2rem;
    margin: 0;
`;

const DescriptionTask = styled.h3`
    color: ${color.textColorGray};
    font-size: 1rem;
    margin: 0;
`;

const SecondSubContainerTask = styled.div`
    display: flex;
`;

const Button = styled.button`
    background: none;
    border: none;
    color: ${color.textColor};
    font-weight: 500;
    font-size: 1rem;
`;
