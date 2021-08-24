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
    edges:any;

    constructor(edges:Map<string, [GNode]>, vertices:[GNode]){
        this.edges = edges;
        this.vertices = vertices;
    }

    isAdjacent(set:[GNode], edges:Map<string, [GNode]>) {
        return edges.has(this.tool.edgeToString(set));
    }

    isIndependentSet() {
        let powerset = this.tool.powerSet(this.vertices);
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
}