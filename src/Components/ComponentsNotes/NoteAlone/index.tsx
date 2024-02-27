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

    useEffect(() => {
        if (!note) return;

        let initialContent;

        if (note.idNote === "ajsn1kasd") {
            initialContent = {
                blocks: [
                    {
                        type: "header",
                        data: {
                            text: "Urgent Fix Needed",
                            level: 2,
                        },
                    },
                    {
                        type: "paragraph",
                        data: {
                            text: "Description of the Issue:",
                        },
                    },
                    {
                        type: "paragraph",
                        data: {
                            text: "The application's login functionality is intermittently failing, causing users to be unable to access their accounts. This issue has been reported by multiple users and is affecting both desktop and mobile platforms.",
                        },
                    },
                    {
                        type: "header",
                        data: {
                            text: "Steps to Reproduce the Issue",
                            level: 3,
                        },
                    },
                    {
                        type: "list",
                        data: {
                            style: "unordered",
                            items: [
                                "Attempt to log in using valid credentials.",
                                "Notice that the login process either takes an unusually long time or results in an error message.",
                                "Retry logging in multiple times to confirm the consistency of the issue.",
                            ],
                        },
                    },
                    {
                        type: "paragraph",
                        data: {
                            text: "This issue requires urgent attention as it severely impacts user experience and prevents access to essential features of the application. Immediate investigation and resolution are needed to restore full functionality and minimize user frustration.",
                        },
                    },
                    {
                        type: "header",
                        data: {
                            text: "Additional Notes",
                            level: 3,
                        },
                    },
                    {
                        type: "paragraph",
                        data: {
                            text: "Upon further analysis, it appears that the issue might be related to recent updates in the authentication system. Any changes made to the authentication process should be thoroughly reviewed to identify potential bugs or misconfigurations.",
                        },
                    },
                    {
                        type: "paragraph",
                        data: {
                            text: "Additionally, user feedback suggests that the error occurs more frequently during peak usage hours, indicating a possible scalability issue. Load testing and performance optimization should be conducted to address this concern.",
                        },
                    },
                    {
                        type: "paragraph",
                        data: {
                            text: "It's crucial to communicate transparently with users about the progress of the investigation and any updates regarding the resolution of the issue. Timely updates will help maintain user trust and confidence in the application.",
                        },
                    },
                    {
                        type: "paragraph",
                        data: {
                            text: "Lastly, implementing robust monitoring and alerting mechanisms can help detect similar issues in the future before they escalate. Proactive measures will ensure a smoother user experience and minimize disruptions to service.",
                        },
                    },
                    {
                        type: "header",
                        data: {
                            text: "Recommendations for Immediate Action",
                            level: 3,
                        },
                    },
                    {
                        type: "list",
                        data: {
                            style: "ordered",
                            items: [
                                "Conduct a thorough investigation into the root cause of the login failure.",
                                "Roll back recent changes to the authentication system if necessary to restore functionality.",
                                "Deploy temporary fixes or workarounds to mitigate the impact on users while a permanent solution is developed.",
                                "Provide regular updates to users through email notifications, in-app messages, and social media channels.",
                            ],
                        },
                    },
                ],
            };
        } else {
            initialContent = {
                blocks: [
                    {
                        type: "header",
                        data: {
                            text: "User Profile Display Issue",
                            level: 2,
                        },
                    },
                    {
                        type: "paragraph",
                        data: {
                            text: "Description of the Issue:",
                        },
                    },
                    {
                        type: "paragraph",
                        data: {
                            text: "Users are encountering various issues related to the display of their profiles within the application. These issues range from incorrect profile pictures and missing bio information to discrepancies in account settings and display formatting errors. The inconsistencies in profile display are negatively impacting user experience and causing frustration among users.",
                        },
                    },
                    {
                        type: "header",
                        data: {
                            text: "Steps to Reproduce the Issue",
                            level: 3,
                        },
                    },
                    {
                        type: "list",
                        data: {
                            style: "unordered",
                            items: [
                                "Access the user profile section of the application.",
                                "Observe the profile display for any inaccuracies or missing information.",
                                "Attempt to edit profile information and verify if changes are reflected correctly in the display.",
                            ],
                        },
                    },
                    {
                        type: "paragraph",
                        data: {
                            text: "It's crucial to address these profile display issues promptly to ensure that users have access to accurate and consistent profile information. Users rely on their profiles for various interactions within the platform, including networking, communication, and personalization features. Resolving these issues will enhance user satisfaction and retention.",
                        },
                    },
                    {
                        type: "header",
                        data: {
                            text: "Root Cause Analysis",
                            level: 3,
                        },
                    },
                    {
                        type: "paragraph",
                        data: {
                            text: "Preliminary investigations indicate that the profile display issues may stem from recent updates to the application's backend systems. Changes in data retrieval mechanisms or database schema could be contributing to the discrepancies in profile information. Additionally, compatibility issues with certain devices, browsers, or screen resolutions may exacerbate the problem.",
                        },
                    },
                    {
                        type: "paragraph",
                        data: {
                            text: "A thorough analysis of the codebase, database queries, and frontend rendering processes is necessary to identify the root cause of the profile display issues. This analysis should encompass examining recent code changes, reviewing database configurations, and conducting compatibility testing across various platforms and devices.",
                        },
                    },
                    {
                        type: "header",
                        data: {
                            text: "Recommended Actions",
                            level: 3,
                        },
                    },
                    {
                        type: "list",
                        data: {
                            style: "ordered",
                            items: [
                                "Conduct a comprehensive review of recent code changes and database configurations.",
                                "Implement debugging and logging mechanisms to track data retrieval and rendering processes.",
                                "Perform compatibility testing across different devices, browsers, and screen resolutions.",
                                "Communicate transparently with users about the investigation progress and expected resolution timeline.",
                            ],
                        },
                    },
                    {
                        type: "paragraph",
                        data: {
                            text: "Taking proactive measures to address the root cause of the profile display issues and communicating effectively with users will demonstrate the commitment to delivering a seamless user experience. Continuous monitoring and testing will be essential to prevent similar issues from recurring in the future.",
                        },
                    },
                    {
                        type: "header",
                        data: {
                            text: "Conclusion",
                            level: 3,
                        },
                    },
                    {
                        type: "paragraph",
                        data: {
                            text: "Resolving the user profile display issues is paramount to maintaining user satisfaction and trust in the application. By identifying and addressing the root cause of these issues and implementing proactive measures to prevent recurrence, we can ensure a smooth and reliable user experience for all users.",
                        },
                    },
                ],
            };
        }

        setContent(initialContent);
    }, [note]);

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
