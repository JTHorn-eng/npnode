class Tool {

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
}