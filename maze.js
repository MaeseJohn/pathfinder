class maze {

    #rows
    #columns
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

        for(let i = 0; i < this.#rows; i++)
        {
            let row = document.createElement("tr")
            row.id  = 'row' + i 
            table.appendChild(row)

            for(let i = 0; i <  this.#columns; i++)
            {
                let cell = document.createElement('td')
                cell.id  =  'cell' + i  
                row.appendChild(cell)
            }
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

}