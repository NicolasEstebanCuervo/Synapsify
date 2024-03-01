import { fireEvent, render, screen } from "@testing-library/react";
import ContextAppComponent from "../../Context";
import { ContentIndex } from ".";
import { BrowserRouter } from "react-router-dom";

test("The title and subtitle text are in the document.", () => {
    render(
        <ContextAppComponent>
            <BrowserRouter>
            <ContentIndex />
            </BrowserRouter>
        </ContextAppComponent>
    );
    const title = screen.getByText("Synapsify");
    const subtitle = screen.getByText(
        "Sail the tide of productivity with Sinapsify."
    );

    expect(title).toBeInTheDocument;
    expect(subtitle).toBeInTheDocument;
});

test("The title tickets are in the document.", () => {
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <ContentIndex />
            </BrowserRouter>
        </ContextAppComponent>
    );
    const title = screen.getByText(
        "Get Things Done Together: Synapsify's Ticket Power!"
    );

    expect(title).toBeInTheDocument;
});

test("The button tickets works.", () => {
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <ContentIndex />
            </BrowserRouter>
        </ContextAppComponent>
    );
    const button = screen.getByText("Get Rolling!");
    fireEvent.click(button);
});

test("The title tasks are in the document.", () => {
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <ContentIndex />
            </BrowserRouter>
        </ContextAppComponent>
    );
    const title = screen.getByText(
        "Stay on Top: Conquer Tasks with Synapsify!"
    );

    expect(title).toBeInTheDocument;
});

test("The button tasks works.", () => {
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <ContentIndex />
            </BrowserRouter>
        </ContextAppComponent>
    );
    const button = screen.getByText("Make It Happen!");
    fireEvent.click(button);
});

test("The title notes are in the document.", () => {
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <ContentIndex />
            </BrowserRouter>
        </ContextAppComponent>
    );
    const title = screen.getByText("Brainstorms to Brilliance: Synapsify's Note-taking Magic!");
    expect(title).toBeInTheDocument;
});

test("The button notes works.", () => {
    render(
        <ContextAppComponent>
            <BrowserRouter>
                <ContentIndex />
            </BrowserRouter>
        </ContextAppComponent>
    );
    const button = screen.getByText("Write Your Story!");
    fireEvent.click(button);
});
