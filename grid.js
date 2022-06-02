class Grid {

    #rows
    #columns
    cells = []
    constructor(rows, columns)
    {
        this.#rows    = rows
        this.#columns = columns
    }

    makeGrid()
    {
        let table = document.getElementById('grid')
        
        let sideSizes
        sideSizes = this.#gridSize()
        table.style.width  = sideSizes.width + 'px'
        table.style.height = sideSizes.height + 'px'

        for(let x = 0; x < this.#rows; x++)
        {
            let row = document.createElement("tr")
            table.appendChild(row)
            
            const rows = []

            for(let i = 0; i <  this.#columns; i++)
            {
                let cell = document.createElement('td')
                cell.id  =  `cell${x}${i}`
                row.appendChild(cell)

                rows.push(new Cell(x, i))
            }

            this.cells.push(rows)
        }
    }

    // Calculate the size of the sides to generate square cells
    #gridSize()
    {
        let navbarHeight = document.getElementById('navbar').clientHeight

        let sideSizes = {
            width: window.innerWidth,
            height: window.innerHeight - navbarHeight
        }

        let width_columns = sideSizes.width/ this.#columns
        let height_rows   = sideSizes.height/this.#rows

        if(width_columns < height_rows)
        {
            sideSizes.height = width_columns * this.#rows
        }

        if(height_rows < width_columns)
        {
            sideSizes.width = height_rows *  this.#columns
        }

        return sideSizes;
    }

    removeGrid()
    {
        for(let i = 0; i < this.#rows; i++)
        {
            let row = document.getElementById('row' + i)
            row.remove()
        }
    }
}