import { useEffect,  useState } from "react";


interface TimerArg  {
    miliseg: number,
  
}
const Times = ({miliseg}: TimerArg ) => {
    const [segundos, setSegundos] = useState(0)

  //  const ref = useRef<NodeJS.Timeout>()
   console.log(miliseg)
    useEffect(()=>{
        console.log('useEffect')
        //limpiar el intervalo
      //   ref.current && clearInterval(ref.current)
       // ref.current = setInterval(()=> setSegundos(s=>s+1), miliseg)
 
     // setInterval(()=> setSegundos(s=>s+1), miliseg)

    },[miliseg])

    return (
        <div>
            <h1>times<span>{segundos}</span></h1>
        </div>
    );
};

export default Times;