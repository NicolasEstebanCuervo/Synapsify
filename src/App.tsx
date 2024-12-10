import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    IndexPage,
    Layout,
    NotePage,
    NotesPage,
    TicketPage,
    TicketsPage,
} from "./Pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<IndexPage />}></Route>
                    <Route path="/tickets" element={<TicketsPage />}></Route>
                    <Route path="/ticket/:id" element={<TicketPage />}></Route>
                    <Route path="/notes" element={<NotesPage />}></Route>
                    <Route path="/note/:id" element={<NotePage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
