import { Link } from "react-router-dom";

export default function NotificacaoCompulsoria() {

    return (
        <>
            <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
                <h1>Notificações Compulsórias</h1>

                <div className="d-flex">
                    <div className="card mt-4" style={{ width: '19rem' }}>
                        <img src="https://imagens.ebc.com.br/q5npEufIzuRIoi7vbzM9I3QlwG0=/754x0/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/malaria_mosquito_anopheles260420212826.jpeg?itok=SgQsuTcl" style={{height: "170px"}} className="card-img-top" alt="..." />
                        <div className="card-body d-flex-column justify-content-between align-items-between">
                            <h5 className="card-title position-relative">Malária</h5>
                            <p className="card-text position-relative">Notificação Compulsória de Malária.</p>
                            <Link to="notCompulsoria/malaria" className="btn btn-primary position-relative">Notif. Compul. de Malária</Link>
                        </div>
                    </div>
                    <div className="card mt-4 mx-2" style={{ width: '19rem' }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFujbgYqbTC45cmh-17nL424axfDLYGFshBA&s" style={{height: "170px"}} className="card-img-top" alt="..." />
                        <div className="card-body d-flex-column justify-content-center align-items-center-between">
                            <h5 className="card-title position-relative">Sífilis</h5>
                            <p className="card-text position-relative">Notificação Compulsória de Sífilis.</p>
                            <Link to="notCompulsoria/sifilis" className="btn btn-primary position-relative">Notif. Compul. de Sífilis</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}