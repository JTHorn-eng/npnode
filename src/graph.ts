import {Tool} from './toolkit';

export class GNode {

    value:any;
    constructor() {
        this.value = 0;
    } 

    getName() {
        return this.value;
    }
}

export class GEdge {
    id = "";
    weight = 0;    
}

export class Graph {

    directed:boolean = true;
    bidirectional:boolean = true;
    weighted:boolean = true;
    vertices:[GNode] = [new GNode()];
    tool=new Tool();
    edges:Map<string, [GNode]>;

    constructor(edges:Map<string, [GNode]>, vertices:[GNode]){
        this.edges = edges;
        this.vertices = vertices;
    }

    isAdjacent(set:[GNode], edges:Map<string, [GNode]>) {
        return edges.has(this.tool.edgeToString(set));
    }

    isIndependentSet(vertices:any[], size:number) {
        let powerset = this.tool.filterByLength(size,this.tool.powerSet(vertices))

        for (let node in this.vertices) {
    
            //certifier
            for (let set of powerset) {
                if (this.isAdjacent(this.tool.findPairs(set), this.edges)) {
                    return false;
                }
            }
        }
        return true;
    }

    setDifference(graph:Graph, vertices:GNode[]):any[] {
        let g:GNode[] = graph.vertices;
        let xNodes:GNode[] = g;
        let newList:GNode[] = [];
        for (let node of xNodes) {
            for (let gNode of g) {
                if (gNode !== node) {
                    newList.push(node);
                }
            }
        }
        return newList;
    }

    isVertexCover(graph:Graph, graphNodes:GNode[], k:number) {
        let set = this.setDifference(graph, graphNodes)
        return this.isIndependentSet(set, graphNodes.length - k)
    }

    findVertexCover(graph:Graph, k:number) {
        if (!this.isVertexCover(graph, graphNodes, k)) {
            return [];
        }
        let c:any[] =[];
        for (let vertex of graphNodes) {
            


        }
    }

    isSetCover(size:number, targetSet:any[]) {
        let k = size;
        let U = targetSet;
        let setCoverSets:any[] = [];
        this.edges.forEach((e) => {
            setCoverSets.push(e);
        });
         


    }
}