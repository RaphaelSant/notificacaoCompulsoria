import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotificacaoCompulsoria from "../../pages/homePage";
import NotifMalaria from "../../pages/notCompulsoria/malaria";

export default function Rotas() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NotificacaoCompulsoria />} />
                <Route path="notCompulsoria/malaria" element={< NotifMalaria />} />
            </Routes>
        </BrowserRouter>
    );
}