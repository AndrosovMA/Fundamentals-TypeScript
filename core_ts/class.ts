//4 модификатора доступа работы с ключами -public, private, protected
//public - значение по умолчанию, если оно не указано то сво-во или метод получается автомат
//private - не может быть доступен за пределами класса - ни наследники, ни объеткты созданные с помощью этого класса
//protected - получить могут только наследники const maks достпупа к нему не имеет
// readonly - доступен только для чтения

class User_3 {
    public name: string;
    private nickName: string;
    protected age: number;
    readonly pass: number;


    constructor(name: string, age:number, nickName: string, pass: number) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }
}
const maks = new User_3('maks', 34, 'web',123);
maks.name;
// maks.pass = 35; заменить не можем
//другие свойства не доступны


// можно задавать дефолтное значение, при этом в конструкторе прописывать эти же данные не требутеся
class User_4 {
    name: string;
    nickName: string = 'dima';
    age: number = 37;

    constructor(name: string) {
        this.name = name;
    }
}
const admin_4 = new User_4('maks');
maks.name;

//упрощенная форма записи - все type определить в конструкторе, при этом автоматически выполняется присвоение
//при таком синтаксисе обязательно указывать модификатор
class User_5 {
    constructor(
        public name: string,
        public age:number,
        public nickName: string,
        public pass: number
    ) {}
}

//аксессры - геттеры и сеттеры специальные свойска класса которые ведут себя как свойства этого класса

//Как изменить приватное свойство в классе
class User5 {
    private age: number = 20;

    constructor(public name: string) {
    }
}
const max = new User5('max');
//max.age = 30;//Property 'age' is private

//есть две возможности



