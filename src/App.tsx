import Counter from "./components/Counter";
import { Formulario } from "./components/Formulario";
import TimePadre from "./components/TimePadre";
import { User } from "./components/User";


function App() {
  return (
    <>
      <h1>Hola primeros pasos</h1>
      <Formulario/>
      <br/>
      <br/>
      <br/>
      <Counter/>
      <User/>
      <TimePadre/>
    </>
  );
}

export default App;
