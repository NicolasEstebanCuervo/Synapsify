import styled from "@emotion/styled";
import { useContextFnc } from "../../../../Context";
import { Task } from "../Task";

export const Tasks = ({ ticketId }: { ticketId: string }) => {
    const { tasks } = useContextFnc();

    const filteredTasks = tasks.filter((task) => task.idTicket === ticketId);

    return (
        <ContainerTasks data-testid="tasks">
            {filteredTasks.map((task) => (
                <ContainerTask>
                <Task task={task} key={task.idTask} />
                </ContainerTask>
            ))}
        </ContainerTasks>
    );
};

const ContainerTasks = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
`;

const ContainerTask = styled.div`
    width: 100%;
`