import { useRef, useEffect, useState, MutableRefObject } from "react";
import EditorJS, { EditorConfig } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";
import * as color from "../../../Theme";
import { useContextFnc } from "../../../Context";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";

export const NoteAlone = () => {
    const { id } = useParams();
    const { note } = useContextFnc();
    const editorInstance = useRef<EditorJS | null>(null);
    const editorRef = useRef<HTMLDivElement>(null);
    const [content, setContent] = useState<any>(null);

    const handleEditorChange = (
        editor: MutableRefObject<EditorJS | null>,
        note: any
    ) => {
        if (!editor.current) return;
        editor.current
            .save()
            .then((outputData) => {
                Object.assign(note, outputData);
                localStorage.setItem("note", JSON.stringify(note));
            })
            .catch((error) => {});
    };

    useEffect(() => {
        const config: EditorConfig = {
            placeholder: "Document your inspirations...",
            holder: "editor",
            onChange: () => handleEditorChange(editorInstance, note),
            tools: {
                header: {
                    class: Header,
                    inlineToolbar: true,
                },
                list: {
                    class: List,
                    inlineToolbar: true,
                },
                paragraph: {
                    class: Paragraph,
                    inlineToolbar: true,
                },
            },
        };
        editorInstance.current = new EditorJS(config);
        return () => {
            if (editorInstance.current) {
                editorInstance.current.destroy();
                editorInstance.current = null;
            }
        };
    }, []);
    useEffect(() => {
        if (editorInstance.current && content) {
            editorInstance.current.isReady
                .then(() => {
                    return editorInstance.current?.render(content);
                })
                .catch((error) => {
                    return console.error(error);
                });
        }
    }, [content]);

    useEffect(() => {
        const storedData = JSON.parse(
            window.localStorage.getItem("note") || "{}"
        );
        setContent(storedData);
    }, [id]);

    return (
        <SectionNote data-testid="note-alone">
            <ContainerTexts>
                <TitleNote>{note?.titleNote}</TitleNote>
                <AssigneNote>
                    {note?.assigneNote ? `${note?.assigneNote}` : "Unassigned"}
                </AssigneNote>
            </ContainerTexts>
            <OptionColors>
                <TextArea id="editor" ref={editorRef}></TextArea>
            </OptionColors>
        </SectionNote>
    );
};
const SectionNote = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    position: relative;
    gap: 2rem;
`;

const ContainerTexts = styled.div``;

const TitleNote = styled.h1`
    color: ${color.textColor};
    font-size: 4rem;
    font-weight: bold;
    text-align: left;
`;

const AssigneNote = styled.h3`
    display: inline;
    width: auto;
    background: ${color.grayColor};
    padding: 0.2rem 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    color: ${color.textColor};
`;

const OptionColors = styled.div`
    .ce-toolbar__plus svg,
    .ce-toolbar__settings-btn svg {
        color: ${color.textColor};
        :hover {
            color: ${color.primaryColor};
        }
    }
    .ce-toolbar__content {
        position: static;
    }
    .ce-block__content {
        max-width: 100%;
    }
    .ce-inline-toolbar__buttons {
        color: ${color.primaryColor};
    }
    .ce-inline-toolbar__dropdown {
        color: ${color.primaryColor};
    }
    .ce-conversion-toolbar__label {
        color: ${color.primaryColor} !important;
    }
    .ce-conversion-tool--focused {
        color: ${color.primaryColor} !important;
    }
    .ce-conversion-tool {
        color: ${color.primaryColor} !important;
    }
    min-width: 100%;
    min-height: 100vh;
`;
const TextArea = styled.div`
    min-width: 80%;
    min-height: 100vh;
    color: ${color.textColorGray};
    :focus-visible {
        outline: none;
    }
`;
