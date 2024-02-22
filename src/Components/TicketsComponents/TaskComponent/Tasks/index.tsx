import { useContextFnc } from "../../../../Context";
import { Task } from "../Task";

export const Tasks = ({ ticketId }: { ticketId: string }) => {
    const { tasks } = useContextFnc(); 

    const filteredTasks = tasks.filter(task => task.idTicket === ticketId);

    return (
        <>
            {
                filteredTasks.map(task => (
                    <Task task={task} key={task.idTask} />
                ))
            }
        </>
    );
};

