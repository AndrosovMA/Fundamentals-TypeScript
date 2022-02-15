/*namespaces and module
не засорят глобальные области видимости в JS для этого использовались IIFE
просходит инкапсуляция всех сущностей
*/

namespace Utils {
    const Secret: string = '234';
    const PI: number = 3.14;

    const getPass = (name: string, age: number): string => `${name}${age}`
}
/*есть ньюанс, если обратиться к const как обычному свойству объекта то получим ошибку
и это основное отличие namespace от обычного объекта
*/

/*что бы получить доступ к данным снаружи, нужно их экспортировать с помощью ключевого слова export
*/
import Secret = Utils2.Secret;

namespace Utils2 {
    export const Secret: string = '234';
    export const PI: number = 3.14;

    export const getPass = (name: string, age: number): string => `${name}${age}`
}
console.log(Secret);
console.log(Utils2.getPass('max',34));
const PI = Utils2.PI;

/* Если возникает необходимость использовать namespace на несколько файлов
необходимо импортировать namespace из другого файла с помощью синтаксиса:
     /// <reference path='Utils.ts'      - три слеша обязательные
*/

/*в интеграции с react лучше использовать пространсво имен вместе module
убираем обертку namespace и экспортируем каждую константу отдельно
а в основном файле используем стандартную конструкцию из import {SecretIC, PIIC}
*/
export const SecretIC: string = '234';
export const PIIC: number = 3.14;




