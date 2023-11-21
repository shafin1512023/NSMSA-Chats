import { Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import Chats from "./pages/Chats";
import EachChat from "./pages/EachChat";

const App = () => {
    const [logedIn, setLogedIn] = useState(true);
    return (
        <Routes>
            <Route path="login" element={<LogIn />} />
            <Route path="chats" element={logedIn ? <Chats /> : <LogIn />} />
            <Route
                path="chats/:id"
                element={logedIn ? <EachChat /> : <LogIn />}
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
