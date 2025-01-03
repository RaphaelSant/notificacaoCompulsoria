import { PDFDocument, rgb } from 'pdf-lib';

export default async function addCoordinatesToExistingPDF(existingPdfBytes) {
    // Carregar o PDF existente
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Obter a primeira página do documento (você pode escolher outras páginas também)
    const page = pdfDoc.getPages()[0];

    // Definir a fonte e o tamanho
    const font = await pdfDoc.embedFont(PDFDocument.Font.Helvetica);
    const fontSize = 9;

    // Obter as dimensões da página (largura e altura)
    const { width, height } = page.getSize();

    // Desenhar as coordenadas de 10 em 10 nas direções X e Y
    for (let x = 10; x < width; x += 10) {
        for (let y = 10; y < height; y += 10) {
            page.drawText(`(${x}, ${y})`, {
                x: x,
                y: height - y, // A coordenada Y aumenta de baixo para cima, então ajustamos
                font: font,
                size: fontSize,
                color: rgb(255, 0, 0), // Cor preta
            });
        }
    }

    // Salvar o PDF modificado
    const pdfBytes = await pdfDoc.save();

    // Criar o arquivo PDF modificado (você pode adaptar isso para seu ambiente de download)
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'modified_with_coordinates.pdf';
    link.click();
}

// Exemplo de como carregar um arquivo PDF existente
const existingPdfBytes = await fetch('./MOLDE_MALARIA.pdf').then(res => res.arrayBuffer());
addCoordinatesToExistingPDF(existingPdfBytes);
