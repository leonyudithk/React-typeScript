import { useState } from "react";


const Counter = () => {
    const [counter, setCounter] = useState(0)

    const [num, setNum] = useState(0)

    const incrementar = (numero: number = num): void => {
        setCounter(counter + numero)
    }
    const decrementar = (numero: number = num): void => {
        setCounter(counter - numero)
    }
    const handleNumero = (e : any)=>{
            setNum(e.target.value)
    }
    return (
        <div className="mt-2">
            <h1>Counter: UseState </h1>
            <span>Valor: {counter}</span>
            <input type="number" name="numero" value={num} placeholder="Valor" onChange={handleNumero}/>

            <div className="mt-3">
                <button className="btn btn-primary mt-2" onClick={() => incrementar()}>+1</button>
                <button className="btn btn-warning mt-2" onClick={() => incrementar(2)}>+2</button>
                <button className="btn btn-danger mt-2" onClick={() => incrementar(3)}>+3</button>
            </div>
            <div className="mt-3">
                <button className="btn btn-primary mt-2" onClick={() => decrementar()}>-1</button>
                <button className="btn btn-warning mt-2" onClick={() => decrementar(2)}>-2</button>
                <button className="btn btn-danger mt-2" onClick={() => decrementar(3)}>-3</button>
            </div>
            <div className="mt-3">
            <button className="btn btn-info" onClick={() => setCounter(0)}>Reset</button>
            </div>
           
        </div>
    );
};

export default Counter;