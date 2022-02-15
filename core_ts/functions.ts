//Основаная задача TypeScript - описание типов
//Типы есть у всех сущностей с которыми мы работаем в том числе и function

//описание аргументов
const createPassword = (name: string, age: number | string) => `${name}${age}`

// опциональный аргумент
const createPassword_2 = (name: string, age?: number) => `${name}${age}`
createPassword_2('max');

//Rest type
const createSkills = (name: string, ...skills: Array<String>) => {
    `${name}, my skills are ${skills.join()}`;
}
createSkills('max', 'TS', 'es6', 'React');



//Return type is number - описание типа возвращаемых данных после () скобок
const sum = (first: number, second: number): number => first + second;

//Function variable type
let myFanc: (firstArg: string) => void;
function oldFunc(name: string):void {
    alert(`Hellow ${name}, nice to see you!`);
}
myFanc = oldFunc;