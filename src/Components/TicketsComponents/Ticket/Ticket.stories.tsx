import { ReactNode } from "react";
import { Ticket } from "./";
import { ContextStory } from "../../../../.storybook/ContextStory";

const Provider = ({ children }: { children: ReactNode }) => {
    return (
        <ContextStory.Provider
            value={{
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
            }}
        >
            {children}
        </ContextStory.Provider>
    );
};

export default {
    title: "Ticket",
    component: Ticket,
    decorators: [(Story: any) => <Provider>{Story()}</Provider>],
};

const Template = (args: any) => {
    return <Ticket {...args} />;
};

export const Default = Template.bind({});
