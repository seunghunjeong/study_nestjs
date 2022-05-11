/* function merge(a: any, b: any): any {
    return {
        ...a,
        ...b
    };
} */

// 제너릭 형태로 변경
function merge<A, B>(a: A, b: B): A & B {
    return {
        ...a,
        ...b
    }
}

const merged = merge({foo:1, far:2}, {bar:1, far:3});

console.log(merged);

function wrap<T>(param: T) {
    return {
        param
    }
}

const wrapped = wrap(12);

// 인터페이스로 제네릭 사용
/* interface Items<T> {
    list: T[];
} */

// 타입에서 제네릭 사용
type Items<T> = {
    list: T[];
}

const items: Items<string> = {
    list: ['a', 'b', 'c']
}

console.log(items);