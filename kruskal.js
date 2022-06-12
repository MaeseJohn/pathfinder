class Kruskal {

    #equalSet(current, next, sets)
    {
        let currentSet = sets[current.getRow()][current.getColumn()]
        let nextSet    = sets[next.getRow()][next.getColumn()]

        return currentSet == nextSet
    }

    #mergeSets(current, next, sets)
    {
        let currentSet = sets[current.getRow()][current.getColumn()] 
        sets[next.getRow()][next.getColumn()] = currentSet
    }

    async generateMaze(grid)
    {
        let edges = grid.getEdges()
        let sets  = grid.getSets()

        while(edges.length > 0)
        {
            let random = Math.round(Math.random() * (edges.length - 1))
            let current = edges[random]
            console.log(current)
            let next = current.direction == 'Top' ? grid.getTopCell(current.cell) : grid.getRightCell(current.cell)
           
            if(!this.#equalSet(current.cell, next, sets))
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

                this.#mergeSets(current.cell, next, sets)
            }
            edges.splice(random,1)
        }
    }

}