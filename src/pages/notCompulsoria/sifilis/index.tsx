import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PDFDocument } from 'pdf-lib';
import PDF from '../sifilis/MOLDE_SIFILIS.pdf'; // Caminho do seu PDF modelo
import { Link } from 'react-router-dom';

export default function NotifSifilis() {

    // Função para lidar com o envio do formulário e gerar o PDF
    const handleSubmit = async (event) => {
        event.preventDefault(); // Impede o envio do formulário e recarregamento da página

        // Captura os valores dos campos
        const dataNotificacao = document.getElementById('dataNotificacao').value;
        // const tipoDeteccao = document.getElementById('tipoDeteccao').value;
        const nrNotificacao = document.getElementById('nrNotificacao').value;
        const nomePaciente = document.getElementById('nomePaciente').value;
        const nascPaciente = document.getElementById('nascPaciente').value;
        const idadePaciente = document.getElementById('idadePaciente').value;
        const sexoPaciente = document.getElementById('sexoPaciente').value;
        const gestantePaciente = document.getElementById('gestantePaciente').value;
        const escolaridadePaciente = document.getElementById('escolaridadePaciente').value;
        const racaPaciente = document.getElementById('racaPaciente').value;
        const nomeMaePaciente = document.getElementById('nomeMaePaciente').value;
        const municipioResid = document.getElementById('municipioResid').value;
        const dataPrimSinto = document.getElementById('dataPrimSinto').value;
        // const tipoExame = document.getElementById('tipoExame').value;
        const tipoIdadePaciente = document.getElementById('tipoIdadePaciente').value;
        const codIbge = document.getElementById('codIbge').value;
        const bairroResid = document.getElementById('bairroResid').value;
        const logradouroResid = document.getElementById('logradouroResid').value;
        const codResid = document.getElementById('codResid').value;
        const numeroResid = document.getElementById('numeroResid').value;
        const cepResid = document.getElementById('cepResid').value;
        const telPaciente = document.getElementById('telPaciente').value;
        const dataInvestigacao = document.getElementById('dataInvestigacao').value;
        const obsAdicionais = document.getElementById('obsAdicionais').value;

        // Mensagem de sucesso
        alert("Notificação salva com sucesso!");

        console.log(nomePaciente, nrNotificacao, dataNotificacao, telPaciente, nascPaciente, idadePaciente, sexoPaciente, gestantePaciente, escolaridadePaciente, racaPaciente, nomeMaePaciente, municipioResid, dataPrimSinto)

        // Chama a função para gerar e preencher o PDF com os dados
        await preencherPDF(obsAdicionais, dataInvestigacao, cepResid, numeroResid, codResid, logradouroResid, bairroResid, codIbge, tipoIdadePaciente, nomePaciente, nrNotificacao, dataNotificacao, telPaciente, nascPaciente, idadePaciente, sexoPaciente, gestantePaciente, escolaridadePaciente, racaPaciente, nomeMaePaciente, municipioResid, dataPrimSinto);
    };

    // Função para preencher o PDF com os dados do localStorage
    const preencherPDF = async (obsAdicionais, dataInvestigacao, cepResid, numeroResid, codResid, logradouroResid, bairroResid, codIbge, tipoIdadePaciente, nomePaciente, nrNotificacao, dataNotificacao, telPaciente, nascPaciente, idadePaciente, sexoPaciente, gestantePaciente, escolaridadePaciente, racaPaciente, nomeMaePaciente, municipioResid, dataPrimSinto) => {
        // Caminho do arquivo PDF modelo
        const url = PDF; // Caminho do seu PDF modelo
        const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());

        // Carregar o PDF usando PDF-lib
        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        // Acessa a primeira página
        const page = pdfDoc.getPages()[0]; // Pode ser necessário ajustar para outra página

        // Adicionar os dados no PDF --------------------------------

        page.drawText(nrNotificacao, {
            x: 470,
            y: 795,
            size: 10,
        });

        page.drawText(dataNotificacao, {
            x: 445,
            y: 728,
            size: 10,
        });

        // CÓDIGO CID
        page.drawText("A 51", {
            x: 380,
            y: 728,
            size: 10,
        });

        // AGRAVO / DOENÇA
        page.drawText("SÍFILIS", { // CAMPO 6 FIXO
            x: 70,
            y: 728,
            size: 10,
        });

        page.drawText("RO", { // CAMPO 8 FIXO
            x: 57,
            y: 700,
            size: 10,
        });

        page.drawText("PORTO VELHO", { // CAMPO 8 FIXO
            x: 97,
            y: 700,
            size: 10,
        });

        page.drawText("1100205", { // CAMPO 8 FIXO
            x: 480,
            y: 700,
            size: 10,
        });

        page.drawText("ALPHACLIN", { // CAMPO 6 FIXO
            x: 70,
            y: 672,
            size: 10,
        });

        page.drawText(dataPrimSinto, {
            x: 445,
            y: 672,
            size: 10,
        });

        page.drawText("5305942", {
            x: 345,
            y: 672,
            size: 10,
        });

        page.drawText(nomePaciente, {
            x: 70,
            y: 640,
            size: 10,
        });

        page.drawText(nascPaciente, {
            x: 445,
            y: 640,
            size: 10,
        });

        page.drawText(idadePaciente, {
            x: 76,
            y: 608,
            size: 10,
        });

        page.drawText(tipoIdadePaciente, {
            x: 111,
            y: 615,
            size: 10,
        });

        page.drawText(sexoPaciente, {
            x: 233,
            y: 623,
            size: 10,
        });

        page.drawText(gestantePaciente, {
            x: 428,
            y: 623,
            size: 10,
        });

        page.drawText(racaPaciente, {
            x: 554,
            y: 623,
            size: 10,
        });

        page.drawText(escolaridadePaciente, {
            x: 552,
            y: 593,
            size: 10,
        });

        page.drawText(nomeMaePaciente, {
            x: 243,
            y: 550,
            size: 10,
        });

        page.drawText(municipioResid, {
            x: 105,
            y: 520,
            size: 10,
        });

        page.drawText(codIbge, {
            x: 331,
            y: 520,
            size: 10,
        });

        page.drawText(bairroResid, {
            x: 70,
            y: 495,
            size: 10,
        });

        page.drawText(logradouroResid, {
            x: 210,
            y: 495,
            size: 10,
        });

        page.drawText(codResid, {
            x: 485,
            y: 495,
            size: 10,
        });

        page.drawText(numeroResid, {
            x: 70,
            y: 470,
            size: 10,
        });

        page.drawText(cepResid, {
            x: 465,
            y: 442,
            size: 10,
        });

        page.drawText(telPaciente, {
            x: 70,
            y: 417,
            size: 10,
        });

        page.drawText(dataInvestigacao, {
            x: 70,
            y: 366,
            size: 10,
        });

        // CLASSIFICAÇÃO FINAL
        page.drawText("1", {
            x: 303,
            y: 383,
            size: 10,
        });

        // CRITÉRIO DE CONFIRMAÇÃO / DESCARTE
        page.drawText("1", {
            x: 537,
            y: 381,
            size: 10,
        });

        page.drawText(obsAdicionais, {
            x: 40,
            y: 184,
            size: 15,
        });

        // MUNICIPIO/UNIDADE DE SAUDE
        page.drawText("PORTO VELHO / ALPHACLIN", {
            x: 70,
            y: 70,
            size: 10,
        });

        // MUNICIPIO/UNIDADE DE SAUDE
        page.drawText("5305942", {
            x: 469,
            y: 70,
            size: 10,
        });


        // Salvar o PDF modificado
        const pdfBytes = await pdfDoc.save();

        // Criar um Blob a partir dos bytes gerados
        const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

        // Criar um link de download para o PDF
        const pdfUrl = URL.createObjectURL(pdfBlob);

        // Criar um link de download
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = `${nomePaciente}_Notif_Malaria_Nr_${nrNotificacao}.pdf`; // Nome do arquivo a ser baixado
        link.click(); // Simula o clique no link para iniciar o download

        // Libera o objeto URL
        URL.revokeObjectURL(pdfUrl);
    };

    return (
        <>
            <div className="container form-container">
                <Link to="/" className="btn btn-primary mt-5">Voltar</Link>
                <h1 className="text-center my-2">Notificação Compulsória de Sífilis</h1>

                <form onSubmit={handleSubmit} className='d-flex flex-wrap align-items-center justify-content-center'>

                    <div className="col-md-12 mb-3 text-center">
                        <hr className="border border-danger border-2 opacity-50" />
                    </div>

                    {/* Primeira linha de campos */}
                    <div className="col-md-12 mb-3 me-2 text-center">
                        <h4>Dados Gerais</h4>
                    </div>

                    <div className="col-md-3 mb-3 me-2">
                        <div className="form-label input-group-sm mb-3">
                            <label htmlFor="nrNotificacao" className='form-text text-dark'>Nr da notificação: </label>
                            <input type="text" className="form-control" id="nrNotificacao" placeholder="Nr da notificação" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 me-2">
                        <div className="form-label input-group-sm mb-3">
                            <label htmlFor="dataNotificacao" className='form-text text-dark'><b>3 - </b>Data da Notificação: </label>
                            <input type="text" className="form-control" id="dataNotificacao" placeholder="Data da Notificação" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 me-2">
                        <div className="form-label input-group-sm mb-3">
                            <label htmlFor="dataPrimSinto" className='form-text text-dark'><b>7 - </b>Data dos Primeiros Sintomas:</label>
                            <input type="text" className="form-control" id="dataPrimSinto" placeholder="Data dos Primeiros Sintomas" />
                        </div>
                    </div>

                    <div className="col-md-12 mb-3 text-center">
                        <hr className="border border-danger border-2 opacity-50" />
                    </div>

                    <div className="col-md-12 mb-3 me-2 text-center">
                        <h4>Notificação Individual</h4>
                    </div>

                    <div className="col-md-3 mb-3 me-2">
                        <div className="form-label input-group-sm mb-3">
                            <label htmlFor="nomePaciente" className='form-text text-dark'><b>8 - </b>Nome do Paciente:</label>
                            <input type="text" className="form-control" id="nomePaciente" placeholder="Nome do paciente" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 me-2">
                        <div className="form-label input-group-sm mb-3">
                            <label htmlFor="nascPaciente" className='form-text text-dark'><b>9 - </b>Data de Nascimento:</label>
                            <input type="text" className="form-control" id="nascPaciente" placeholder="Data de Nascimento" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 me-2">
                        <div className="form-label input-group-sm mb-3">
                            <label htmlFor="idadePaciente" className='form-text text-dark'><b>10 - </b>Idade:</label>
                            <div className="d-flex form-label input-group-sm mb-3">
                                <input type="text" className="form-control" id="idadePaciente" placeholder="Idade" />
                                <select className="form-select" id="tipoIdadePaciente" aria-label="Default select example">
                                    <option selected>-- Selecione --</option>
                                    <option value="1">1 - Hora</option>
                                    <option value="2">2 - Dia</option>
                                    <option value="3">3 - Mês</option>
                                    <option value="4">4 - Ano</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 me-2">
                        <div className="form-label input-group-sm mb-3">
                            <label htmlFor="sexoPaciente" className='form-text text-dark'><b>11 - </b>Sexo:</label>
                            <select className="form-select" id="sexoPaciente" aria-label="Default select example">
                                <option selected>Sexo</option>
                                <option value="M">M - Masculino</option>
                                <option value="F">F - Feminino</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 me-2">
                        <div className="form-label input-group-sm mb-3">
                            <label htmlFor="gestantePaciente" className='form-text text-dark'><b>12 - </b>Gestante</label>
                            <select className="form-select" id="gestantePaciente" aria-label="Default select example">
                                <option selected>-- SELECIONE --</option>
                                <option value="1">1 - 1º Trimestre</option>
                                <option value="2">2 - 2º Trimestre</option>
                                <option value="3">3 - 3º Trimestre</option>
                                <option value="4">4 - Idade Gestacional Ignorada</option>
                                <option value="5">5 - Não</option>
                                <option value="6">6 - Não se aplica</option>
                                <option value="9">9 - Ignorado</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 me-2">
                        <div className="form-label input-group-sm mb-3">
                            <label htmlFor="racaPaciente" className='form-text text-dark'><b>13 - </b>Raça/Cor:</label>
                            <select className="form-select" id="racaPaciente" aria-label="Default select example">
                                <option selected>-- SELECIONE --</option>
                                <option value="1">1 - Branca</option>
                                <option value="2">2 - Preta</option>
                                <option value="3">3 - Amarela</option>
                                <option value="4">4 - Parda</option>
                                <option value="5">5 - Indígena</option>
                                <option value="9">9 - Ignorado</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 me-2">
                        <div className="form-label input-group-sm mb-3">
                            <label htmlFor="escolaridadePaciente" className='form-text text-dark'><b>14 - </b>Escolaridade:</label>
                            <select className="form-select" id="escolaridadePaciente" aria-label="Default select example">
                                <option selected>-- SELECIONE --</option>
                                <option value="0">0 - Analfabeto</option>
                                <option value="1">{'1 - 1ª a 4ª série incompleta do EF (antigo primário ou 1º grau)'}</option>
                                <option value="2">{'2 - 4ª série completa do EF (antigo primário ou 1º grau)'}</option>
                                <option value="3">{'3 - 5ª à 8ª série incompleta do EF (antigo ginásio ou 1º grau)'}</option>
                                <option value="4">{'4 - Ensino fundamental completo (antigo ginásio ou 1º grau)'}</option>
                                <option value="5">{'5 - Ensino médio incompleto (antigo colegial ou 2º grau )'}</option>
                                <option value="6">{'6 - Ensino médio completo (antigo colegial ou 2º grau )'}</option>
                                <option value="7">{'7 - Educação superior incompleta'}</option>
                                <option value="8">{'8 - Educação superior completa'}</option>
                                <option value="9">{'9 - Ignorado'}</option>
                                <option value="10">{'10 - Não se aplica'}</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 me-2">
                        <div className="form-label input-group-sm mb-3">
                            <label htmlFor="nomeMaePaciente" className='form-text text-dark'><b>16 - </b>Nome da mãe:</label>
                            <input type="text" className="form-control" id="nomeMaePaciente" placeholder="Nome da mãe" />
                        </div>
                    </div>



                    <div className="col-md-12 mb-3 text-center">
                        <hr className="border border-danger border-2 opacity-50" />
                    </div>
                    <div className="col-md-12 mb-3 me-2 text-center">
                        <h4>Dados de Residência</h4>
                    </div>

                    <div className="col-md-3 mb-3 me-2">
                        <div className="form-label input-group-sm mb-3">
                            <label htmlFor="municipioResid" className='form-text text-dark'><b>18 - </b>Municipio de Residência:</label>
                            <input type="text" className="form-control" id="municipioResid" placeholder="Municipio de Residência" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 me-2">
                        <div className="form-label input-group-sm mb-3">
                            <label htmlFor="codIbge" className='form-text text-dark'>Código IBGE:</label>
                            <input type="text" className="form-control" id="codIbge" placeholder="Código IBGE" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 me-2">
                        <div className="form-label input-group-sm mb-3">
                            <label htmlFor="bairroResid" className='form-text text-dark'><b>20 - </b>Bairro:</label>
                            <input type="text" className="form-control" id="bairroResid" placeholder="Bairro" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 me-2">
                        <div className="form-label input-group-sm mb-3">
                            <label htmlFor="logradouroResid" className='form-text text-dark'><b>21 - </b>Logradouro:</label>
                            <input type="text" className="form-control" id="logradouroResid" placeholder="Logradouro" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 me-2">
                        <div className="form-label input-group-sm mb-3">
                            <label htmlFor="codResid" className='form-text text-dark'>Código:</label>
                            <input type="text" className="form-control" id="codResid" placeholder="Código" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 me-2">
                        <div className="form-label input-group-sm mb-3">
                            <label htmlFor="numeroResid" className='form-text text-dark'><b>22 - </b>Número:</label>
                            <input type="text" className="form-control" id="numeroResid" placeholder="Número" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 me-2">
                        <div className="form-label input-group-sm mb-3">
                            <label htmlFor="cepResid" className='form-text text-dark'><b>27 - </b>CEP:</label>
                            <input type="text" className="form-control" id="cepResid" placeholder="CEP" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 me-2">
                        <div className="form-label input-group-sm mb-3">
                            <label htmlFor="telPaciente" className='form-text text-dark'><b>28 - </b>Telefone com DDD:</label>
                            <input type="text" className="form-control" id="telPaciente" placeholder="Telefone com DDD" />
                        </div>
                    </div>

                    <div className="col-md-12 mb-3 text-center">
                        <hr className="border border-danger border-2 opacity-50" />
                    </div>
                    <div className="col-md-12 mb-3 me-2 text-center">
                        <h4>Conclusão</h4>
                    </div>

                    <div className="col-md-4 mb-3 me-2">
                        <div className="form-label input-group-sm mb-3">
                            <label htmlFor="dataInvestigacao" className='form-text text-dark'><b>31 - </b>Data da Investigação:</label>
                            <input type="text" className="form-control" id="dataInvestigacao" placeholder="Data da Investigação" />
                        </div>
                    </div>


                    <div className="col-md-12 mb-3 text-center">
                        <hr className="border border-danger border-2 opacity-50" />
                    </div>
                    <div className="col-md-12 mb-3 me-2 text-center">
                        <h4>Conclusão</h4>
                    </div>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Observações adicionais" id="obsAdicionais" style={{height: "100px", width: "500px"}}></textarea>
                        <label htmlFor="obsAdicionais" className='form-text text-dark'>Observações adicionais</label>
                    </div>

                    <div className="col-md-12 mb-3 my-5 d-flex align-items-center justify-content-center">
                        <button type="submit" className="btn btn-danger btn-lg">Gerar Notificação</button>
                    </div>
                    {/* Botão de Enviar */}
                </form>
            </div>
        </>
    );
}
