/**
Generic отвечат на вопрос какой подтип данных  будет использоваться внутри
 так же позволяет переиспользовать типы данный
*/
// Example#1
let generic_Example: Array<number> = [1,2,4]; //Тип данных массив, внутри будут исльзоваться данные число


// Example#2 - переиспользование типа данных
type UserPhotoType = {
    count: number,
    size: string
}

type UserRegistrationType = {
    id: number,
    fistName: string,
    lastName: string
}
type ServerResponseType<D> = {
    errorCode: number,
    message: Array<string>,
    data: D
}

const ResponseServer_1: ServerResponseType<UserPhotoType> = {
    errorCode: 1,
    message: ['store', 'photoStudio'],
    data: {
        count: 24,
        size: 'small'
    }
}
