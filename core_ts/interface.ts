/**
  - позволяет сделать инверсию зависимости

 - описывает исключительно объекты
 - удобней расширять и наследоваться - extends
 - merge при создании одного и тогоже типа с разными данными что нет в type
 */

//extends
interface Animal {
    name: string
}
interface Dog extends Animal{
    owner: string
}

// можно переписать на type
type Animal_2 = {
    name: string
}

type Dog_2 = Animal_2 & {
    owner: string
}

//merge
interface car {
    model: string
}
interface car {
    year: number
}