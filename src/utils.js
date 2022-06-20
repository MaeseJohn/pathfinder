import { Depthfirst } from "./algorithims/depthfirst"
import { Prim } from "./algorithims/prim"
import { Kruskal } from "./algorithims/kruskal"
import { Breadthfirst } from "./algorithims/breadthfirst" 


export class Utils {

    static #selectAlgorithim()
    {
        let selectValue = document.getElementById('randomizerAlgorithim').value
        let algorithim
        switch(selectValue)
        {
            case '0':
                algorithim = new Depthfirst()
            break

            case '1':
                algorithim = new Prim()
            break

            case '2':
                algorithim = new Kruskal()
            break
        }
        return algorithim
    }

    static generateMaze(grid)
    {
        let algorithim = Utils.#selectAlgorithim()
        algorithim.generateMaze(grid)
    }

    static solveMaze(grid)
    {
        let algorithim = new Breadthfirst()
        algorithim.solveMaze(grid)
    }

    static delay(selectvalue)
    {
        let ms

        //Revisión
        switch(selectvalue)
        {
            //Instant
            case '0':
                ms = 0
            break

            //Quick
            case '1':
                ms = 10
            break

            //Average
            case '2':
                ms = 100
            break

            //Slow
            case '3':
                ms = 500
            break
        }

        if(ms > 0)
        {
            return new Promise(resolve => setTimeout(resolve, ms))
        }
    }
}