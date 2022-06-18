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

    
    #pushAsPotentialNextCell(frontier, explored, current, next, map)
    {
        if(!explored.includes(next))
        {
            frontier.push(next)
            explored.push(next)
            next.drawYellow()
            map.set(`${next.getRow()}-${next.getColumn()}`, current)
        }
    }
    #processAdjacents(grid, frontier, explored, current, map)
    {
        let next 

        if(!current.getTopWall())
        {
            next = grid.getTopCell(current)
            this.#pushAsPotentialNextCell(frontier, explored, current, next, map)
        }

        if(!current.getRightWall())
        { 
            next = grid.getRightCell(current)
            this.#pushAsPotentialNextCell(frontier, explored, current, next, map)
        }

        if(!current.getBotWall())   
        {
            next = grid.getBotCell(current)
            this.#pushAsPotentialNextCell(frontier, explored, current, next, map)
        }

        if(!current.getLeftWall())  
        { 
            next = grid.getLeftCell(current)
            this.#pushAsPotentialNextCell(frontier, explored, current, next, map) 
        }
    }

    async solveMaze(grid)
    {
        let explored = []
        let frontier = []
        let map = new Map()

        const goalCell = grid.getGoalCell()
        const beginCell = grid.getBeginCell()
        explored.push(beginCell)
        frontier.push(beginCell)

        const speed = document.getElementById('randomizerspeed').value

        while(frontier.length > 0)
        {
            let current = frontier.pop()

            if(!current.equals(beginCell) && !current.equals(goalCell))
            {
                current.drawOrange()
            }

            if(current.equals(goalCell))
            {
                current.drawRed()
                break 
            }

            this.#processAdjacents(grid, frontier, explored, current, map)
            await Utils.delay(speed)
        }

        let pathColor = map.get(`${goalCell.getRow()}-${goalCell.getColumn()}`)
        
        while(!pathColor.equals(beginCell))
        {
            pathColor.drawViolet()
            pathColor = map.get(`${pathColor.getRow()}-${pathColor.getColumn()}`)

            await Utils.delay(speed)
        }
    }
}