import { useContextFnc } from "../../../Context";
import { Note } from "../Note";

export const Notes = () => {
    const { notes } = useContextFnc();
    return (
        <>
            {notes.map((note, index) => (
                <Note
                    assignee={note.assigneNote}
                    note={note}
                    number={index + 1}
                    key={note.idNote}
                />
            ))}
        </>
    );
};
