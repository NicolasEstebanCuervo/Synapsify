import { useRef, useEffect, useState, ChangeEvent } from "react";
import EditorJS, { EditorConfig } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";
import ImageTool from "@editorjs/image";
import * as color from "../../../Theme";
import { useContextFnc } from "../../../Context";
import styled from "@emotion/styled";

export const NoteAlone = () => {
    const { note, changeContent } = useContextFnc();

    const editorInstance = useRef<EditorJS | null>(null);
    const editorRef = useRef<HTMLDivElement>(null);

    const onChangeContent = (e: ChangeEvent<HTMLDivElement>) => {
        changeContent(e);
    };
    

    useEffect(() => {
        const config: EditorConfig = {
            holder: "editor",
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
                image: {
                    class: ImageTool,
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

    return (
        <SectionNote>
            <TitleNote>{note?.titleNote}</TitleNote>
            <OptionColors>
                <TextArea
                    onInput={onChangeContent}
                    id="editor"
                    ref={editorRef}
                    contentEditable="true"
                ></TextArea>
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
`;

const TitleNote = styled.h1`
    color: ${color.textColor};
    font-size: 4rem;
    font-weight: bold;
    text-align: left;
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
    color: #969ea5;

    :focus-visible {
        outline: none;
    }
`;
