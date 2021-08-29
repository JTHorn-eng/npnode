import {Tool} from './toolkit';

class Numerical {

    target:number = 0;
    numbers:any;
    tool:Tool = new Tool();

    constructor(target:number, numbers:[number]) {
        this.numbers = numbers;
        this.target = target;
    }

    //only use a set of positive real numbers
    checkNumbers = () => {
        let nums =  this.numbers.filter((num:number) => {num < 0});
        return nums.length == 0;
    }

    //recursive memoization solution
    isSubsetSum(set:[number], n:number, target:number, store:[[number]]):number {
        if (target == 0) {
            return 1;
        } 
        if (n == 0) {
            return 0;
        }

        //return answer if present in store
        if (store[n][target] != -1) {
            return store[n][target];
        }

        if (set[n - 1] > target) {
            store[n][target] = this.isSubsetSum(set, n - 1, target, store);
            return store[n][target];
        }
        
        let exclusion = this.isSubsetSum(set, n-1, target, store);
        let inclusion = this.isSubsetSum(set, n-1, target - set[n-1], store);

        store[n][target] = exclusion || inclusion;

        return store[n][target];
    }

    optimum(i:number, c:number, weight:number, value:number, table:[[number]]) {
        if (i == 0) {
            return 0;
        } else if (weight > c) {
            return table[i - 1][c];
        } else {
            return Math.max(table[i - 1][c], value + table[i - 1][c - weight]);
        }

    }
    knapsack(values:[number], weights:[number], cap:number) {
        let i = 0;
        let col = 0;
        let table:any= [[]];


        while (i * values.length + col < (cap + 1) * values.length) {
            if (col == cap) {
                table.push([]);
            }
            table[i][col] = this.optimum(i, col, weights[i], values[i], table);
 
        }

        //find solution
        let numbers:any = [];
        i = table.length;
        col = cap;
        while (i > 0 && col > 0) {
            if (table[i][col] != table[i - 1 ][col]) {
                numbers.push(i);
                col = col - weights[i];
            }
            i -= 1;
        };

        return numbers;

    }

    //factorising
    
    //basic brute-force method
    trialDivision(num:number):number[] {
        let factors = [];
        for (let s = 2; s <= Math.floor(Math.sqrt(num)); s++) {
            if (num % s == 0) {
                factors.push(s); 
            }
        }
        return factors;
    }

    pRFun = (x:number, c:number): number=> {return x^2 + c};

    pollardsRho(limit: number): number{

        
        let x = Math.round(Math.random() * 100);
        let c = Math.round(Math.random() * 100);
        let y = x;
        let checkLimit = 10000;
        let iter = 0;
        while (iter < checkLimit) {
            x = this.pRFun(x, c) % limit;
            y = this.pRFun(this.pRFun(y, c), c);
            let factorCheck = this.tool.gcd(Math.abs(x - y), limit);
            if (factorCheck !== 1) {
                if (factorCheck == limit) {
                     x = Math.round(Math.random() * 100);
                     c = Math.round(Math.random() * 100);
                     y = x;
                } else {
                    return factorCheck;
                }
            }
            iter++;
        }
        return 0;
    }






    






}