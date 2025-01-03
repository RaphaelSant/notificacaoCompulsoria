import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PDFDocument } from 'pdf-lib';
import PDF from '../malaria/MOLDE_MALARIA.pdf'; // Caminho do seu PDF modelo
import verificaCampos from '../../../util/verificaCampos/index.tsx';
import testarPosicoes from '../../../util/verificaCampos/index.tsx';

export default function NotifMalaria() {

    // Função para lidar com o envio do formulário e gerar o PDF
    const handleSubmit = async (event) => {
        event.preventDefault(); // Impede o envio do formulário e recarregamento da página

        // Captura os valores dos campos
        const dataNotificacao = document.getElementById('dataNotificacao').value;
        const tipoDeteccao = document.getElementById('tipoDeteccao').value;
        const sintomas = document.getElementById('sintomas').value;
        const nrNotificacao = document.getElementById('nrNotificacao').value + "/866";
        const nomePaciente = document.getElementById('nomePaciente').value;
        const telPaciente = document.getElementById('telPaciente').value;
        const pesoPaciente = document.getElementById('pesoPaciente').value;
        const nrCartaoSus = document.getElementById('nrCartaoSus').value;
        const nascPaciente = document.getElementById('nascPaciente').value;
        const idadePaciente = document.getElementById('idadePaciente').value;
        const sexoPaciente = document.getElementById('sexoPaciente').value;
        const gestantePaciente = document.getElementById('gestantePaciente').value;
        const amamentandoPaciente = document.getElementById('amamentandoPaciente').value;
        const tempoAmamentando = document.getElementById('tempoAmamentando').value;
        const escolaridadePaciente = document.getElementById('escolaridadePaciente').value;
        const racaPaciente = document.getElementById('racaPaciente').value;
        const nomeMaePaciente = document.getElementById('nomeMaePaciente').value;
        const princpAtividade = document.getElementById('princpAtividade').value;
        const enderecoPaciente = document.getElementById('enderecoPaciente').value;
        const outPaisResidencia = document.getElementById('outPaisResidencia').value;
        const ufResidPaciente = document.getElementById('ufResidPaciente').value;
        const municipioResid = document.getElementById('municipioResid').value;
        const codMunResid = document.getElementById('codMunResid').value;
        const localidadeResid = document.getElementById('localidadeResid').value;
        const codLocResid = document.getElementById('codLocResid').value;
        const dataPrimSinto = document.getElementById('dataPrimSinto').value;
        const tratVivaxMalUlt15 = document.getElementById('tratVivaxMalUlt15').value;
        const tratFalcMalUlt15 = document.getElementById('tratFalcMalUlt15').value;

        // Salva os valores no localStorage
        localStorage.setItem('dataNotificacao', dataNotificacao);
        localStorage.setItem('tipoDeteccao', tipoDeteccao);
        localStorage.setItem('sintomas', sintomas);
        localStorage.setItem('nrNotificacao', nrNotificacao);
        localStorage.setItem('nomePaciente', nomePaciente);
        localStorage.setItem('telPaciente', telPaciente);
        localStorage.setItem('pesoPaciente', pesoPaciente);
        localStorage.setItem('nrCartaoSus', nrCartaoSus);
        localStorage.setItem('nascPaciente', nascPaciente);
        localStorage.setItem('idadePaciente', idadePaciente);
        localStorage.setItem('sexoPaciente', sexoPaciente);
        localStorage.setItem('gestantePaciente', gestantePaciente);
        localStorage.setItem('amamentandoPaciente', amamentandoPaciente);
        localStorage.setItem('tempoAmamentando', tempoAmamentando);
        localStorage.setItem('escolaridadePaciente', escolaridadePaciente);
        localStorage.setItem('racaPaciente', racaPaciente);
        localStorage.setItem('nomeMaePaciente', nomeMaePaciente);
        localStorage.setItem('princpAtividade', princpAtividade);
        localStorage.setItem('enderecoPaciente', enderecoPaciente);
        localStorage.setItem('outPaisResidencia', outPaisResidencia);
        localStorage.setItem('ufResidPaciente', ufResidPaciente);
        localStorage.setItem('municipioResid', municipioResid);
        localStorage.setItem('codMunResid', codMunResid);
        localStorage.setItem('localidadeResid', localidadeResid);
        localStorage.setItem('codLocResid', codLocResid);
        localStorage.setItem('dataPrimSinto', dataPrimSinto);
        localStorage.setItem('tratVivaxMalUlt15', tratVivaxMalUlt15);
        localStorage.setItem('tratFalcMalUlt15', tratFalcMalUlt15);

        // Mensagem de sucesso
        alert("Notificação salva com sucesso!");

        // Chama a função para gerar e preencher o PDF com os dados
        await preencherPDF(nomePaciente, nrNotificacao, dataNotificacao, tipoDeteccao, sintomas, telPaciente, pesoPaciente, nrCartaoSus, nascPaciente, idadePaciente, sexoPaciente, gestantePaciente, amamentandoPaciente, tempoAmamentando, escolaridadePaciente, racaPaciente, nomeMaePaciente, princpAtividade, enderecoPaciente, outPaisResidencia, ufResidPaciente, municipioResid, codMunResid, localidadeResid, codLocResid, dataPrimSinto, tratVivaxMalUlt15, tratFalcMalUlt15);
    };

    // Função para preencher o PDF com os dados do localStorage
    const preencherPDF = async (nomePaciente, nrNotificacao, dataNotificacao, tipoDeteccao, sintomas, telPaciente, pesoPaciente, nrCartaoSus, nascPaciente, idadePaciente, sexoPaciente, gestantePaciente, amamentandoPaciente, tempoAmamentando, escolaridadePaciente, racaPaciente, nomeMaePaciente, princpAtividade, enderecoPaciente, outPaisResidencia, ufResidPaciente, municipioResid, codMunResid, localidadeResid, codLocResid, dataPrimSinto, tratVivaxMalUlt15, tratFalcMalUlt15) => {
        // Caminho do arquivo PDF modelo
        const url = PDF; // Caminho do seu PDF modelo
        const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());

        // Carregar o PDF usando PDF-lib
        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        // Acessa a primeira página
        const page = pdfDoc.getPages()[0]; // Pode ser necessário ajustar para outra página

        // Adicionar os dados no PDF --------------------------------

        // PRIMEIRA LINHA DO PDF
        page.drawText(nrNotificacao, {
            x: 490,
            y: 803,
            size: 9,
        });

        // SEGUNDA LINHA DO PDF
        page.drawText(dataNotificacao, {
            x: 60,
            y: 766,
            size: 9,
        });

        page.drawText(tipoDeteccao, {
            x: 209,
            y: 766,
            size: 9,
        });

        page.drawText(sintomas, {
            x: 330,
            y: 766,
            size: 9,
        });

        page.drawText("RO", { // CAMPO 5 FIXO
            x: 445,
            y: 766,
            size: 9,
        });

        // TERCEIRA LINHA DO PDF

        page.drawText("PORTO VELHO", { // CAMPO 6 FIXO
            x: 60,
            y: 739,
            size: 9,
        });

        page.drawText("110205", { // CAMPO 7 FIXO
            x: 445,
            y: 739,
            size: 9,
        });

        // TERCEIRA LINHA DO DOCUMENTO SIVEP

        page.drawText("ALPHACLIN", { // CAMPO 8 FIXO
            x: 60,
            y: 712,
            size: 9,
        });

        page.drawText("53054921866", { // CAMPO 9 FIXO
            x: 445,
            y: 712,
            size: 9,
        });

        
        // QUARTA LINHA DO DOCUMENTO SIVEP
        page.drawText("JANETE CANUTO DE OLIVEIRA", { // CAMPO 10 FIXO
            x: 60,
            y: 685,
            size: 9,
        });

        page.drawText("1412", { // CAMPO 11 FIXO
            x: 445,
            y: 685,
            size: 9,
        });

        // QUINTA LINHA DO DOCUMENTO SIVEP
        page.drawText(nomePaciente, {
            x: 60,
            y: 658,
            size: 9,
        });

        // 6 LINHA DO DOCUMENTO SIVEP
        page.drawText(telPaciente, {
            x: 60,
            y: 631,
            size: 9,
        });

        page.drawText(pesoPaciente, {
            x: 445,
            y: 631,
            size: 9,
        });

        // 7 LINHA DO DOCUMENTO SIVEP
        page.drawText(nrCartaoSus, {
            x: 60,
            y: 602,
            size: 9,
        });

        page.drawText(nascPaciente, {
            x: 305,
            y: 602,
            size: 9,
        });

        page.drawText(idadePaciente, {
            x: 445,
            y: 602,
            size: 9,
        });

        // 8 LINHA DO DOCUMENTO SIVEP
        page.drawText(sexoPaciente, {
            x: 63,
            y: 575,
            size: 9,
        });

        page.drawText(gestantePaciente, {
            x: 147,
            y: 575,
            size: 9,
        });

        page.drawText(amamentandoPaciente, {
            x: 349,
            y: 575,
            size: 9,
        });

        page.drawText(tempoAmamentando, {
            x: 445,
            y: 575,
            size: 9,
        });

        // 9 LINHA DO DOCUMENTO SIVEP

        page.drawText(escolaridadePaciente, {
            x: 63,
            y: 548,
            size: 9,
        });

        // 10 LINHA DO DOCUMENTO SIVEP
        
        page.drawText(racaPaciente, {
            x: 63,
            y: 521,
            size: 9,
        });

        page.drawText(nomeMaePaciente, {
            x: 195,
            y: 521,
            size: 9,
        });

        // 11 LINHA DO DOCUMENTO SIVEP
        
        page.drawText(princpAtividade, {
            x: 223,
            y: 498,
            size: 9,
        });

        // 12 LINHA DO DOCUMENTO SIVEP
        
        page.drawText(enderecoPaciente, {
            x: 60,
            y: 468,
            size: 9,
        });

        page.drawText(outPaisResidencia, {
            x: 445,
            y: 468,
            size: 9,
        });

        // 13 LINHA DO DOCUMENTO SIVEP
        
        page.drawText(ufResidPaciente, {
            x: 60,
            y: 441,
            size: 9,
        });

        page.drawText(municipioResid, {
            x: 150,
            y: 441,
            size: 9,
        });
        
        page.drawText(codMunResid, {
            x: 445,
            y: 441,
            size: 9,
        });

        // 14 LINHA DO DOCUMENTO SIVEP
        
        page.drawText(localidadeResid, {
            x: 60,
            y: 414,
            size: 9,
        });

        page.drawText(codLocResid, {
            x: 445,
            y: 414,
            size: 9,
        });

        // 15 LINHA DO DOCUMENTO SIVEP
        
        page.drawText(dataPrimSinto, {
            x: 60,
            y: 387,
            size: 9,
        });

        page.drawText(tratVivaxMalUlt15, {
            x: 289,
            y: 387,
            size: 9,
        });

        page.drawText(tratFalcMalUlt15, {
            x: 475,
            y: 387,
            size: 9,
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
        link.download = 'Notificacao_Malaria.pdf'; // Nome do arquivo a ser baixado
        link.click(); // Simula o clique no link para iniciar o download

        // Libera o objeto URL
        URL.revokeObjectURL(pdfUrl);
    };

    return (
        <>
            <div className="container form-container">
                <h1 className="text-center">Notificação Compulsória de Malária</h1>

                <form onSubmit={handleSubmit}>
                    {/* Primeira linha de campos */}
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="nrNotificacao">Nr da notificação</label>
                            <input type="text" className="form-control" id="nrNotificacao" placeholder="Nr da notificação" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="dataNotificacao">Data da Notificação</label>
                            <input type="text" className="form-control" id="dataNotificacao" placeholder="Data da Notificação" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <select className="form-select" id="tipoDeteccao" aria-label="Default select example">
                            <option selected>Tipo de detecção</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <select className="form-select" id="sintomas" aria-label="Default select example">
                            <option selected>Sintomas</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="nomePaciente">Nome do Paciente</label>
                            <input type="text" className="form-control" id="nomePaciente" placeholder="Nome do paciente" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="telPaciente">Telefone com DDD</label>
                            <input type="text" className="form-control" id="telPaciente" placeholder="Telefone com DDD" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="pesoPaciente">Peso em Kg</label>
                            <input type="text" className="form-control" id="pesoPaciente" placeholder="Peso em Kg" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="nrCartaoSus">Nº Cartão Nacional de Saúde</label>
                            <input type="text" className="form-control" id="nrCartaoSus" placeholder="Nº Cartão Nacional de Saúde" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="nascPaciente">Data de Nascimento</label>
                            <input type="text" className="form-control" id="nascPaciente" placeholder="Data de Nascimento" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="idadePaciente">Idade</label>
                            <input type="text" className="form-control" id="idadePaciente" placeholder="Idade" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <select className="form-select" id="sexoPaciente" aria-label="Default select example">
                            <option selected>Sexo</option>
                            <option value="M">M - Masculino</option>
                            <option value="F">F - Feminino</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <select className="form-select" id="gestantePaciente" aria-label="Default select example">
                            <option selected>Paciente é gestante?</option>
                            <option value="1">1 - 1º Trimestre</option>
                            <option value="2">2 - 2º Trimestre</option>
                            <option value="3">3 - 3º Trimestre</option>
                            <option value="4">4 - Idade Gestacional Ignorada</option>
                            <option value="5">5 - Não</option>
                            <option value="6">6 - Não se aplica</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <select className="form-select" id="amamentandoPaciente" aria-label="Default select example">
                            <option selected>Está amamentando?</option>
                            <option value="1">1 - Sim</option>
                            <option value="2">2 - Não</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="tempoAmamentando">Se amamentando, há quanto tempo?</label>
                            <input type="text" className="form-control" id="tempoAmamentando" placeholder="Se amamentando, há quanto tempo?" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <select className="form-select" id="escolaridadePaciente" aria-label="Default select example">
                            <option selected>Escolaridade</option>
                            <option value="0">0 - Analfabeto</option>
                            <option value="1">1 - 1º ao 5º ano incompleto de EF</option>
                            <option value="2">2 - 5º ano completo de EF</option>
                            <option value="3">3 - 6º ao 9º ano incompleto do EF</option>
                            <option value="4">4 - Ensino Fundamental Completo</option>
                            <option value="5">5 - Ensino Médio Incompleto</option>
                            <option value="6">6 - Ensino Médio Completo</option>
                            <option value="7">7 - Educação Superior Incompleta</option>
                            <option value="8">8 - Educação Superior Completa</option>
                            <option value="10">10 - Não se aplica</option>
                        </select>
                    </div>

                    <div className="form-row">
                        <select className="form-select" id="racaPaciente" aria-label="Default select example">
                            <option selected>Raça/Cor</option>
                            <option value="1">1 - Branca</option>
                            <option value="2">2 - Preta</option>
                            <option value="3">3 - Amarela</option>
                            <option value="4">4 - Parda</option>
                            <option value="5">5 - Indígena</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="nomeMaePaciente">Nome da mãe:</label>
                            <input type="text" className="form-control" id="nomeMaePaciente" placeholder="Nome da mãe" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <select className="form-select" id="princpAtividade" aria-label="Default select example">
                            <option selected>Principal Atividade nos Últimos 15 Dias</option>
                            <option value="1">1 - Agricultura</option>
                            <option value="2">2 - Pecuária</option>
                            <option value="3">3 - Doméstica</option>
                            <option value="4">4 - Turismo</option>
                            <option value="5">5 - Garimpagem</option>
                            <option value="6">6 - Exploração vegetal</option>
                            <option value="7">7 - Caça/pesca</option>
                            <option value="8">8 - Construção de estradas/barragens</option>
                            <option value="9">9 - Mineração</option>
                            <option value="10">10 - Viajante</option>
                            <option value="11">11 - Outros</option>
                        </select>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="enderecoPaciente">Endereço do Paciente:</label>
                            <input type="text" className="form-control" id="enderecoPaciente" placeholder="Endereço do Paciente" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="outPaisResidencia">Outro País de Residência:</label>
                            <input type="text" className="form-control" id="outPaisResidencia" placeholder="Outro País de Residência" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="enderecoPaciente">Endereço do Paciente:</label>
                            <input type="text" className="form-control" id="enderecoPaciente" placeholder="Endereço do Paciente" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="outPaisResidencia">Outro País de Residência:</label>
                            <input type="text" className="form-control" id="outPaisResidencia" placeholder="Outro País de Residência" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="ufResidPaciente">UF Residência</label>
                            <input type="text" className="form-control" id="ufResidPaciente" placeholder="UF Residência" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="municipioResid">Municipio de Residência:</label>
                            <input type="text" className="form-control" id="municipioResid" placeholder="Municipio de Residência" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="codMunResid">Cód. Mun. resid:</label>
                            <input type="text" className="form-control" id="codMunResid" placeholder="Cód. Mun. resid" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="localidadeResid">Localidade de Residência:</label>
                            <input type="text" className="form-control" id="localidadeResid" placeholder="Localidade de Residência" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="codLocResid">Cód. Localid. Resid:</label>
                            <input type="text" className="form-control" id="codLocResid" placeholder="Localidade de Residência" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="dataPrimSinto">Data dos Primeiros Sintomas:</label>
                            <input type="text" className="form-control" id="dataPrimSinto" placeholder="Data dos Primeiros Sintomas" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <label htmlFor="tratVivaxMalUlt15">Recebeu tratamento para malária vivax nos últimos 60 dias?</label>
                        <select className="form-select" id="tratVivaxMalUlt15" aria-label="Default select example">
                            <option selected>- - Selecione - -</option>
                            <option value="1">1 - Sim</option>
                            <option value="2">2 - Não</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label htmlFor="tratFalcMalUlt15">Recebeu tratamento para malária falciparum nos últimos 40 dias?</label>
                        <select className="form-select" id="tratFalcMalUlt15" aria-label="Default select example">
                            <option selected>- - Selecione - -</option>
                            <option value="1">1 - Sim</option>
                            <option value="2">2 - Não</option>
                        </select>
                    </div>

                    {/* Botão de Enviar */}
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Enviar Notificação</button>
                    </div>
                </form>
            </div>
        </>
    );
}
