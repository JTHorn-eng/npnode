class SubsetSum {

    target:number = 0;
    numbers:any;

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




}