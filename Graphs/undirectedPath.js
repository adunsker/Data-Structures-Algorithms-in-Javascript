const undirectedPath = (edges, nodeA, nodeB) => {
    let set = new Set()
    let newGraph = graphConversion(edges)
    
    let helper = (newGraph, nodeA, nodeB, set) => {
        if(nodeA === nodeB) return true
        if(set.has(nodeA)) return false
        set.add(nodeA)
        for(let neighbor of newGraph[nodeA]) {
            if(helper(newGraph, neighbor, nodeB, set) === true) return true
        }
        return false
    }

    return helper(newGraph, nodeA, nodeB, set)

};

const graphConversion = (edges) => {
    let newGraph = {}
    for(let neighbor of edges) {
        const first = neighbor[0]
        const second = neighbor[1]
        if(newGraph[first] === undefined) newGraph[first] = []
        if(newGraph[second] === undefined) newGraph[second] = []
        newGraph[first].push(second)
        newGraph[second].push(first)
    }
    return newGraph
}

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];

// const graphNew = {
//     i: [ 'j', 'k' ],
//     j: [ 'i' ],
//     k: [ 'i', 'm', 'l' ],
//     m: [ 'k' ],
//     l: [ 'k' ],
//     o: [ 'n' ],
//     n: [ 'o' ]
//   }
  
  console.log(undirectedPath(edges, 'j', 'm')); // -> true