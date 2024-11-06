export default function json2html(data) {
  const headers = ["Name", "Age", "Gender"];
  let table = `<table data-user="adityarao.vedant@gmail.com">\n<thead>\n<tr>`;

  headers.forEach((header) => {
    table += `<th>${header}</th>`;
  });

  table += `</tr>\n</thead>\n<tbody>\n`;

  data.forEach((row) => {
    table += `<tr>`;
    headers.forEach((header) => {
      table += `<td>${row[header] || ""}</td>`;
    });
    table += `</tr>\n`;
  });

  table += `</tbody>\n</table>`;
  return table;
}
