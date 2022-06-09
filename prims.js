class Prims{

    #adyacentCells(cell)
    {
        let array = []

        if(cell.getRow() > 0)
        {
            array.push(grid.getCell(cell.getRow() - 1, cell.getColumn()))
        }
        if(cell.getRow() < grid.getRows() - 1)
        {
            array.push(grid.getCell(cell.getRow() + 1, cell.getColumn()))
        }

        if(cell.getColumn() > 0)
        {
            array.push(grid.getCell(cell.getRow(), cell.getColumn() - 1))
        }
        if(cell.getColumn() < grid.getRows() - 1)
        {
            array.push(grid.getCell(cell.getRow(), cell.getColumn() + 1))
        }
        return array
    }

    #breakwall(cell1, cell2)
    {
        if(cell1.getRow() > cell2.getRow())
        {
            cell1.up()
            cell2.bottom()
            return
        }
        if(cell1.getRow() < cell2.getRow())
        {
            cell1.bottom() 
            cell2.up()
            return
        }

        if(cell1.getColumn() > cell2.getColumn())
        {
            cell1.left() 
            cell2.right()  
            return
        }
        if(cell1.getColumn() < cell2.getColumn())
        {
            cell1.right() 
            cell2.left() 
            return
        }
    }

    #concatarray(original, concat)
    {
        let isInOriginal = false
        let array = original
        for(let i = 0; i < concat.length; i++)
        {
            for(let j = 0; j < original.length; j++)
            {
                if(concat[i].getCell() == original[j].getCell())
                {
                    isInOriginal = true
                    break
                }
            }
            if(!isInOriginal)
            {
                array.push(concat[i])
            }
        }
        return array
    }
    
    async generateMaze(grid)
    {
        let cellsArray =  []

        const randomRow    = Math.round(Math.random() * (grid.getRows() - 1))
        const randomColumn = Math.round(Math.random() * (grid.getColumns() - 1))
        const firstCell    = grid.getCell(randomRow, randomColumn)

        firstCell.visited  = true

        cellsArray = this.#adyacentCells(firstCell)

        const speed = document.getElementById('randomizerspeed').value

        while(cellsArray.length > 0)
        {
            let randomCell =  Math.round(Math.random() * (cellsArray.length - 1))
            let current = cellsArray[randomCell]
            current.visited = true

            let currentAdyacentsNoVisited = this.#adyacentCells(current).filter(cell => cell.visited == false)
            let currentAdyacentsVisited   = this.#adyacentCells(current).filter(cell => cell.visited == true) 
            console.log('1')
            console.log(currentAdyacentsNoVisited)
            console.log(currentAdyacentsVisited)
            console.log('2')

            if(currentAdyacentsVisited.length == 1)
            {
                this.#breakwall(currentAdyacentsVisited[0], current)
            }
            if(currentAdyacentsVisited.length > 1)
            {
                let random =  Math.round(Math.random() * (currentAdyacentsVisited.length - 1))
                this.#breakwall(currentAdyacentsVisited[random], current)
            }

            
            cellsArray = this.#concatarray(cellsArray, currentAdyacentsNoVisited)
            cellsArray.splice(randomCell,1)
            
            await Features.delay(speed)
        }
    }
}

