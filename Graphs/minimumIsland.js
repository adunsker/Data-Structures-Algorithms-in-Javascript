const minimumIsland = (grid) => {
  let visited = new Set()
  let minSize = Infinity
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      let size = explore(grid, r, c, visited)
      if(0 < size && size < minSize) minSize = size
    }  
  }
  return minSize
};

const explore = (grid, r, c, visited) => {
  const colMax = 0 <= r && r < grid.length
  const rowMax = 0 <= c && c < grid[0].length
  if(!colMax || !rowMax) return 0

  if(grid[r][c] === 'W') return 0

  let pos = r + ',' + c
  if(visited.has(pos)) return 0
  visited.add(pos)

  return 1 + 
  explore(grid, r + 1, c, visited) + 
  explore(grid, r - 1, c, visited) + 
  explore(grid, r, c + 1, visited) + 
  explore(grid, r, c - 1, visited)
}

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

console.log(minimumIsland(grid)); // -> 2
