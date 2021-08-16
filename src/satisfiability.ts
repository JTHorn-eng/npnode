

class Variable {
    val:Number=0;
    name:string="";
    constructor(name:string) {
        this.name = name;
    }

    setValue(num:Number) {
        this.val = num;
    }

    value() {
        return this.val;
    }
}

class Expr {

    nestedExpr:(Number | Expr) = 0;
    operation:any;
    operands:any;

    setNested(exp:Expr) {
        this.nestedExpr = exp;
    }
    addOperation(ope:string) {
        this.operation.push(ope);
    }
    addOperand(operand:(Variable|Expr)) {
        this.operands.push(operand);
    }

    evaluate() {
        for (let op in this.operation) {
            if (op === "+") {
                
            } else if (op === "*") {

            }
        }
    }
   
}

class SAT {

    constructor(exp:String) {
        let expressionString = exp;
        let exprLiteral = new Expr();
    }

    convertToCNF(exp:String) {

    }

    //rewrite into CNF
    parseExpression(exp:String) {

        let groupStack = [];
        let index = 0;
        let groupStackPointer = 0;
        let length: Number = exp.length;
        
        while (index != length) {
            let current = "";
            switch(exp.charAt(index)) {
                case Token.True: 
                    groupStack.push(1) 
                    break;
                case Token.False:
                    val.push(0)
                    break;
            }
            index += 1;
        }
    }
}