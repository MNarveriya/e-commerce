import React, { useState } from 'react';
import jsPDF from 'jspdf';

export const PdfFormate = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    const generatePdf = () => {
      // create a new jsPDF instance
      const pdf = new jsPDF();
  
      // add content to the PDF
      pdf.text(` ${name}`, 10, 10);
      pdf.text(` ${email}`, 10, 20);
  
      // save the PDF
      pdf.save('my-file.pdf');
    }

  return (
    <div>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={generatePdf}>Generate PDF</button>
    </div>
  );
}
