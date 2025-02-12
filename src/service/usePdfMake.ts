// @ts-nocheck
import { ContentElement } from "@/model/interface";
import pdfmake from "pdfmake";

// pdfmake.fonts = {
//   // download default Roboto font from cdnjs.com
//   Roboto: {
//     normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
//     bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
//     italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
//     bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
//   },
// }

pdfmake.fonts = {
  // download default Roboto font from cdnjs.com
  Roboto: {
    normal:
      "https://cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf",
    bold: "https://cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf",
    italics:
      "https://cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf",
    bolditalics:
      "https://cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf",
  },
};

function usePdfMake() {
  return {
    createPdf(content: ContentElement[]) {
      return pdfmake.createPdf({
        content,
        styles: {
          h1: {
            fontSize: 20,
            bold: true,
            margin: [0, 0, 0, 10],
          },
          h2: {
            fontSize: 18,
            bold: true,
            margin: [0, 15, 0, 10],
          },
          h3: {
            fontSize: 15,
            bold: true,
            margin: [0, 10, 0, 8],
          },
          h4: {
            fontSize: 13,
            bold: true,
            margin: [0, 5, 0, 5],
          },
          br: {
            margin: [0, 0, 0, 20],
          },
          superMargin: {
            margin: [10, 0, 0, 20],
          },
          tableHeader: {
            bold: true,
            fontSize: 13,
            color: "black",
          },
        },
      });
    },
  };
}

export default usePdfMake;
