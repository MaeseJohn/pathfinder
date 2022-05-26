function makeGrid(rows, columns)
{
    let table = document.getElementById('grid')
    let navbarHeight = document.getElementById('navbar').clientHeight

    let width = window.innerWidth
    let height = window.innerHeight

    table.style.width = width + 'px'
    table.style.height = height - navbarHeight + 'px'

    for(let i = 0; i < rows; i++)
    {
        let row = document.createElement("tr")
        row.id = (i + 1 != rows) ? 'row' + i : 'lastrow'
        row.style.height = window.innerHeight/rows
        table.appendChild(row)

        for(let i = 0; i < columns; i++)
        {
            let cell = document.createElement('td')
            cell.id = (i + 1 != columns) ? 'cell' + i : 'lastcell' 
            cell.style.width = window.innerWidth/columns
            row.appendChild(cell)
        }
    }
}