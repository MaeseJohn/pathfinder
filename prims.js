class Prims{

    #getAdyacentCells(cell)
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

    #breakWall(cell1, cell2)
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
                if(concat[i].equals(original[j]))
                {
                    isInOriginal = true
                    break
                }
            }
            if(!isInOriginal)
            {
                array.push(concat[i])
                concat[i].drawLightblue()
            }
            isInOriginal = false
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

        cellsArray = this.#concatarray(cellsArray, this.#getAdyacentCells(firstCell))

        const speed = document.getElementById('randomizerspeed').value

        while(cellsArray.length > 0)
        {
            //Pick randomcell from de array and mark it like visited
            let randomCell =  Math.round(Math.random() * (cellsArray.length - 1))
            let current = cellsArray[randomCell]
            current.visited = true

            //Separete visited and no visited adyacent cells from current cell
            let currentAdyacentsNoVisited = this.#getAdyacentCells(current).filter(cell => cell.visited == false)
            let currentAdyacentsVisited   = this.#getAdyacentCells(current).filter(cell => cell.visited == true) 

            //Take a random adyacent visited cell from current and brack the wall to conect it with the maze
            let random =  Math.round(Math.random() * (currentAdyacentsVisited.length - 1))
            this.#breakwall(currentAdyacentsVisited[random], current)
            
            //Insert the none visited adyacent cells in the cells array without duplicates
            cellsArray = this.#concatarray(cellsArray, currentAdyacentsNoVisited)

            cellsArray[randomCell].drawWhite()
            cellsArray.splice(randomCell,1)
            
            await Features.delay(speed)
        }
    }
}

