import { OutputBlockData } from "@editorjs/editorjs";
import {
    ChangeEvent,
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

// Interface Ticket

export interface ITicket {
    idTicket: string;
    titleTicket: string;
    assigneeTicket: string;
    priorityTicket: string;
}

// Interface Task

export interface ITask {
    idTask: string;
    titleTask: string;
    descriptionTask: string;
    idTicket: string;
}

export interface INote {
    idNote: string;
    titleNote: string;
    assigneNote?: string;
    content?: OutputBlockData[] | any;
}

interface IContextProps {
    // Props globales
    hiddenTickets: string[];
    toggleHiddenTicket: (ticketId: string) => void;
    newTicket: boolean;
    toggleNewTicket: () => void;
    // Props Ticket
    idTicket: string;
    getIdTicket: (id: string) => void;
    ticket: ITicket | undefined;
    onClickTicket: (ticket: ITicket) => void;
    tickets: ITicket[];
    titleTicket: string;
    assigneeTicket: string;
    priorityTicket: string;
    changeTitleTicket: (e: ChangeEvent<HTMLInputElement>) => void;
    changeAssigneeTicket: (e: ChangeEvent<HTMLInputElement>) => void;
    changePriorityTicket: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmitTicket: () => void;
    ticketDelete: (id: string) => void;
    updateTicket: (id: string) => void;
    editTicket: (ticket: ITicket) => void;
    // Props Task
    tasks: ITask[];
    handleSubmitTask: (
        title: string,
        description: string,
        ticketId: string
    ) => void;
    updateTasks: (tasks: ITask[]) => void;
    taskDelete: (id: string) => void;
    // Props Note
    note: INote | undefined;
    notes: INote[];
    titleNote: string;
    content:string;
    setContent:Dispatch<SetStateAction<string>>;
    changeTitleNote: (e: ChangeEvent<HTMLInputElement>) => void;
    changeContent:(e: ChangeEvent<HTMLDivElement>)=>void;
    createNote: (note: INote) => void;
    noteDelete: (id: string) => void;
    handleCreateNote: (assignee: string) => void;
}

const ContextApp = createContext<IContextProps | undefined>(undefined);

export default function ContextAppComponent({
    children,
}: {
    children: ReactNode;
}) {
    const [hiddenTickets, setHiddenTickets] = useState<string[]>([]);
    const [newTicket, setNewTicket] = useState(false);

    const toggleHiddenTicket = (ticketId: string) => {
        setHiddenTickets((prevHiddenTickets) => {
            if (prevHiddenTickets.includes(ticketId)) {
                return prevHiddenTickets.filter((id) => id !== ticketId);
            } else {
                return [...prevHiddenTickets, ticketId];
            }
        });
    };

    const toggleNewTicket = () => {
        setNewTicket(!newTicket);
    };

    // Funtions for the tickets

    const [ticket, setTicket] = useState<ITicket>();
    const [titleTicket, setTitleTicket] = useState("");
    const [assigneeTicket, setAssigneeTicket] = useState("");
    const [priorityTicket, setPriorityTicket] = useState("");
    const [tickets, setTickets] = useState<ITicket[]>([]);
    const [idTicket, setIdTicket] = useState("");

    const onClickTicket = (ticket: ITicket) => {
        setTicket(ticket);
    };

    const changeTitleTicket = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleTicket(e.target.value);
    };

    const changeAssigneeTicket = (e: ChangeEvent<HTMLInputElement>) => {
        setAssigneeTicket(e.target.value);
    };

    const changePriorityTicket = (e: ChangeEvent<HTMLInputElement>) => {
        setPriorityTicket(e.target.value);
    };

    const getIdTicket = (idTicket: string) => {
        setIdTicket(idTicket);
    };

    const handleSubmitTicket = () => {
        if (newTicket) {
            setTitleTicket("");
            setAssigneeTicket("");
            setPriorityTicket("");
            setNewTicket(false);
        }

        if (
            !titleTicket.trim() ||
            !assigneeTicket.trim() ||
            !priorityTicket.trim()
        ) {
            return;
        }
        const ticketNew: ITicket = {
            idTicket: uuidv4(),
            titleTicket: titleTicket,
            assigneeTicket: assigneeTicket,
            priorityTicket: priorityTicket,
        };
        createTicket(ticketNew);
        setTitleTicket("");
        setAssigneeTicket("");
        setPriorityTicket("");
        setNewTicket(false);
    };

    const createTicket = (ticket: ITicket) => {
        setTickets((tickets) => [ticket, ...tickets]);
    };

    const editTicket = (ticket: ITicket) => {
        setTickets((tickets) => {
            const index = tickets.findIndex(
                (ticket) => ticket.idTicket === ticket.idTicket
            );
            if (index !== -1) {
                const updatedTickets = [...tickets];
                updatedTickets[index] = ticket;
                return updatedTickets;
            } else {
                return tickets;
            }
        });
    };

    const updateTicket = (idTicket: string) => {
        if (!titleTicket && !assigneeTicket && !priorityTicket) {
            return;
        }

        const updatedTickets = tickets.map((ticket) => {
            if (ticket.idTicket === idTicket) {
                return {
                    ...ticket,
                    titleTicket: titleTicket,
                    assigneeTicket: assigneeTicket,
                    priorityTicket: priorityTicket,
                };
            } else {
                return ticket;
            }
        });
        setTickets(updatedTickets);
        setTitleTicket("");
        setAssigneeTicket("");
        setPriorityTicket("");
    };

    const ticketDelete = (idTicket: string) => {
        setTickets(() =>
            tickets.filter((ticket) => ticket.idTicket !== idTicket)
        );
    };

    // -----------------------------

    // Funtions for the Tasks

    const [tasks, setTasks] = useState<ITask[]>([]);

    const updateTasks = (tasks: ITask[]) => {
        setTasks(tasks);
    };

    const handleSubmitTask = (
        title: string,
        description: string,
        ticketId: string
    ) => {
        const taskNew: ITask = {
            idTask: uuidv4(),
            titleTask: title,
            descriptionTask: description,
            idTicket: ticketId,
        };
        createTask(taskNew);
    };

    const createTask = (task: ITask) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const taskDelete = (idTask: string) => {
        setTasks(() => tasks.filter((task) => task.idTask !== idTask));
    };

    // ---------------------------

    // Function for the notes

    const [note, setNote] = useState<INote>();
    const [notes, setNotes] = useState<INote[]>([]);
    const [titleNote, setTitleNote] = useState("");
    const [content, setContent] = useState("");

    const changeTitleNote = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleNote(e.target.value);
    };

    const handleCreateNote = (assignee: string) => {
        const newNote: INote = {
            titleNote: titleNote,
            idNote: uuidv4(),
            assigneNote: assignee,
            content: content, 
        };
        createNote(newNote);
        setTitleNote("");
        setNote(newNote);
    };

    const changeContent = (e: ChangeEvent<HTMLDivElement>) => {
        setContent(e.target.textContent || "");
    };

    const createNote = (note: INote) => {
        setNotes((notes) => [note, ...notes]);
    };
    const noteDelete = (idNote: string) => {
        setNotes(() => notes.filter((note) => note.idNote !== idNote));
    };


        console.log(note?.content)

    return (
        <ContextApp.Provider
            value={{
                hiddenTickets,
                toggleHiddenTicket,
                newTicket,
                toggleNewTicket,
                ticket,
                onClickTicket,
                idTicket,
                getIdTicket,
                titleTicket,
                assigneeTicket,
                priorityTicket,
                tickets,
                changeTitleTicket,
                changeAssigneeTicket,
                changePriorityTicket,
                handleSubmitTicket,
                updateTicket,
                editTicket,
                ticketDelete,
                tasks,
                handleSubmitTask,
                taskDelete,
                updateTasks,
                note,
                notes,
                titleNote,
                content,
                setContent,
                changeTitleNote,
                changeContent,
                createNote,
                handleCreateNote,
                noteDelete,
            }}
        >
            {children}
        </ContextApp.Provider>
    );
}

export const useContextFnc = (): IContextProps => {
    const context = useContext(ContextApp);
    if (!context) {
        throw Error("Error in the context");
    }
    return context;
};
