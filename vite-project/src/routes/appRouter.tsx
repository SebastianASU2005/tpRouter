import { Navigate, Route, Routes } from "react-router-dom"
import CursosScreen from "../components/Screens/CursoScreen/CursoScrenn"
import EstudiantesScreen from "../components/Screens/EstudianteScreen/EstudianteScreen"

export const AppRouter=()=>{
    return(
        <>
        <Routes>
            <Route path='/' element={<Navigate to="/CursosScreen"/>}/>
            <Route path='/CursosScreen' element={<CursosScreen/>}/>
            <Route path='/cursos/:id/estudiantes' element={<EstudiantesScreen/>} />
        </Routes>
        </>
    )
}