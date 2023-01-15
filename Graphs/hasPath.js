const hasPath = (graph, src, dst) => {
    if(src === dst) return true
    for(let node of graph[src]) {
        hasPath(graph, node, dst)
    }
  };

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };
  
  hasPath(graph, 'f', 'k'); // true