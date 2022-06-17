import { Utils } from "../Utils"

export class Depthfirst {

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
            
            while(!valid && checks < 20)
            {
                checks++
                let direction = Math.round(Math.random() * 4)
                
                switch(direction)
                {
                    // UP
                    case 0:
                        if(!grid.isTopEdge(current))
                        {
                            let next = grid.getTopCell(current)
                            
                            if(!next.visited)
                            {
                                valid        = true
                                next.visited = true
                
                                stack.push(next)
                                current.removeTopWall()
                                next.removeBotWall()
                                
                                current.drawBlue()
                                next.drawViolet()
                            }
                        }
                    break;

                    // RIGHT
                    case 1:
                        if(!grid.isRightEdge(current))
                        {
                            let next = grid.getRightCell(current)
    
                            if(!next.visited)
                            {
                                valid        = true
                                next.visited = true

                                stack.push(next)
                                current.removeRightWall()
                                next.removeLeftWall()

                                current.drawBlue()
                                next.drawViolet()
                            }
                        }
                    break;

                    // BOT
                    case 2:
                        if(!grid.isBotEdge(current))
                        {
                            let next = grid.getBotCell(current)
                            
                            if(!next.visited)
                            {
                                valid        = true
                                next.visited = true

                                stack.push(next)
                                current.removeBotWall()
                                next.removeTopWall()

                                current.drawBlue()
                                next.drawViolet()
                            }
                        }
                    break;

                    // LEFT
                    case 3:
                        if(!grid.isLeftEdge(current))
                        {
                            let next = grid.getLeftCell(current)
                            
                            if(!next.visited)
                            {
                                valid        = true
                                next.visited = true

                                stack.push(next)
                                current.removeLeftWall()
                                next.removeRightWall()
                                
                                current.drawBlue()
                                next.drawViolet()
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
                    stack[stack.length - 1].drawViolet()
                }
            }

            await Utils.delay(speed)
        }
        grid.setDefaultBeginGoalCells()
    }
}