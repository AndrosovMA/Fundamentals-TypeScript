/*
TypeScript — это язык с открытым кодом, разработанный корпорацией Майкрософт.
TypeScript — это надмножество JavaScript.
Основной компонент TypeScript — это система типов. В TypeScript можно задать тип данных переменной или параметра, используя указание типа.
Анализ типов TypeScript производится исключительно во время компиляции, поэтому во время выполнения программы дополнительной нагрузки не создается.
*/


//Типы аннотации(объявления переменных): явная и неявная
let x:number;
let y = 4;
let z; // определен тип как any



//Типы и подтипы:
//Все типы в TypeScript являются подтипами одного типа верхнего уровня, называемого any


//1.Примитивные типы - boolean, number, string, void, null и undefined , а также пользовательские перечисления или типы enum
//Тип void нужен лишь для того, чтобы указывать на отсутствие значения, например в функции без возвращаемого значения.

//enum - упрощет работу с наборами связанных констант.
enum Season  {
    Winter = 3,
    Spring,
    Summer,
    Autumn
}

let current: Season = Season.Winter;
console.log('employeeStatus', current); // 1
console.log(Season[current]); //Winter














//2. Типы объектов - класс, интерфейс, массив, литералы









//3. Параметры типов