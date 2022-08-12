/**
 infer type/ выведение типов и создание типов на основе объектов
 */

const state = {
    user: 'firsName',
    id: 34,
    privat: false,
    userPhotoType: null
}

type StateType = typeof state

const reducer = (state:StateType) => {

}