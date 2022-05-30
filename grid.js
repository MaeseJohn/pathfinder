function makeGrid(rows, columns)
{
    let table = document.getElementById('grid')
    
    let sideSizes
    sideSizes = gridSize(rows, columns)
    table.style.width = sideSizes.width + 'px'
    table.style.height = sideSizes.height + 'px'

    for(let i = 0; i < rows; i++)
    {
        let row = document.createElement("tr")

        //Chage last colum id to made it black with css 
        row.id = (i + 1 != rows) ? 'row' + i : 'lastrow'

        table.appendChild(row)

        for(let i = 0; i < columns; i++)
        {
            let cell = document.createElement('td')
            
            //Chage last row id to made it black with css 
            cell.id = (i + 1 != columns) ? 'cell' + i : 'lastcell' 

            row.appendChild(cell)
        }
    }
   
}

// Calculate the size of the sides to generate square cells
function gridSize(rows, columns)
{
    let navbarHeight = document.getElementById('navbar').clientHeight

    let sideSizes = {
        width: window.innerWidth,
        height: window.innerHeight - navbarHeight
    }

    let width_columns = sideSizes.width/columns
    let height_rows   = sideSizes.height/rows

    if(width_columns < height_rows)
    {
        sideSizes.height = width_columns * rows
    }

    if(height_rows < width_columns)
    {
        sideSizes.width = height_rows * columns
    }

    return sideSizes;
}
