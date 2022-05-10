interface Person {
    name: string;
    age?: number; // 물음표는 필수 요소가 아님.
}

/* interface Developer {
    name: string;
    age?: number;
    skills: string[];
} */

// 상속 이용
/* interface Developer extends Person {
    skills: string[];
} */

// type Alias
// & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
// 참고: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
type Developer = Person & {
    skills: string[];
};

const person: Person = {
    name: '김사랑',
    age: 20
};

const expert: Developer = {
    name: '김개발',
    skills: ['js', 'react']
};
/* 
const people: Person[] = [person, expert];

console.log(people[0]);
 */

type People = Person[]; // Person[]을 이제 People이라는 타입으로 사용
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color1: Color = 'red';
const colors: Color[] = ['red', 'orange'];