class Grid {

    #rows
    #columns
    #cells = []
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
            let row = document.createElement('tr')
            row.id = `row${x}`
            table.appendChild(row)
            
            const rows = []

            for(let i = 0; i <  this.#columns; i++)
            {
                let cell = document.createElement('td')
                cell.id  =  `cell${x}${i}`
                row.appendChild(cell)

                rows.push(new Cell(x, i, cell))
            }

            this.#cells.push(rows)
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

        let width_columns = sideSizes.width/this.#columns
        let height_rows   = sideSizes.height/this.#rows

        if(width_columns < height_rows)
        {
            sideSizes.height = width_columns * this.#rows
        }
        else if(width_columns > height_rows)
        {
            sideSizes.width = height_rows *  this.#columns
        }

        return sideSizes;
    }

    removeGrid()
    {
        for(let x = 0; x < this.#rows; x++){
            let row = document.getElementById(`row${x}`)
            row.remove()
        }
        this.#cells.length = 0
    }
    

    // GETTERS
    getRows()
    {
        return this.#rows
    }

    getColumns()
    {
        return this.#columns
    }

    getCell(row, column)
    {
        return this.#cells[row][column]
    }

    getRandomCell()
    {
        const randomRow    = Math.round(Math.random() * (this.#rows - 1))
        const randomColumn = Math.round(Math.random() * (this.#columns - 1))
        return this.#cells[randomRow, randomColumn]
    }
}