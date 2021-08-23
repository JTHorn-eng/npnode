class GraphNode {

    name:string = "";
    connections:([[string]] | [string, number]) = [["root"]];
    constructor() {
    
    } 

    getName() {
        return this.name;
    }

    getconnections() {
        return this.connections;
    }

    add(edge:any) {
        this.connections.push(edge)
    }

    isWeighted() {
        if (this.connections[0].length == 0) {
            return false;
        } else {
            return this.connections[0].length == 2;
        }
    }
}


class Graph {

    directed:boolean = true;
    bidirectional:boolean = true;
    weighted:boolean = true;
    vertices:[GraphNode] = [new GraphNode()];


    isIndependentSet() {

        for (let node in this.vertices) {
            //todo!
        }


    }


}