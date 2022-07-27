# Pathfinder Visualizer
The main goal of this project is to develop an application to visualize the operation of graph traversal algorithms in JavaScript, in order to learn and practice how they work.

### Technologies summary
Vanilla JavaScript, Object-Oriented Programming, HTML, CSS.

#### Algorithims
- **Maze generators:** Randomized DFS,  Randomized Kruskal's,  Randomized Prim's. More info [here](https://en.wikipedia.org/wiki/Maze_generation_algorithm# "here")
- **Maze solvers:** [DFS](https://en.wikipedia.org/wiki/Depth-first_search "DFS"), [BFS](https://en.wikipedia.org/wiki/Breadth-first_search "BFS"), [A*](https://en.wikipedia.org/wiki/A*_search_algorithm "A*")

------------

## How it works?
In the navbar we can see several options that are separated into 2 blocks. The first one is in charge of shaping the maze and the second one is in charge of solving the maze.

![NavBar](readmeresources/Navbar.png?raw=true)

### First block

![NavBar1](readmeresources/firstBlock.png?raw=true)

- **Size:** the first text box determines the height and the second one the width of the board. It will not be possible to exceed a height of 50 and a width of 100 for aesthetic reasons, beyond these measures the cells begin to be little visible.

- **Randomizer:** is a dropdown that allows you to choose which algorithm will be used to generate the maze.

- **Speed:** is a dropdown that allows you to choose at what speed the maze will be generated.

- **WallBreaker:** is a dropdown that allows you to destroy a % of the walls randomly. This option is used to generate several possible paths between the different cells.

Clicking the first Run button will generate a totally random maze determined by the previous values.

![options](readmeresources/firstblockoptions.jpg?raw=true)

- **Pictures 1 and 2:** in these screemshots we can see how size works. It should be noted that in the second screenshot the width and height exceed the limits and a maze is generated with the maximum possible values.

- **Pictures 3 and 4:** in these screemshots we can see how BreakWalls works.

### Second block

![NavBar2](readmeresources/secondBlock.png?raw=true)

- **Pathfinder:** in this dropdown you select the algorithm that will be used to solve the maze.

- **Speed:** this dropdown modifies the speed at which the maze is solved

Clicking the Run button will start the animation that shows how the algorithm work. Clicking Remove path button will remove the explored paths in he current maze without removing the walls.

When generating the maze, 2 boxes of different colors will appear the green one represents the beginning of the maze and the red one the end. You can change the position of these boxes by dragging them through the maze. (If you move the squares while the algorithms are running, they will continue their course with
the values they had when they started)
