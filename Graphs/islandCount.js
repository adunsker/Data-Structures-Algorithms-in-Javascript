const islandCount = (grid) => {
    let visited = new Set()
    let numIslands = 0
    for(let r = 0; r < grid.length; r+= 1) {
        for(let c = 0; c < grid[r].length; c+= 1) {
            if(explore(grid, r, c, visited) === true) numIslands += 1
        }
    }
    return numIslands
  };

const explore = (grid, r, c, visited) => {
    let rowInbounds = 0 <= r && r < grid.length
    let colInbounds = 0 <= c && c < grid[0].length
    if(!rowInbounds || !colInbounds) return false

    if(grid[r][c] === 'W') return false
    
    const pos = r + ',' + c
    if(visited.has(pos)) return false
    visited.add(pos)

    explore(grid, r + 1, c, visited)
    explore(grid, r - 1, c, visited)
    explore(grid, r, c + 1, visited)
    explore(grid, r, c - 1, visited)

    return true
}

const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ];
  
  console.log(islandCount(grid)); // -> 3