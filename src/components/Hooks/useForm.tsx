import { useState, ChangeEvent } from 'react';

//la T es de Tipo generico
export const useForm=<T extends Object>(initialState: T)=>{
        //  export function useForm<T>(initialState: T){
        //   export const useForm = (initialState: any) => {
    const [formulario, setformulario]= useState(initialState)

    const handleChange= ({target}:ChangeEvent<HTMLInputElement>)=>{
       const {name, value} = target
       console.log(name, value)
       setformulario({
          ...formulario,
          [name]: value
       })
    }
    return{ 
        formulario,
        handleChange,
        ...formulario,
        //ventaja de tTS que puedo desestructurar todo

    }
}