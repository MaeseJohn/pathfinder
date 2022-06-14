export class Cell {

    #row
    #column
    #cell
    #topwall
    #rightwall
    #botwall
    #leftwall

    constructor(row, column, cell)
    {
        this.#row    = row
        this.#column = column
        this.#cell   = cell

        this.visited = false

        this.#topwall   = true
        this.#rightwall = true
        this.#botwall   = true
        this.#leftwall  = true   
    }

    //WallRemovers
    removeLeftWall()
    {
        this.#leftwall = false
        this.#updateWallsStyle()
    }

    removeRightWall()
    {
        this.#rightwall = false
        this.#updateWallsStyle()
    }

    removeBotWall()
    {
        this.#botwall = false
        this.#updateWallsStyle()
    }

    removeTopWall()
    {
        this.#topwall = false
        this.#updateWallsStyle()
    }

    #updateWallsStyle()
    {
        this.updateWallsColor()

        //Putting dashed for undraw walls cuz hidden or none colapse the cells
        //and change his size
        let top   = this.#topwall   ? 'solid' : 'dashed'
        let right = this.#rightwall ? 'solid' : 'dashed'
        let bot   = this.#botwall   ? 'solid' : 'dashed'
        let left  = this.#leftwall  ? 'solid' : 'dashed'

        this.#cell.style.borderStyle = `${top} ${right} ${bot} ${left}`
    }

    //ColorManage
    drawGreen()
    {
        this.#cell.style.backgroundColor = '#52be80'
    }

    drawBlue()
    {
        this.#cell.style.backgroundColor = '#5dade2'
    }

    drawWhite()
    {
        this.#cell.style.backgroundColor = 'white'
        //this.#cell.className = 'explored-node'
    }

   //Wall color manage
   #getWallsColor()
    {
        let wallColor = {
            top: '',
            right:'',
            bot:'',
            left:''
        }
        wallColor.top   = this.#topwall   ? 'black' : 'white'
        wallColor.right = this.#rightwall ? 'black' : 'white'
        wallColor.bot   = this.#botwall   ? 'black' : 'white'
        wallColor.left  = this.#leftwall  ? 'black' : 'white'
        
        return wallColor
    }

    updateWallsColor()
    {
        let wallColor = this.#getWallsColor()
        this.#cell.style.borderColor = `${wallColor.top}  ${wallColor.right} ${wallColor.bot} ${wallColor.left}` 
    }

    drawTopWallRed()
    {
        let wallColor = this.#getWallsColor()
        this.#cell.style.borderColor = `red  ${wallColor.right} ${wallColor.bot} ${wallColor.left}`
    }
    drawRightWallRed()
    {
        let wallColor = this.#getWallsColor()
        this.#cell.style.borderColor = `${wallColor.top} red ${wallColor.bot} ${wallColor.left}`
    }
    drawBotWallRed()
    {
        let wallColor = this.#getWallsColor()
        this.#cell.style.borderColor = `${wallColor.top} ${wallColor.right} red ${wallColor.left}`
    }
    drawLeftWallRed()
    {
        let wallColor = this.#getWallsColor()
        this.#cell.style.borderColor = `${wallColor.top} ${wallColor.right} ${wallColor.bot} red`
    }


    equals(cell)
    {
        return (this.#column == cell.#column && this.#row == cell.#row)
    }

    //GETTERS
    getColumn()
    {
        return this.#column
    }
    getRow()
    {
        return this.#row
    }
  
}