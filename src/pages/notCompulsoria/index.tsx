import { Link } from "react-router-dom";

export default function NotificacaoCompulsoria() {

    return (
        <>
            <div>
                <h1>Notificação Compulsória</h1>

                <Link to="notCompulsoria/malaria">Notificação Compulsória de Malária</Link>
            </div>

            <div className="container">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" />
                </div>

            </div>


        </>
    );
}