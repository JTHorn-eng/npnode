class Expr {

    nestedExpr:(Number | Expr) = 0;
    operation = [];
    operands = [];
    addResults:any;
    evaluate() {
        this.addResults = [];
        let addIndex = 0;
        while (addIndex != this.operation.length) {
            if (this.operation[addIndex] === "+") {
                if (this.operation[addIndex + 1] === "+") {
                    this.addResults[addIndex - 1] += this.operands[addIndex];
                } else {
                    this.addResults.push(
                        this.operands[addIndex] + this.operands[addIndex + 1]
                        );
                }
                this.operation.pop();
            }
            
            addIndex+= 1;
        }

        if (this.operation != []) {
            return this.operands.reduce(this.multiplyAcc, 1);
        } else {
            return this.operands[0];
        }

    }
    multiplyAcc(total: number, num:number ) {
        return total * num;
    } 
   
}

class SAT {
    expLiteral:any = [];
    expString = "";
    expIndex = 0;
    constructor(exp:string) {
        this.expString = exp;
        
    }

    //rewrite into CNF
    parseGroup() {
        this.expLiteral.push();
        
        




    }
}