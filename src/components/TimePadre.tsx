import { useState } from "react";
import Times from "./Times";


const TimePadre = () => {
    const [milesegundos, setMilesegundos]= useState(1000)
    return (
        <div>
           <span>Milisegundos{milesegundos}</span> 
          
           <button className="btn btn-info" onClick={() =>setMilesegundos(1000)}>1000</button>
           <button className="btn btn-danger" onClick={() =>setMilesegundos(2000)}>2000</button>
           <Times miliseg = {milesegundos}/>
        </div>
    );
};

export default TimePadre;