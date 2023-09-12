import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';
import style from "./CargarArchivos.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { cargaMasiva, cleanMessage } from '../../redux/actions';
import { Link } from 'react-router-dom';

function FileUploader() {
  const dispatch= useDispatch();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [parsedData, setParsedData] = useState([]);
  const message = useSelector(state=>state.messageOperation)


  useEffect(()=>{
    if(message.length>0){
      alert(message);
      dispatch(cleanMessage())
    }
  },[message,dispatch])
  const onDrop = (acceptedFiles) => {
    const parsedDataArray = [];
  
    acceptedFiles.forEach((file) => {
      Papa.parse(file, {
        complete: (result) => {
          const parsedData = result.data.slice(0, -1); // Elimina la última fila vacía
          setUploadedFiles(acceptedFiles);
          setParsedData(parsedData);
        },
        header: true,
        delimiter: ';' // Agrega esta línea para especificar el delimitador
      });
    });
  };
  
  const handleClick=(e)=>{
    dispatch(cargaMasiva(parsedData))
  }
  
  
  console.log(parsedData, "datos parseados")
  console.log(parsedData[0])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.csv',
  });

  return (
    <div>
      <Link to="/home"><button className={style.submit}>Volver</button></Link>
      <br></br>
      <br></br>
      <div className={style.dropzone} {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className={style.p}>Arrastra y suelta aquí...</p>
        ) : (
          <p>Arrastra y suelta un archivo CSV aquí, o haz clic para seleccionarlo.</p>
        )}
      </div>
      <ul className={style.ul}>
        {uploadedFiles.map((file, index) => (
          <li className={style.li} key={index}>{file.name}</li>
        ))}
      </ul>

      <button className={style.submit} onClick={handleClick}>Registrar Masivamente</button>
      <br></br>
      <br></br>


      <div className={style.tablacontainer}>
           {/* Mostrar los datos en una tabla */}
      <table className={style.tabla}>
        <thead>
          <tr>
            <th className={style.tabla}>Nombres</th>
            <th className={style.tabla}>Apellidos</th>
            <th className={style.tabla}>DNI</th>
            <th className={style.tabla}>Genero</th>
            <th className={style.tabla}>Edad</th>
            <th className={style.tabla}>Email</th>
            <th className={style.tabla}>Id_Plan_De _Estudio</th>
            <th className={style.tabla}>Id_Programa_De_Estudio</th>
           
            {/* Agrega más encabezados según tus datos */}
          </tr>
        </thead>
        <tbody>
          {parsedData.map((item, index) => (
            <tr key={index}>
              <td className={style.encabezado}>{item.nombres}</td>
              <td className={style.encabezado}>{item.apellidos}</td>
              <td className={style.encabezado}>{item.dni}</td>
              <td className={style.encabezado}>{item.genero}</td>
              <td className={style.encabezado}>{item.edad}</td>
              <td className={style.encabezado}>{item.email}</td>
              <td className={style.encabezado}>{item.id_plan}</td>
              <td className={style.encabezado}>{item.id_departamento}</td>
             
              {/* Agrega más celdas según tus datos */}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
     
    </div>
  );
}

export default FileUploader;


