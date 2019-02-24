'use strict';

const mainDiv = createAndAppend("div", document.body, null, "mainDiv");

const printDiv = createAndAppend("div", mainDiv, null, "printDiv");

const date = createAndAppend(
  'p',
  printDiv,
  `<h3>ASSIGNMENT</h3>
  <span>${getDate()}</span>`,
  'date'
)

const downloadButton = createAndAppend('button', mainDiv, 'download PDF')
downloadButton.addEventListener('click', () => genPDF())

function genPDF() {
  const doc = new jsPDF();

  doc.setFontStyle("bold");
  doc.text('This is first bold line.', 30, 70);

  doc.setFontStyle("normal");
  doc.text('This is second line.', 30, 80);
  doc.text('This is third line.', 30, 90);

  doc.text('Column 1', 70, 117);
  doc.rect(30, 110, 140, 10);

  doc.text('Column 2', 135, 117);
  doc.rect(130, 110, 40, 10);

  doc.setFillColor(226, 227, 227);
  doc.rect(30, 120, 140, 10, 'FD');

  doc.rect(30, 130, 140, 10);
  doc.rect(30, 140, 140, 10);
  doc.rect(130, 130, 40, 20);

  doc.fromHTML(printDiv, 30, 20)
  doc.save('fromHTML.pdf')
  
}

function createAndAppend(tag, append, innerHTML, Class, id) {
  const child = document.createElement(tag);
  append.appendChild(child);
  innerHTML !== undefined ? (child.innerHTML = innerHTML) : null;
  Class !== undefined ? (child.className = Class) : null;
  id !== undefined ? (child.id = id) : null;
  return child;
}

function getDate() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();

  dd < 10 ? dd = '0' + dd : dd
  mm < 10 ? mm = '0' + mm : mm

  return today = dd + '/' + mm + '/' + yyyy;
}
