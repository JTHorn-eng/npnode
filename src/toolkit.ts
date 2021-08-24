import {GNode, GEdge} from './graph';
export class Tool {

    powerSet(elements:[any]) {
        let powerset:any = [];
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

}