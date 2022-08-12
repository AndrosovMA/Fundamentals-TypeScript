/**
 Мы можем создать универсальный тип, который будет работать с любой вложенной структурой.
 We can make a generic type which will work with any nested structure.
 */

const myObj = {}

type SelectFunctionRetunTypes<T extends object> =
    {
        [K in keyof T]
        : T[K] extends (...args: any) => any
        ? ReturnType<T[K]>
        : T[K] extends object
            ? SelectFunctionRetunTypes<T[K]>
            : T[K] // primary value not a function and not an object
    }[keyof T]

type ReturnsMyObj = SelectFunctionRetunTypes<typeof myObj>;

/**
 SelectFunctionRetunTypes-рекурсивный тип, когда наше значение T[K]является типом функции, мы берем
 тип возврата из него по ReturnType функции уровня типа, если это не функция, мы проверяем, является
 ли это объектом, если это так, мы продолжаем тот же алгоритм в этом объекте рекурсивным вызовом
 SelectFunctionRetunTypes. Последняя часть-это когда это не функция и не объект, в этом случае мы
 просто возвращаем тип значения, которое у нас есть.

 Этот универсальный тип работает со всеми типами вложенных объектов, он будет возвращать тип,
 если тип значения является функцией, и просто тип значения, если нет.
 */


/**
 стандартная типизация пропсов
 */
// import React, {DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState} from 'react'

// тип пропсов обычного инпута
// type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// тип пропсов обычного спана
// type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// тип пропсов обычного select
// type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>


// const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>)=>{}
// const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {}

