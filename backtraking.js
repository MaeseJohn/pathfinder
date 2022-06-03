class Backtraking {

    generateMaze(grid)
    {
        let stack = []

        const randomRow    = Math.round(Math.random() * grid.getRows())
        const randomColumn = Math.round(Math.random() * grid.getColumns())
        const firstcell    = grid.getCell(randomRow, randomColumn)
        
        firstcell.visited  = true
        stack.push(firstcell)

        while(stack.length > 0)
        {
            let valid     = false
            let checks    = 0
            let current   = stack[stack.length - 1]
            
            while(!valid && checks < 10)
            {
                checks++
                let direction = Math.round(Math.random() * 4)

                switch(direction)
                {
                    // LEFT
                    case 0:
                        if(current.column > 0)
                        {
                            let next = grid.getCell(current.row, current.column - 1)
                            
                            if(!next.visited)
                            {
                                valid        = true
                                next.visited = true

                                stack.push(next)
                                current.left()
                                next.right()
                            }
                        }
                    break;

                    // RIGHT
                    case 1:
                        if(current.column < grid.getColumns() - 1)
                        {
                            let next = grid.getCell(current.row, current.column + 1)
                            console.log(next)
                            if(!next.visited)
                            {
                                valid        = true
                                next.visited = true

                                stack.push(next)
                                current.right()
                                next.left()
                            }
                        }
                    break;

                    // BOTTOM
                    case 2:
                        if(current.row < grid.getRows() - 1)
                        {
                            let next = grid.getCell(current.row + 1, current.column)
                            
                            if(!next.visited)
                            {
                                valid        = true
                                next.visited = true

                                stack.push(next)
                                current.bottom()
                                next.up()
                            }
                        }
                    break;

                    // UP
                    case 3:
                        if(current.row > 0)
                        {
                            let next = grid.getCell(current.row - 1, current.column)
                            
                            if(!next.visited)
                            {
                                valid        = true
                                next.visited = true
    
                                stack.push(next)
                                current.up()
                                next.bottom()
                                
                            }
                        }
                    break;
                }
            }

            if(!valid)
            {
                stack.pop()
            }
        }
    }
}