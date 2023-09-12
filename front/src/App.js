import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Students from './components/Students/Students';
import { Route, Routes,Redirect } from 'react-router-dom';
import CreatePlanDeEstudio from './components/CreatePlanDeEstudio/CreatePlanDeEstudio';
import NavBar from './components/NavBar/NavBar';
import CreateCurso from './components/CreateCurso/CreateCurso';
import CreatePeriodoLectivo from './components/CreatePeriodoLectivo/CreatePeriodoLectivo';
import RegistrarNota from './components/RegistrarNota/RegistrarNota';
import ListarEstudiantes from './components/ListarEstudiantes/ListarEstudiantes';
import CertificadoDeEstudio from './components/CertificadoDeEstudio/CertificadoDeEstudio';
import StudentForm from './components/StudentForm/StudentForm';
import EditStudentForm from './components/EditStudentForm/EditStudentForm';
import TablaGestionEstudiantes from './components/TablaGestionEstudiantes/TablaGestionEstudiantes';
import FormDeleteStudent from './components/FormDeleteStudent/FormDeleteStudent';
import FormLogin from './components/FormLogin/FormLogin';
import { useSelector } from 'react-redux';
import ConsultarNotas from './components/ConsultarNotas/ConsultarNotas';
import EstudianteNotas from './components/EstudianteNotas/EstudianteNotas';
import EditarNota from './components/EditarNota/EditarNota';
import CreateUser from './components/CreateUser/CreateUser';
import NavBarSecretaria from './components/NavBarSecretaria/NavBarSecretaria';
import FileUploader from './components/CargarArchivos/CargarArchivos';
import CargarCursos from './components/CargarCursos/CargarCursos';
import GestionCursos from './components/GestionCursos/GestionCursos';
import UpdateCursoForm from './components/UpdateCursoForm/UpdateCursoForm';
import CargaMasivaNotas from './components/CargaMasivaNotas/CargaMasivaNotas';
import FormMatricula from './components/FormMatricula/FormMatricula';
import TeacherForm from './components/TeacherForm/TeacherForm';



function App() {

  const token = useSelector(state => state.token);
  return (
    
    <div className="App" id="particles-js">
      <Routes>
        
        <Route exact path='/' element={<LandingPage/>}></Route>
        
        <Route path="/login" element= {token==null || !token.token ? <FormLogin /> : (token.role==='Administrador'?<NavBar />: <NavBarSecretaria/> )}></Route> 
        
        <Route path='/home' element={token==null || !token.token ? <FormLogin /> : (token.role==='Administrador'?<NavBar />: <NavBarSecretaria/> )}></Route>
        <Route path='/createstudent' element={token==null || !token.token ? <FormLogin /> :<StudentForm/>}></Route>
        <Route path='/createplandeestudio' element={token==null || !token.token ? <FormLogin /> :<CreatePlanDeEstudio/>}></Route>
        <Route path='/createcurso' element={token==null || !token.token ? <FormLogin /> :<CreateCurso/>}></Route>
        <Route path='/createperiodolectivo' element={token==null || !token.token ? <FormLogin /> :<CreatePeriodoLectivo/>}></Route>
        <Route path='/registrarnota' element={token==null || !token.token ? <FormLogin /> :<RegistrarNota/>}></Route>
        <Route path='/generarcertificado' element={token==null || !token.token ? <FormLogin /> :<ListarEstudiantes/>}></Route>
        <Route path='/generarcertificado/:id' element={token==null || !token.token ? <FormLogin /> :<CertificadoDeEstudio/>}></Route>
        <Route path="/editstudent" element={token==null || !token.token ? <FormLogin /> :<EditStudentForm/>}></Route>
        <Route path='/gestionarestudiantes' element={token==null || !token.token ? <FormLogin /> :<TablaGestionEstudiantes/>}></Route>
        <Route path='/actualizarestudiante/:id' element={token==null || !token.token ? <FormLogin /> :<EditStudentForm/>}></Route>
        <Route path='/eliminarestudiante/:id' element={token==null || !token.token ? <FormLogin /> :<FormDeleteStudent/>}></Route>
        <Route path='/consultarnotas' element={<ConsultarNotas/>}></Route>
        <Route path='/estudiantenotas/:id' element={<EstudianteNotas/>}></Route>
        <Route path='/editarnota/:id' element={<EditarNota/>}></Route>
        <Route path='/createuser' element={<CreateUser/>}></Route>
        <Route path='/cargararchivo' element={<FileUploader/>}></Route>
        <Route path='/cargarcursos' element={<CargarCursos/>}></Route>
        <Route path='/gestioncursos' element={<GestionCursos/>}></Route>
        <Route path='/updatecurso/:id' element={<UpdateCursoForm/>}></Route>
        <Route path='/cargamasivanotas' element={<CargaMasivaNotas/>}></Route>
        <Route path='/matricula' element={<FormMatricula/>}></Route>
        <Route path='/createteacher' element={<TeacherForm/>}></Route>
        
      </Routes>

      
      
      
    </div>
    
  );
}

export default App;
