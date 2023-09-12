import { useSelector, useDispatch } from "react-redux"
import style from "./ConsultarNotas.module.css"
import { getStudents } from "../../redux/actions";
import { useEffect } from "react";
import {Link} from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar";



const ConsultarNotas = ()=>{

    const dispatch = useDispatch();
    const estudiantes = useSelector((state)=>state.students)

    useEffect(()=>{
        
        dispatch(getStudents())
    },[])

    return(
        <div className={style.container}>
            <Link to="/home"><button className={style.submit}>Volver</button></Link>
            <br></br>
            <br></br>
            <h1>Consultar Notas</h1>
            <SearchBar></SearchBar>
            <br></br>
            <div className={style.tablacontainer}>
            <table className={style.tabla} >
                    <thead>
                        <tr>
                            <th  className={style.tabla}>Id</th>
                            <th  className={style.tabla}>Nombres</th>
                            <th  className={style.tabla}>Apellidos</th>
                            <th  className={style.tabla}>Genero</th>
                            <th  className={style.tabla}>Edad</th>
                            <th  className={style.tabla}>Email</th>
                            <th  className={style.tabla}>Notas</th>
                            {/* Agrega más encabezados de columna según tus datos */}
                        </tr>
                    </thead>
                    <tbody>
                        {estudiantes.map(estudiantes => (
                            <tr key={estudiantes.id_estudiante}>
                                <td className={style.encabezado}>{estudiantes.id_estudiante}</td>
                                <td className={style.encabezado}>{estudiantes.nombres}</td>
                                <td className={style.encabezado}>{estudiantes.apellidos}</td>
                                <td className={style.encabezado}>{estudiantes.genero}</td>
                                <td className={style.encabezado}>{estudiantes.edad}</td>
                                <td className={style.encabezado}>{estudiantes.email}</td>
                                <td className={style.encabezado}><Link to={`/estudiantenotas/${estudiantes.id_estudiante}`} >Consultar</Link></td>
                                {/* Agrega más celdas según tus datos */}
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

            
        </div>
    )
}

export default ConsultarNotas;