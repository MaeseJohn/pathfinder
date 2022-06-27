import { Utils } from "../Utils"
import { Queue } from '@datastructures-js/queue';

export class Breadthfirst {

    #stop = false

    stop()
    {
        this.#stop = true
    }
    
    #pushAsPotentialNextCell(queue, explored, current, next, map)
    {
        if(!explored.includes(next))
        {
            queue.enqueue(next)
            explored.push(next)
            next.drawYellow()
            map.set(`${next.getRow()}-${next.getColumn()}`, current)
        }
    }

    #processAdjacents(grid, queue, explored, current, map)
    {
        let next 

        if(!current.getTopWall())
        {
            next = grid.getTopCell(current)
            this.#pushAsPotentialNextCell(queue, explored, current, next, map)
        }

        if(!current.getRightWall())
        { 
            next = grid.getRightCell(current)
            this.#pushAsPotentialNextCell(queue, explored, current, next, map)
        }

        if(!current.getBottomWall())   
        {
            next = grid.getBottomCell(current)
            this.#pushAsPotentialNextCell(queue, explored, current, next, map)
        }

        if(!current.getLeftWall())  
        { 
            next = grid.getLeftCell(current)
            this.#pushAsPotentialNextCell(queue, explored, current, next, map) 
        }
    }

    async #drawPath(beginCell, goalCell, map, speed)
    {
        let pathColor = map.get(`${goalCell.getRow()}-${goalCell.getColumn()}`)
        
        while(!pathColor.equals(beginCell))
        {
            if(this.#stop){ return }
            pathColor.drawViolet()
            pathColor = map.get(`${pathColor.getRow()}-${pathColor.getColumn()}`)

            await Utils.delay(speed)
        }
    }

    async solveMaze(grid)
    {
        let explored = []
        let queue = new Queue()
        let map = new Map()

        const goalCell = grid.getGoalCell()
        const beginCell = grid.getBeginCell()
        explored.push(beginCell)
        queue.enqueue(beginCell)

        const speed = document.getElementById('solvespeed').value

        while(!queue.isEmpty())
        {
            if(this.#stop){ return } 
            let current = queue.dequeue()

            if(!current.equals(beginCell) && !current.equals(goalCell))
            {
                current.drawOrange()
            }

            if(current.equals(goalCell))
            {
                current.drawRed()
                break 
            }

            this.#processAdjacents(grid, queue, explored, current, map)
            await Utils.delay(speed)
        }

        this.#drawPath(beginCell, goalCell, map, speed)
    }
}