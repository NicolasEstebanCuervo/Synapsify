import styled from "@emotion/styled";
import { useContextFnc } from "../../../../Context";
import { Task } from "../Task";

export const Tasks = ({ ticketId }: { ticketId: string }) => {
    const { tasks } = useContextFnc();

    const filteredTasks = tasks.filter((task) => task.idTicket === ticketId);

    return (
        <TasksContainer data-testid="tasks">
            {filteredTasks.map((task) => (
                <TaskContainer key={task.idTask}>
                    <Task task={task} />
                </TaskContainer>
            ))}
        </TasksContainer>
    );
};

const TasksContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
`;

const TaskContainer = styled.div`
    width: 100%;
`;
