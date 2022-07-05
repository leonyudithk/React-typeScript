import { useState } from "react";

//creo mi prototipado
interface Usuario {
    uid: string;
    name: string;
}

const tempUser: Usuario ={
    uid: 'Hola',
    name: 'Holis Holis'

}
export const User = () => {

    const [user, setUser] = useState(tempUser)

    const Login = () => {
        setUser({
            uid: 'B1236589',
            name: 'Yudith Leon'
        })
    }
    return (
        <div className="mt-5">
            <h3>Usuario: useState</h3>
            <button className="btn btn-info mt-2" onClick={Login}>Login</button>
           
                {
                    (!user)
                    ?<pre> No esta el usuario {JSON.stringify(setUser(tempUser))}</pre>
                    :<pre> {JSON.stringify(user)}</pre>
                }
           

        </div>
    );
};

