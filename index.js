import { Grid } from './src/grid'
import { Utils } from './src/Utils'

let grid
const MAZE_RANDOMIZER_BUTTON = document.getElementById('mazerun')

MAZE_RANDOMIZER_BUTTON.onclick = function()
{
    if(grid != undefined)
    {
        grid.removeGrid()
    }

    let gridHeight = document.getElementById('heigth').value
    let gridWidth  = document.getElementById('width').value
    grid = new Grid(gridHeight, gridWidth)
    grid.makeGrid()

    Utils.generateMaze(grid)
}

const PATHFINDER_RUN_BUTTON = document.getElementById('pathrun')

PATHFINDER_RUN_BUTTON.onclick = function()
{
    if(grid == undefined)
    {
        return
    }

    Utils.solveMaze(grid)
}