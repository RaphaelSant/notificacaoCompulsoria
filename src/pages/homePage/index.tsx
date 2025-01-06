import { Link } from "react-router-dom";

export default function NotificacaoCompulsoria() {

    return (
        <>
            <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
                <h1>Notificações Compulsórias</h1>

                <div className="card mt-4" style={{ width: '18rem' }}>
                    <img src="https://imagens.ebc.com.br/q5npEufIzuRIoi7vbzM9I3QlwG0=/754x0/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/malaria_mosquito_anopheles260420212826.jpeg?itok=SgQsuTcl" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Malária</h5>
                        <p className="card-text">Notificação Compulsória de Malária.</p>
                        <Link to="notCompulsoria/malaria" className="btn btn-primary">Notif. Compul. de Malária</Link>
                    </div>
                </div>
            </div>
        </>
    );
}