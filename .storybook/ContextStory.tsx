import { ChangeEvent, createContext } from "react";

interface PropsContext {
    idTicket: string;
    titleTicket: string;
    assigneeTicket: string;
    priorityTicket: string;
    idTask: string;
    titleTask: string;
    descriptionTask: string;
    idNote: string;
    titleNote: string;
    assigneeNote?: string;
    hiddenTickets: string[];
    toggleHiddenTicket: () => void;
    newTicket: boolean;
    toggleNewTicket: () => void;
    getIdTicket: () => void;
    ticket: [];
    onClickTicket: () => void;
    tickets: [];
    changeTitleTicket: (e: ChangeEvent<HTMLInputElement>) => void;
    changeAssigneeTicket: (e: ChangeEvent<HTMLInputElement>) => void;
    changePriorityTicket: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmitTicket: () => void;
    ticketDelete: () => void;
    updateTicket: () => void;
    editTicket: () => void;
    tasks: [];
    task: [];
    onClickTask: () => void;
    handleSubmitTask: () => void;
    updateTasks: () => void;
    taskDelete: () => void;
    note: [];
    notes: [];
    onClickNote: () => void;
    changeTitleNote: (e: ChangeEvent<HTMLInputElement>) => void;
    createNote: () => void;
    noteDelete: () => void;
    handleCreateNote: () => void;
}
export const ContextStory = createContext<PropsContext>({
    idTicket: "",
    titleTicket: "",
    assigneeTicket: "",
    priorityTicket: "",
    idTask: "",
    titleTask: "",
    descriptionTask: "",
    idNote: "",
    titleNote: "",
    assigneeNote: "",
    hiddenTickets: [],
    toggleHiddenTicket: () => {},
    newTicket: false,
    toggleNewTicket: () => {},
    getIdTicket: () => {},
    ticket: [],
    onClickTicket: () => {},
    tickets: [],
    changeTitleTicket: () => {},
    changeAssigneeTicket: () => {},
    changePriorityTicket: () => {},
    handleSubmitTicket: () => {},
    ticketDelete: () => {},
    updateTicket: () => {},
    editTicket: () => {},
    tasks: [],
    task: [],
    onClickTask: () => {},
    handleSubmitTask: () => {},
    updateTasks: () => {},
    taskDelete: () => {},
    note: [],
    notes: [],
    onClickNote: () => {},
    changeTitleNote: () => {},
    createNote: () => {},
    noteDelete: () => {},
    handleCreateNote: () => {},
});
