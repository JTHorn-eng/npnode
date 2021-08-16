enum Token {
    True = "1",
    False = "0",
    And = "*",
    Or = "+",
    Literal = "^[a-z]",
    LBrace = "(",
    RBrace = ")"
}

class Expr {

    nestedExpr:(Number | Expr) = 0;
    operation = [];
    operands = [];

    evaluate() {
        for (op in operation)
    }
   
}

class SAT {

    constructor(exp:String) {
        let expressionString = exp;
        let expressionLiteral = [];
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