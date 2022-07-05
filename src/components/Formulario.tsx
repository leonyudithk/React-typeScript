
import { useForm } from "./Hooks/useForm"

interface FormData{
    email: string;
    password: string;
    nombre: string;

}

export const Formulario=()=>{

   
    const {email, password, nombre, handleChange, formulario}= useForm<FormData>(
        {
                    email: "a@a.com",
                     password: "123",
                     nombre: "ANA",
                 }
    )

//------------------------------------------------------------------------
    // const {formulario, handleChange}= useForm<FormData>(
    //     {
    //                 email: "a@a.com",
    //                  password: "123",
    //                  nombre: "ANA",
    //              }
    // )

    // const {email, password, nombre} = formulario
//------------------------------------------------------------------------
//     const [formulario, setformulario]= useState({
//         email: "",
//         password: "",
//         nombre: "",
//     })

//     const handleChange= ({target}:ChangeEvent<HTMLInputElement>)=>{

//    // const handleChange= (ev:ChangeEvent<HTMLInputElement>)=>{
//         //console.log(ev.target.value);
//        // console.log(ev.target.name);
//        const {name, value} = target
//        console.log(name, value)
//        setformulario({
//           ...formulario,
//           [name]: value
//        })
//     }

    return(
        <form>
            <div className="mb-3">
                <label className="control-label">Email:</label>
                <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={handleChange}/>

            </div>
            <div>
                <label className="control-label">Password:</label>
                <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={handleChange}/>

            </div>
            <div>
                <label className="control-label">Nombre:</label>
                <input
                type="text"
                className="form-control"
                name="nombre"
                value={nombre}
                onChange={handleChange}/>

            </div>
            <pre>{JSON.stringify(formulario)}</pre>
        </form>
    )
}