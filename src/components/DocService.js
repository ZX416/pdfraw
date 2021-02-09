import { savePDF } from '@progress/kendo-react-pdf';

class DocService {
  createPdf = (html) => {
    savePDF(html, {
      paperSize: 'A4', /*["250mm", "297mm"], /* cara manual ngubah page */
      fileName: 'form.pdf',
      scale: 0.4  
    })
  }
}

const Doc = new DocService();
export default Doc;
