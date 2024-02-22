import { ChangeEvent } from "react";
import { ITicket, useContextFnc } from "../../../Context";
import styled from "@emotion/styled";
import * as color from "../../../Theme";

interface FormTicketsProps {
    ticket?: ITicket;
    setEdit?: React.Dispatch<React.SetStateAction<boolean>>;
    text: string;
}

export const FormTickets: React.FC<FormTicketsProps> = ({
    ticket,
    setEdit,
    text,
}) => {
    const {
        titleTicket,
        assigneeTicket,
        priorityTicket,
        changeTitleTicket,
        changeAssigneeTicket,
        changePriorityTicket,
        handleSubmitTicket,
        updateTicket,
        getIdTicket,
        tickets,
        toggleNewTicket
    } = useContextFnc();

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        changeTitleTicket(e);
    };

    const onChangeAssignee = (e: ChangeEvent<HTMLInputElement>) => {
        changeAssigneeTicket(e);
    };

    const onChangePriority = (e: ChangeEvent<HTMLInputElement>) => {
        changePriorityTicket(e);
    };

    const toggleNewTicketFnc = () => {
        toggleNewTicket();
    };


    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (ticket) {
            updateTicket(ticket.idTicket);
        } else {
            handleSubmitTicket();
        }
        if (setEdit) {
            setEdit(false);
        }
        getIdTicket("");
    };

    return (
        <SectionFormTickets>
            <ContainerFormTickets>
                <TitleFormTickets>{text}</TitleFormTickets>
                <TextFormTickets>
                    Create a ticket for your project.
                </TextFormTickets>
                <Form data-testid="ticket-form" action="" onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        onChange={onChangeTitle}
                        value={titleTicket}
                        placeholder="Title"
                    />
                    <Input
                        type="text"
                        onChange={onChangeAssignee}
                        value={assigneeTicket}
                        placeholder="Assignee"
                    />
                    <Input
                        type="text"
                        onChange={onChangePriority}
                        value={priorityTicket}
                        placeholder="Priority"
                    />
                    <Button type="submit">Create a ticket</Button>
                    {tickets.length > 0 && (
                        <Button onClick={()=>(toggleNewTicketFnc)}>Return to menu</Button>
                    )}
                </Form>
            </ContainerFormTickets>
        </SectionFormTickets>
    );
};

const SectionFormTickets = styled.main`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContainerFormTickets = styled.div`
    width: 40%;
`;

const TitleFormTickets = styled.h1`
    color: ${color.textColor};
    font-size: 3.5rem;
    font-weight: bold;
    text-align: left;
`;

const TextFormTickets = styled.h1`
    color: ${color.textColorGray};
    font-size: 1.2rem;
    text-align: left;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 4rem;
`;
const Input = styled.input`
    padding: 0.7rem 0.5rem;
    border-radius: 0.5rem;
    background: ${color.placeHolderColor};
    border: none;
    outline: 1px solid ${color.borderInputColor};
    color: ${color.textColor};
    font-size: 1.2rem;
    border: none;
`;

const Button = styled.button`
    width: 100%;
    border-radius: 0.5rem;
    border: none;
    padding: 0.7rem 0;
    background: ${color.tertiaryColor};
    color: ${color.textColor};
`;
