class Expr {

    nestedExpr:(Number | Expr) = 0;
    operation:any = [];
    operands:any = [];
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

class Var {

    value = 0;
    name = "";

    setValue(name:string) {
        this.name = name;
    }

    getValue() {
        return this.value;
    }
}

class SAT {
    
    exprString:string = "";
    exStrInd = 0;
    varRegExp = new RegExp("^[a-zA-Z0-9]");

    constructor(exp:string) {
        this.exprString = exp;
        let exprLiteral = new Expr();
    }   

    //rewrite into CNF
    parse(){
        let newExpr = new Expr();
        let runParse = true;
        let curVar = "";
        while (runParse) {
            if (this.varRegExp.test(this.exprString[this.exStrInd])) {
                curVar.concat(this.exprString[this.exStrInd]);
            } else {

                if (curVar != "") {
                    let vare = new Var();
                    vare.name = curVar;
                    vare.value = 0;
                    newExpr.operands.push(vare);

                    //reset curVar
                    curVar = "";
                } 

                if (this.exprString[this.exStrInd] === "(") {
                    runParse = false;
                    newExpr.nestedExpr = this.parse();
                } else if (this.exprString[this.exStrInd] === "+" ) {
                    newExpr.operation.push("+");
                } else if (this.exprString[this.exStrInd] === "*") {
                    newExpr.operation.push("*");
                }
            }
            this.exStrInd += 1;
        }
        return newExpr;
    }

    dpll() {
        



    }


}