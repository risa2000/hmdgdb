function toNumberIfPossible(s) {
  s = s.replace(/[()]/g, '').trim();
  const num = parseFloat(s);
  return isNaN(num) ? s : num;
}

function sortTableByColIndex(cell, colNdx) {
  const table = cell.closest('table');
  const tbody = table.querySelector('tbody');
  const rows = [...tbody.querySelectorAll('tr')];
  rows.sort((rowA, rowB) => {
    const colA = toNumberIfPossible(rowA.cells[colNdx].textContent);
    const colB = toNumberIfPossible(rowB.cells[colNdx].textContent);
    return colA < colB ? -1 : colA > colB ? 1 : 0;
  });

  if (rows[0] === tbody.querySelector('tr')) {
    rows.reverse();
  }

  for (const row of rows) {
    const parent = row.parentElement;
    row.remove();
    parent.append(row);
  }
}

function addSorting(thead) {
  [...thead.querySelectorAll('tr')].forEach(row => [...row.cells].forEach((cell, colNdx) => {
    cell.addEventListener('click', () => sortTableByColIndex(cell, colNdx));
  }));
}

document.querySelectorAll('thead').forEach(addSorting);
