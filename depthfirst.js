class Depthfirst {

    async generateMaze(grid)
    {
        let stack = []

        const randomRow    = Math.round(Math.random() * (grid.getRows() - 1))
        const randomColumn = Math.round(Math.random() * (grid.getColumns() - 1))
        const firstcell    = grid.getCell(randomRow, randomColumn)
        
        firstcell.visited  = true
        stack.push(firstcell)

        let selectvalue = document.getElementById('randomizerspeed').value

        while(stack.length > 0)
        {
            let valid     = false
            let checks    = 0
            let current   = stack[stack.length - 1]
            
            while(!valid && checks < 30)
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
                                
                                current.drawLightblue()
                                next.drawBlue()
                            }
                        }
                    break;

                    // RIGHT
                    case 1:
                        if(current.column < grid.getColumns() - 1)
                        {
                            let next = grid.getCell(current.row, current.column + 1)
    
                            if(!next.visited)
                            {
                                valid        = true
                                next.visited = true

                                stack.push(next)
                                current.right()
                                next.left()

                                current.drawLightblue()
                                next.drawBlue()
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

                                current.drawLightblue()
                                next.drawBlue()
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
                                
                                current.drawLightblue()
                                next.drawBlue()
                            }
                        }
                    break;
                }
            }

            if(!valid)
            {
                stack.pop().drawWhite()
                
                if(stack.length > 0)
                {
                    stack[stack.length - 1].drawBlue()
                }
            }

            await Features.delay(selectvalue)
        }
    }
}