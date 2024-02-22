import { TicketPage } from "./Pages/TicketPage";
import { Index } from "./Pages/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotesPage } from "./Pages/NotesPage";
import { NotePage } from "./Pages/NotePage";

function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index></Index>}></Route>
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
                </Routes>
            </BrowserRouter>
    );
}

export default App;
