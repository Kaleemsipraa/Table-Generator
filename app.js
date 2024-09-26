function generateTable() {
    const number = document.getElementById('number').value;
    const tableContainer = document.getElementById('table-container');
    
    if (number === '') {
        tableContainer.innerHTML = '<p>Please enter a number.</p>';
        return;
    }

    let tableHTML = '<table><tr><th>Multiplication Table of ' + number + '</th></tr>';

    for (let i = 1; i <= 10; i++) {
        tableHTML += '<tr><td>' + number + ' x ' + i + ' = ' + (number * i) + '</td></tr>';
    }

    tableHTML += '</table>';
    tableContainer.innerHTML = tableHTML;
}
