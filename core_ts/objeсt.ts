//Object
// let user: {name: string, age: number} = {
//     name: 'max',
//     age: 30,
// };
//если необходимо расширить объект динамически, то необходимо расширить исходный объект
//user.nickName = 'webdev';

let user: {name: string, age: number,nickName:string } = {
    name: 'max',
    age: 30,
    nickName: 'webdev'
};

//использование пользовательского type
// если структура объекта не похожа модефицируем объек Person  с помощью ?

type Person = {
    name: string,
    age: number,
    nickName?: string,
    getPass?: () => string,
};

let student: Person = {
    name: 'vlad',
    age: 34,
    nickName: 'add'
}

let admin: Person = {
    name: 'max',
    age: 34,
    getPass(): string {
        return `${this.name}${this.age}`;
    }
}
//Чтобы не описывать каждый тип по отдельности, можно сделать так:
type User = Person & { nickName: string }
type Admin = Person & { getPass: () => string }
// const user: User = {...}
// const admin: Admin = {...}