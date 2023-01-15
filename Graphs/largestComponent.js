const largestComponent = (graph) => {
    const visited = new Set()
    let longest = 0

    for(let node in graph) {
        let size = explore(graph, node, visited)
        if(size > longest) longest = size
    }

    return longest
};  

const explore = (graph, current, visited) => {
    if(visited.has(String(current))) return 0
    visited.add(String(current))
    let size = 1

    for(let neighbor of graph[current]) {
        size += explore(graph, neighbor, visited)
    }

    return size
}

largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
  }); // -> 4

//   0-8 2-3
//   |\| |/
//   1 5 4