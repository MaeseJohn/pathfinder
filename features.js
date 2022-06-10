class Features {

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
                algorithim = new Prims()
            break
        }
        return algorithim
    }
    static generateMaze()
    {
        let algorithim = Features.#selectAlgorithim()
        algorithim.generateMaze()
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