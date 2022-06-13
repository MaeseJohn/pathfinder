import { Features } from "../features"
import { find, union } from '@manubb/union-find'

export class Kruskal {

    async generateMaze(grid)
    {
        let edges = grid.getEdges()
        let sets  = grid.getSets()

        const speed = document.getElementById('randomizerspeed').value

        while(edges.length > 0)
        {
            let random = Math.round(Math.random() * (edges.length - 1))
            let current = edges[random]
            let next = current.direction == 'Top' ? grid.getTopCell(current.cell) : grid.getRightCell(current.cell)

            let currentSet = sets[current.cell.getRow()][current.cell.getColumn()]
            let nextSet    = sets[next.getRow()][next.getColumn()]

            console.log(currentSet)
            console.log(nextSet)
            console.log(find(currentSet) === find(nextSet))
           
            if(!(find(currentSet) === find(nextSet)))
            {   
                console.log('hola')
                if(current.direction == 'Top')
                {
                    current.cell.removeTopWall()
                    next.removeBotWall()
                }
                else
                {
                    console.log('putocarlos')
                    current.cell.removeRightWall()
                    next.removeLeftWall()
                }
                current.cell.drawWhite()
                next.drawWhite()

                union(currentSet, nextSet)
            }
            edges.splice(random,1)
            await Features.delay(speed)
        }
    }

}