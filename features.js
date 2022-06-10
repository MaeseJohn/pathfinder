class Features {
    static generateMaze(grid, algorithim)
    {
        algorithim.generateMaze(grid)
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