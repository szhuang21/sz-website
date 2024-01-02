import React from 'react';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import downloadjs from 'downloadjs';

class PDFGenerator extends React.Component {
  async setDocumentMetadata() {
    // Create a new PDFDocument
    const pdfDoc = await PDFDocument.create();

    // Embed the Times Roman font
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    // Add a page and draw some text on it
    const page = pdfDoc.addPage([500, 600]);
    page.setFont(timesRomanFont);
    page.drawText('The Life of an Egg', { x: 60, y: 500, size: 50 });
    page.drawText('An Epic Tale of Woe', { x: 125, y: 460, size: 25 });

    // Set all available metadata fields on the PDFDocument. Note that these fields
    // are visible in the "Document Properties" section of most PDF readers.
    pdfDoc.setTitle('🥚 The Life of an Egg 🍳');
    pdfDoc.setAuthor('Humpty Dumpty');
    pdfDoc.setSubject('📘 An Epic Tale of Woe 📖');
    pdfDoc.setKeywords(['eggs', 'wall', 'fall', 'king', 'horses', 'men']);
    pdfDoc.setProducer('PDF App 9000 🤖');
    pdfDoc.setCreator('pdf-lib (https://github.com/Hopding/pdf-lib)');
    pdfDoc.setCreationDate(new Date('2018-06-24T01:58:37.228Z'));
    pdfDoc.setModificationDate(new Date('2019-12-21T07:00:11.000Z'));

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();

    // Trigger the browser to download the PDF document
    downloadjs(pdfBytes, 'pdf-lib_creation_example.pdf', 'application/pdf');
  }

  render() {
    return (
      <div>
        <p>
          Click the button to set a PDF documents metadata properties with <code>pdf-lib</code>
        </p>
        <button onClick={this.setDocumentMetadata}>Create PDF</button>
        <p className="small">(Your browser will download the resulting file)</p>
      </div>
    );
  }
}

export default PDFGenerator;
