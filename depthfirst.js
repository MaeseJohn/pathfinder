class Depthfirst {

    async generateMaze(grid)
    {
        let stack = []

        const firstcell = grid.getRandomCell()
        firstcell.visited  = true
        stack.push(firstcell)

        const speed = document.getElementById('randomizerspeed').value

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
                        if(current.getColumn() > 0)
                        {
                            let next = grid.getCell(current.getRow(), current.getColumn() - 1)
                            
                            if(!next.visited)
                            {
                                valid        = true
                                next.visited = true

                                stack.push(next)
                                current.removeLeftWall()
                                next.removeRightWall()
                                
                                current.drawLightblue()
                                next.drawBlue()
                            }
                        }
                    break;

                    // RIGHT
                    case 1:
                        if(current.getColumn() < grid.getColumns() - 1)
                        {
                            let next = grid.getCell(current.getRow(), current.getColumn() + 1)
    
                            if(!next.visited)
                            {
                                valid        = true
                                next.visited = true

                                stack.push(next)
                                current.removeRightWall()
                                next.removeLeftWall()

                                current.drawLightblue()
                                next.drawBlue()
                            }
                        }
                    break;

                    // BOTTOM
                    case 2:
                        if(current.getRow() < grid.getRows() - 1)
                        {
                            let next = grid.getCell(current.getRow() + 1, current.getColumn())
                            
                            if(!next.visited)
                            {
                                valid        = true
                                next.visited = true

                                stack.push(next)
                                current.removeBotWall()
                                next.removeTopWall()

                                current.drawLightblue()
                                next.drawBlue()
                            }
                        }
                    break;

                    // UP
                    case 3:
                        //GET 
                        if(current.getRow() > 0)
                        {
                            //GET TOP GET... 
                            let next = grid.getCell(current.getRow() - 1, current.getColumn())
                            
                            if(!next.visited)
                            {
                                valid        = true
                                next.visited = true
    
                                stack.push(next)
                                current.removeTopWall()
                                next.removeBotWall()
                                
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

            await Features.delay(speed)
        }
    }
}