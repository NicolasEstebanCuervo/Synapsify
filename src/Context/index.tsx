import {
    ChangeEvent,
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
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

// Interface Note

export interface INote {
    idNote: string;
    NoteTitle: string;
    NoteAssignee?: string;
}

interface IContextProps {
    // Global props.
    hiddenTickets: string[];
    toggleHiddenTicket: (ticketId: string) => void;
    newTicket: boolean;
    toggleNewTicket: () => void;
    // Tickets props.
    idTicket: string;
    getIdTicket: (id: string) => void;
    ticket: ITicket | undefined;
    onClickTicket: (ticket: ITicket) => void;
    tickets: ITicket[];
    titleTicket: string;
    assigneeTicket: string;
    priorityTicket: string;
    setTitle: Dispatch<SetStateAction<string>>;
    setAssigneeTicket: Dispatch<SetStateAction<string>>;
    setPriorityTicket: Dispatch<SetStateAction<string>>;
    changeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
    changeAssigneeTicket: (e: ChangeEvent<HTMLInputElement>) => void;
    changePriorityTicket: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmitTicket: () => void;
    ticketDelete: (id: string) => void;
    updateTicket: (id: string) => void;
    editTicket: (ticket: ITicket) => void;
    // Task props.
    tasks: ITask[];
    task: ITask | undefined;
    onClickTask: (task: ITask) => void;
    handleSubmitTask: (
        title: string,
        description: string,
        ticketId: string
    ) => void;
    updateTasks: (tasks: ITask[]) => void;
    taskDelete: (id: string) => void;
    // Notes props.
    note: INote | undefined;
    notes: INote[];
    NoteTitle: string;
    onClickNote: (note: INote) => void;
    changeNoteTitle: (e: ChangeEvent<HTMLInputElement>) => void;
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
    const [titleTicket, setTitle] = useState("");
    const [assigneeTicket, setAssigneeTicket] = useState("");
    const [priorityTicket, setPriorityTicket] = useState("");
    const [tickets, setTickets] = useState<ITicket[]>([]);
    const [idTicket, setIdTicket] = useState("");

    useEffect(() => {
        const defaultTickets: ITicket[] = [
            {
                idTicket: "ajsn1kasd",
                titleTicket: "Urgent Fix Needed",
                assigneeTicket: "John Smith",
                priorityTicket: "High",
            },
            {
                idTicket: "wzxco1sd",
                titleTicket: "User Profile Display Issue",
                assigneeTicket: "Emily Brown",
                priorityTicket: "Medium",
            },
        ];
        setTickets(defaultTickets);

        const defaultNotes: INote[] = [
            {
                idNote: "ajsn1kasd",
                NoteTitle: "Urgent Fix Needed",
                NoteAssignee: "John Smith",
            },
            {
                idNote: "wzxco1sd",
                NoteTitle: "User Profile Display Issue",
                NoteAssignee: "Emily Brown",
            },
        ];
        setNotes(defaultNotes);
    }, []);

    const onClickTicket = (ticket: ITicket) => {
        setTicket(ticket);
        localStorage.setItem("ticket", JSON.stringify(ticket));
    };

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
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
            setTitle("");
            setAssigneeTicket("");
            setPriorityTicket("");
            setNewTicket(false);
        }

        if (!titleTicket.trim() || !assigneeTicket.trim() || !priorityTicket.trim()) {
            return;
        }
        const ticketNew: ITicket = {
            idTicket: uuidv4(),
            titleTicket: titleTicket,
            assigneeTicket: assigneeTicket,
            priorityTicket: priorityTicket,
        };
        createTicket(ticketNew);
        setTitle("");
        setAssigneeTicket("");
        setPriorityTicket("");
        setNewTicket(false);
    };

    const createTicket = (ticket: ITicket) => {
        setTickets((tickets) => {
            const updateTickets = [ticket, ...tickets];
            localStorage.setItem("tickets", JSON.stringify(updateTickets));
            return updateTickets;
        });
    };

    const editTicket = (ticketEdit: ITicket) => {
        setTickets((tickets) => {
            const index = tickets.findIndex(
                (ticket) => ticket.idTicket === ticketEdit.idTicket
            );
            if (index !== -1) {
                const updatedTickets = [...tickets];
                updatedTickets[index] = ticketEdit;
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
        setTitle("");
        setAssigneeTicket("");
        setPriorityTicket("");
    };

    const ticketDelete = (idTicket: string) => {
        setTickets((prevTicket) =>
            prevTicket.filter((ticket) => ticket.idTicket !== idTicket)
        );
        const updatedTickets = tickets.filter(
            (ticket) => ticket.idTicket !== idTicket
        );
        localStorage.setItem("tickets", JSON.stringify(updatedTickets));
    };

    useEffect(() => {
        const storedTickets = localStorage.getItem("tickets");
        if (storedTickets) {
            setTickets(JSON.parse(storedTickets));
        }

        const storedTicket = localStorage.getItem("ticket");
        if (storedTicket) {
            setTicket(JSON.parse(storedTicket));
        }
    }, []);

    // Funtions for the Tasks

    const [tasks, setTasks] = useState<ITask[]>([]);
    const [task, setTask] = useState<ITask>();

    useEffect(() => {
        const defaultTask: ITask[] = [
            {
                idTask: "asd",
                idTicket: "ajsn1kasd",
                titleTask: "Investigate Root Cause",
                descriptionTask:
                    "Analyze server logs, error messages, and infrastructure components to identify why the website is down.",
            },
            {
                idTask: "qasda",
                idTicket: "ajsn1kasd",
                titleTask: "Restore Web Services",
                descriptionTask:
                    "Bring the website back online by restarting services, checking configurations, and verifying connectivity.",
            },
            {
                idTask: "zxcz",
                idTicket: "ajsn1kasd",
                titleTask: "Notify Stakeholders",
                descriptionTask:
                    "Inform internal teams, stakeholders, and customers about the outage and expected resolution time.",
            },
            {
                idTask: "asdeasf",
                idTicket: "wzxco1sd",
                titleTask: "Website Unavailable: Urgent Fix Needed",
                descriptionTask: "High",
            },
            {
                idTask: "vcbjgfg",
                idTicket: "wzxco1sd",
                titleTask: "User Profile Display Issue",
                descriptionTask:
                    "User profiles are not rendering correctly on the homepage.",
            },
            {
                idTask: "zxcbthy",
                idTicket: "wzxco1sd",
                titleTask: "Image Loading Error",
                descriptionTask: "Profile images fail to load properly.",
            },
            {
                idTask: "qweasdzvx",
                idTicket: "wzxco1sd",
                titleTask: "Non-Functional Edit Button",
                descriptionTask:
                    "The edit button in the user profile does not perform any action.",
            },
            {
                idTask: "wzxco1sd",
                idTicket: "wzxco1sd",
                titleTask: "Missing Contact Information",
                descriptionTask:
                    "Contact information (email and phone number) is absent from the user profile.",
            },
        ];
        setTasks(defaultTask);
    }, []);

    const onClickTask = (task: ITask) => {
        setTask(task);
    };

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
        setTasks((prevTasks) => {
            const updateTasks = [...prevTasks, task];
            localStorage.setItem("tasks", JSON.stringify(updateTasks));
            return updateTasks;
        });
    };

    const taskDelete = (idTask: string) => {
        setTasks((prevTask) =>
            prevTask.filter((taks) => taks.idTask !== idTask)
        );
        const updatedTasks = tasks.filter((task) => task.idTask !== idTask);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }

        const storedTask = localStorage.getItem("task");
        if (storedTask) {
            setTask(JSON.parse(storedTask));
        }
    }, []);

    // Function for the notes

    const [note, setNote] = useState<INote>();
    const [notes, setNotes] = useState<INote[]>([]);
    const [NoteTitle, setNoteTitle] = useState("");

    const onClickNote = (note: INote) => {
        setNote(note);
        localStorage.setItem("note", JSON.stringify(note));
    };

    const changeNoteTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setNoteTitle(e.target.value);
    };

    const handleCreateNote = (assignee: string) => {
        const newNote: INote = {
            NoteTitle: NoteTitle,
            idNote: uuidv4(),
            NoteAssignee: assignee,
        };
        createNote(newNote);
        setNoteTitle("");
        setNote(newNote);
    };

    const createNote = (note: INote) => {
        setNotes((prevNotes) => {
            const updatedNotes = [note, ...prevNotes];
            localStorage.setItem("notes", JSON.stringify(updatedNotes));
            localStorage.setItem(
                "note",
                JSON.stringify(
                    updatedNotes.map(({ idNote, NoteTitle, NoteAssignee }) => ({
                        idNote,
                        NoteTitle,
                        NoteAssignee,
                    }))
                )
            );
            localStorage.setItem(note.idNote, JSON.stringify(note));
            return updatedNotes;
        });
    };

    const noteDelete = (idNote: string) => {
        setNotes((prevNotes) =>
            prevNotes.filter((note) => note.idNote !== idNote)
        );
        const updatedNotes = notes.filter(
            (ticket) => ticket.idNote !== idTicket
        );
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
    };

    useEffect(() => {
        const storedNotes = localStorage.getItem("notes");
        if (storedNotes) {
            setNotes(JSON.parse(storedNotes));
        }

        const storedNote = localStorage.getItem("note");
        if (storedNote) {
            setNote(JSON.parse(storedNote));
        }
    }, []);

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
                setTitle,
                setAssigneeTicket,
                setPriorityTicket,
                changeTitle,
                changeAssigneeTicket,
                changePriorityTicket,
                handleSubmitTicket,
                updateTicket,
                editTicket,
                ticketDelete,
                tasks,
                task,
                onClickTask,
                handleSubmitTask,
                taskDelete,
                updateTasks,
                note,
                notes,
                NoteTitle,
                onClickNote,
                changeNoteTitle,
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
