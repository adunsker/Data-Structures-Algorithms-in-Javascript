const shortestPath = (edges, nodeA, nodeB) => {
    const newEdges = adjacentList(edges)
    const visited = new Set([ nodeA ])
    const que = [ [nodeA, 0] ]

    while(que.length > 0) {
        const [node, distance] = que.shift() // [w, 0]
        if(node === nodeB) return distance

        for(let neighbor of graph[node]) {
            if(!visited.has(neighbor)) {
                visited.add(neighbor)
                que.push([neighbor, distance + 1])
            }
        }
    }

    return -1
};

const adjacentList = (edges) => {
    const graph = {}

    for (let edge of edges) {
        const [a, b] = edge
        if(!(a in graph)) graph[a] = []
        if(!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }
    
    return graph
}

const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ];
  
  shortestPath(edges, 'w', 'z'); // -> 2

//   w-x-y-z
//    \   /
//      v
