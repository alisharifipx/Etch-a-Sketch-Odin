function createGrid(size) {
    const container = document.querySelector('div.container');
    
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        for (let j = 0; j < size; j++) {
            const col = document.createElement('div');
            col.setAttribute('class','col');
            col.style.border = "1px solid black";
            col.textContent = (j * size) + i;
            col.onmouseover = () => {
                col.style.backgroundColor = 'blue';
            };
            row.appendChild(col);

        }
        container.appendChild(row);
    }
}

createGrid(16);
