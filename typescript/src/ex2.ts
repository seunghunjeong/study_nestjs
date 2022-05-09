function sum(x: number, y:number) : number {
    return x + y;
}

console.log(sum(1, 2));

function summArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);;
}

const total = summArray([1, 2, 3, 4, 5]);
console.log(total);

function returnNothing(): void {
    console.log('I am just saying hello world');
}