import { Grid } from './src/grid'
import { Utils } from './src/utils'

let grid
const MAZE_RANDOMIZER_BUTTON = document.getElementById('mazerun')

MAZE_RANDOMIZER_BUTTON.onclick = function()
{
    if(grid != undefined)
    {
        grid.removeGrid()
    }

    let gridHeight = document.getElementById('heigth').value
    gridHeight = gridHeight > 50 ? 50 : gridHeight

    let gridWidth  = document.getElementById('width').value
    gridWidth = gridWidth > 100 ? 100 : gridWidth
    
    grid = new Grid(gridHeight, gridWidth)
    grid.makeGrid()

    Utils.generateMaze(grid)
}

const PATHFINDER_RUN_BUTTON = document.getElementById('pathrun')

let algorithim

PATHFINDER_RUN_BUTTON.onclick = function()
{
    if(grid == undefined)
    {
        return
    }

    if(algorithim != undefined)
    {
        algorithim.stop()
        grid.clearGrid()
    }

    algorithim = Utils.selectSolveAlgorithim()
    algorithim.solveMaze(grid)
}

const CLEAR_BUTTON = document.getElementById('clear')

CLEAR_BUTTON.onclick = function()
{
    if(algorithim != undefined)
    {
        algorithim.stop()
    }
    grid.clearGrid()
}