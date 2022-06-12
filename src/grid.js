import { Cell } from './cell'
import { makeSet, find, union } from '@manubb/union-find'

export class Grid {

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
        
        let sideSizes = this.#gridSize()
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

        let set = makeSet()
        console.log(set)
        let set2 = makeSet()
        console.log(set2)
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
    

    // EDGE CHECK

    isTopEdge(cell)
    {
        return (cell.getRow() == 0)
    }

    isRightEdge(cell)
    {
        return (cell.getColumn() == this.#columns - 1)
    }

    isBotEdge(cell)
    {
        return (cell.getRow() == this.#rows - 1)
    }

    isLeftEdge(cell)
    {
        return (cell.getColumn() == 0)
    }
    

    // GETTERS

    getTopCell(cell)
    {
        return this.#cells[cell.getRow() - 1][cell.getColumn()]
    }

    getRightCell(cell)
    {
        return this.#cells[cell.getRow()][cell.getColumn() + 1]
    }

    getBotCell(cell)
    {
        return this.#cells[cell.getRow() + 1][cell.getColumn()]
    }

    getLeftCell(cell)
    {
        return this.#cells[cell.getRow()][cell.getColumn() - 1]
    }

    getRandomCell()
    {
        const randomRow    = Math.round(Math.random() * (this.#rows - 1))
        const randomColumn = Math.round(Math.random() * (this.#columns - 1))
        return this.#cells[randomRow][randomColumn]
    }

    getEdges()
    {
        let edges = []
        for(let i = 0; i < this.#rows; i++)
        {
            for(let j = 0; j < this.#columns; j++)
            {
                if(!this.isTopEdge(this.#cells[i][j]))
                {
                    let edge = {
                        cell: this.#cells[i][j],
                        direction: 'Top'
                    }
                    edges.push(edge)
                }

                if(!this.isRightEdge(this.#cells[i][j]))
                { 
                    let edge = {
                        cell: this.#cells[i][j],
                        direction: 'Right'
                    }  
                    edges.push(edge)
                }
            }
        }
   
        return edges
    }

    getSets()
    {
        let sets = []
        for(let i = 0; i < this.#rows; i++)
        {
            let row = []
            for(let j = 0; j < this.#columns; j++)
            {
                let set = `${i}${j}`
                console.log(set)
                row.push(set)
            }
            sets.push(row)
        }
        return sets
    }
}