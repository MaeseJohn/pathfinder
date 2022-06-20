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

    
    #pushAsPotentialNextCell(stack, explored, current, next, map)
    {
        if(!explored.includes(next))
        {
            stack.push(next)
            explored.push(next)
            next.drawYellow()
            map.set(`${next.getRow()}-${next.getColumn()}`, current)
        }
    }
    #processAdjacents(grid, stack, explored, current, map)
    {
        let next 

        if(!current.getTopWall())
        {
            next = grid.getTopCell(current)
            this.#pushAsPotentialNextCell(stack, explored, current, next, map)
        }

        if(!current.getRightWall())
        { 
            next = grid.getRightCell(current)
            this.#pushAsPotentialNextCell(stack, explored, current, next, map)
        }

        if(!current.getBotWall())   
        {
            next = grid.getBotCell(current)
            this.#pushAsPotentialNextCell(stack, explored, current, next, map)
        }

        if(!current.getLeftWall())  
        { 
            next = grid.getLeftCell(current)
            this.#pushAsPotentialNextCell(stack, explored, current, next, map) 
        }
    }

    async #drawPath(beginCell, goalCell, map, speed)
    {
        let pathColor = map.get(`${goalCell.getRow()}-${goalCell.getColumn()}`)
        
        while(!pathColor.equals(beginCell))
        {
            pathColor.drawViolet()
            pathColor = map.get(`${pathColor.getRow()}-${pathColor.getColumn()}`)

            await Utils.delay(speed)
        }
    }

    async solveMaze(grid)
    {
        let explored = []
        
        //Using stack array like a stack
        let stack = []
        let map = new Map()

        const goalCell = grid.getGoalCell()
        const beginCell = grid.getBeginCell()
        explored.push(beginCell)
        stack.push(beginCell)

        const speed = document.getElementById('randomizerspeed').value

        while(stack.length > 0)
        {
            let current = stack.pop()

            if(!current.equals(beginCell) && !current.equals(goalCell))
            {
                current.drawOrange()
            }

            if(current.equals(goalCell))
            {
                current.drawRed()
                break 
            }

            this.#processAdjacents(grid, stack, explored, current, map)
            await Utils.delay(speed)
        }

        this.#drawPath(beginCell, goalCell, map, speed)
    }
}