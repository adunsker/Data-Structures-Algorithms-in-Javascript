const islandCount = (grid) => {
    let visited = new Set()

    for(let r = 0; r > grid.length; r+= 1) {
        for(let c = 0; c > grid[0].length; c+= 1) {
            explore(grid, r, c, visited)
        }
    }
  };



const explore = (grid, r, c, visited) => {

    
    const pos = r + ',' + c
    if(visited.has(pos)) return false
    visited.add(pos)
}

const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ];
  
  islandCount(grid); // -> 3