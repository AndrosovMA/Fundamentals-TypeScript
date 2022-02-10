/*
TypeScript — это язык с открытым кодом, разработанный корпорацией Майкрософт.
TypeScript — это надмножество JavaScript.
Основной компонент TypeScript — это система типов. В TypeScript можно задать тип данных переменной или параметра, используя указание типа.
Анализ типов TypeScript производится исключительно во время компиляции, поэтому во время выполнения программы дополнительной нагрузки не создается.
*/
//Типы аннотации(объявления переменных): явная и неявная
var x;
var y = 4;
var z; // определен тип как any
//Типы и подтипы:
//Все типы в TypeScript являются подтипами одного типа верхнего уровня, называемого any
//1.Примитивные типы - boolean, number, string, void, null и undefined , а также пользовательские перечисления или типы enum
//Тип void нужен лишь для того, чтобы указывать на отсутствие значения, например в функции без возвращаемого значения.
//enum - упрощет работу с наборами связанных констант.
var Season;
(function (Season) {
    Season[Season["Winter"] = 1] = "Winter";
    Season[Season["Spring"] = 2] = "Spring";
    Season[Season["Summer"] = 3] = "Summer";
    Season[Season["Autumn"] = 4] = "Autumn";
})(Season || (Season = {}));
var current = Season.Winter;
console.log('employeeStatus', current); // 1
console.log(Season[current]);
//2. Типы объектов - класс, интерфейс, массив, литералы
//3. Параметры типов