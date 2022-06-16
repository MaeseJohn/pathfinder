import { Grid } from './src/grid'
import { Features } from './src/features'

let grid
const MAZE_RANDOMIZER_BUTTON = document.getElementById('mazerun')

MAZE_RANDOMIZER_BUTTON.onclick = function()
{
    if(grid != undefined)
    {
        grid.removeGrid();
    }

    let gridHeight = document.getElementById('heigth').value
    let gridWidth  = document.getElementById('width').value
    grid = new Grid(gridHeight, gridWidth)
    grid.makeGrid()
    
    Features.generateMaze(grid)
}



