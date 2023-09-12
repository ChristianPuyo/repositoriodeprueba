import { useState, useEffect } from "react";
import React  from "react";
import {Link} from "react-router-dom"
import style from "./CreateUser.module.css"

import { useNavigate} from "react-router-dom";
import {useDispatch, useSelector } from "react-redux"
import { postStudent, postUser} from "../../redux/actions";


const CreateUser = ()=>{   
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    
    
    
    
    const [input, setInput] = useState({
        username : "",
        password:"",
        role:""
    })

    useEffect(()=>{
        
    },[])

    console.log("*******************************")
    console.log("nombre de usuario:",input.username)
    console.log("password:",input.password)
    console.log("role:",input.role)
    console.log("*******************************")

    function handleChangeSelect(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {

        e.preventDefault();
         
            dispatch(postUser(input));
            alert("Usuario Guardado 👌!!");
            navigate('/home');
        
    }

    return(
        <div className={style.container}>
            <Link to="/home"><button className={style.submit}>Volver</button></Link>
            <h1>Crear Usuario</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    
                    <input 
                    className={style.input}
                    type="text"
                    value={input.username}
                    name="username"
                    onChange={(e)=> handleChange(e)}
                    placeholder="Nombre de Usuario"
                    />
                </div>
                <div>
                    
                    <input 
                    className={style.input}
                    type="text"
                    value={input.password}
                    name="password"
                    onChange={(e)=> handleChange(e)}
                    placeholder="Contraseña de Usuario"
                    />
                </div>
                
                <div>
                
                    <select className={style.inputSelect} name="role" onChange={(e)=>handleChangeSelect(e)}>
                        <option disabled selected>Seleccione un Rol</option>
                        <option value="Secretaria" >Secretaria</option>
                        <option value= "Administrador">Administrador</option>
                        
                    </select>
                </div>
                    
                <button type="submit" className={style.submit}>Crear</button>
                
                
            </form>
        </div>
    )
}

export default CreateUser;