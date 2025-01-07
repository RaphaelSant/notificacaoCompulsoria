import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotificacaoCompulsoria from "../../pages/homePage";
import NotifMalaria from "../../pages/notCompulsoria/malaria";
import NotifSifilis from "../../pages/notCompulsoria/sifilis";

export default function Rotas() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NotificacaoCompulsoria />} />
                <Route path="notCompulsoria/malaria" element={< NotifMalaria />} />
                <Route path="notCompulsoria/sifilis" element={< NotifSifilis />} />
            </Routes>
        </BrowserRouter>
    );
}