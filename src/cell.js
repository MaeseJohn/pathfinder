export class Cell {

    #row
    #column
    #cell
    #topWall
    #rightWall
    #botWall
    #leftWall

    constructor(row, column, cell)
    {
        this.#row    = row
        this.#column = column
        this.#cell   = cell

        this.visited = false

        this.#topWall   = true
        this.#rightWall = true
        this.#botWall   = true
        this.#leftWall  = true   
    }

    //WallRemovers
    removeLeftWall()
    {
        this.#leftWall = false
        this.#updateWallsStyle()
    }

    removeRightWall()
    {
        this.#rightWall = false
        this.#updateWallsStyle()
    }

    removeBotWall()
    {
        this.#botWall = false
        this.#updateWallsStyle()
    }

    removeTopWall()
    {
        this.#topWall = false
        this.#updateWallsStyle()
    }

    #updateWallsStyle()
    {
        this.updateWallsColor()

        //Putting dashed for undraw walls cuz hidden or none colapse the cells
        //and change his size
        let top   = this.#topWall   ? 'solid' : 'dashed'
        let right = this.#rightWall ? 'solid' : 'dashed'
        let bot   = this.#botWall   ? 'solid' : 'dashed'
        let left  = this.#leftWall  ? 'solid' : 'dashed'

        this.#cell.style.borderStyle = `${top} ${right} ${bot} ${left}`
    }

    //ColorManage
    drawViolet()
    {
        this.#cell.style.backgroundColor = '#af7ac5'
    }

    drawGreen()
    {
        this.#cell.style.backgroundColor = '#52be80'
    }

    drawRed()
    {
        this.#cell.style.backgroundColor = '#ff1800'
    }

    drawBlue()
    {
        this.#cell.style.backgroundColor = '#5dade2'
    }

    drawWhite()
    {
        this.#cell.style.backgroundColor = 'white'
    }

    drawOrange()
    {
        this.#cell.style.backgroundColor = 'orange'
    }

    drawYellow()
    {
        this.#cell.style.backgroundColor = 'yellow'
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
        wallColor.top   = this.#topWall   ? 'black' : 'white'
        wallColor.right = this.#rightWall ? 'black' : 'white'
        wallColor.bot   = this.#botWall   ? 'black' : 'white'
        wallColor.left  = this.#leftWall  ? 'black' : 'white'
        
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

    getTopWall()
    {
        return this.#topWall
    }

    getRightWall()
    {
        return this.#rightWall
    }

    getBotWall()
    {
        return this.#botWall
    }

    getLeftWall()
    {
        return this.#leftWall
    }

    //SETTERS
    setDraggable(bool)
    {
        this.#cell.draggable = bool
    }
  
}