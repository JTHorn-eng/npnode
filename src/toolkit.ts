import {GNode, GEdge} from './graph';
export class Tool {

    powerSet(elements:any[]) {
        let powerset:any[] = [];
        let index:number = 0;
        while (index != (2^(elements.length))) {
            let temp = [];
            let tempItr = 0;
            let tempStr = this.dec2bin(index);
            while (tempItr != tempStr.length) {
                if (tempStr.charAt(tempItr) == '1') {
                    temp.push(elements[tempItr]);
                }
                tempItr+=1;
            }
            powerset.push(temp);
            index+=1;
        }        
        return powerset;
    }

    dec2bin(dec:number) {
        return (dec >>> 0).toString(2);
    }

    findPairs(list:[GNode]) {
        if (list.length > 2) {
            let p1 = 0;
            let p2 = 1;
            let pairs:any;
            while (p1 != list.length - 1) {
                pairs.push([list[p1], list[p2]]);
                if (p2 == list.length) {
                    p1 +=1;
                    p2 = p1 + 1;
                }
                p2+= 1;
            }
            return pairs;

        } else {
            return list;
        }
    }

    edgeToString(nodes:any) {
        return nodes[0].value.toString() +"/" + nodes[1].value.toString();
    }

    filterByLength(len:number, list:any[]) {
        let final:any[] = [];
        for (let i of list) {
            if (i.length > len) {
                final.push(i);
            }
        }
        return final;
    }

    mod(a:number, b:number) {
        return (a - b) * (Math.floor(a / b));
    }

    gcdSolution(a:number, b:number):number {
        return (a > b) ? this.gcd(a, a - b) : this.gcd(b, b-a);
    }

    gcd(a:number, b:number): number{
        let modulo = this.mod(a, b);
        return modulo <= 1 ? b : this.gcd(b, modulo);
    }



}