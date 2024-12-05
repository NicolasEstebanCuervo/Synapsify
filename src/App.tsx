import { Index } from "./Pages/Index";
import { TicketPage } from "./Pages/TicketPage";
import { TicketsPage } from "./Pages/TicketsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotesPage } from "./Pages/NotesPage";
import { NotePage } from "./Pages/NotePage";
import Layout from "./Pages/Layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Index></Index>}></Route>
                    <Route
                        path="/Tickets"
                        element={<TicketsPage></TicketsPage>}
                    ></Route>
                    <Route
                        path="/Ticket/:id"
                        element={<TicketPage></TicketPage>}
                    ></Route>
                    <Route
                        path="/Notes"
                        element={<NotesPage></NotesPage>}
                    ></Route>
                    <Route
                        path="/Note/:id"
                        element={<NotePage></NotePage>}
                    ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
