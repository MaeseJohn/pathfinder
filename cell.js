class Cell {

    #row
    #column
    #cell
    constructor(row, column, cell)
    {
        this.#row    = row
        this.#column = column
        this.#cell   = cell

        this.visited = false

        this.topwall   = true
        this.rightwall = true
        this.botwall   = true
        this.leftwall  = true
        
    }

    left()
    {
        this.leftwall = false
        this.cellStyle()
    }

    right()
    {
        this.rightwall = false
        this.cellStyle()
    }

    bottom()
    {
        this.botwall = false
        this.cellStyle()
    }

    up()
    {
        this.topwall = false
        this.cellStyle()
    }

    drawLightblue()
    {
        this.#cell.style.backgroundColor = 'lightblue'
    }

    drawBlue()
    {
        this.#cell.style.backgroundColor = '#5dade2'
    }

    drawWhite()
    {
        this.#cell.style.backgroundColor = 'white'
    }
    
    cellStyle()
    {
        //Undraw walls
        let top   = this.topwall   ? 'black' : 'white'
        let right = this.rightwall ? 'black' : 'white'
        let bot   = this.botwall   ? 'black' : 'white'
        let left  = this.leftwall  ? 'black' : 'white'

        this.#cell.style.borderColor = `${top} ${right} ${bot} ${left}`


        //Putting dashed for undraw walls cuz hidden or none colapse the cells
        //and change his size
        top   = this.topwall   ? 'solid' : 'dashed'
        right = this.rightwall ? 'solid' : 'dashed'
        bot   = this.botwall   ? 'solid' : 'dashed'
        left  = this.leftwall  ? 'solid' : 'dashed'

        this.#cell.style.borderStyle = `${top} ${right} ${bot} ${left}`
    }


    getRow()
    {
        return this.#row
    }

    getColumn()
    {
        return this.#column
    }

    getCell()
    {
        return this.#cell
    }
}