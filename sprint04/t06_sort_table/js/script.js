document.addEventListener('DOMContentLoaded', function() {
    const notification = document.getElementById('notification');
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
    const main = document.querySelector('main');
    main.insertBefore(table, notification);

    const columns = ['Name', 'Strength', 'Age'];
    const superheroes = [
        { name: 'Iron Man', strength: 12, age: 40 },
        { name: 'Captain America', strength: 11, age: 100 },
        { name: 'Thor', strength: 10, age: 1000 },
        { name: 'Black Widow', strength: 3, age: 35 },
        { name: 'Hulk', strength: 4, age: 49 },
        { name: 'Spider-Man', strength: 2, age: 16 },
        { name: 'Captain Marvel', strength: 1, age: 29 },
        { name: 'Wolverine', strength: 8, age: 197 },
        { name: 'Doctor Strange', strength: 9, age: 43 },
        { name: 'Black Panther', strength: 9, age: 42 }
    ];

    const headerRow = document.createElement('tr');
    columns.forEach(column => {
    const th = document.createElement('th');
    th.textContent = column;
    th.addEventListener('click', function() {
        sortTable(column.toLowerCase());
    });
    headerRow.appendChild(th);
    });
    table.insertBefore(headerRow, tbody);
    placeholder.innerHTML="";

    function renderTable() {
        tbody.innerHTML = '';
        superheroes.forEach(superhero => {
            const row = document.createElement('tr');
            columns.forEach(column => {
                const td = document.createElement('td');
                td.textContent = superhero[column.toLowerCase()];
                row.appendChild(td);
            });
            tbody.appendChild(row);
        });
    }

    function sortTable(column) {
        const index = columns.indexOf(column.charAt(0).toUpperCase() + column.slice(1));
        superheroes.sort((a, b) => {
            if (typeof a[column] === 'string') {
                return a[column].localeCompare(b[column]);
            } else {
                return a[column] - b[column];
            }
        });
        renderTable();
        showNotification(column);
    }

    function showNotification(column) {
        const order = 'ASC';
        notification.textContent = `Sorting by ${column}, order: ${order}`;
    }

    renderTable();
});

