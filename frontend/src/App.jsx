import { Routes, Route } from 'react-router-dom'
import LogIn from './modules/logIn'
import AlertasAlumnos from './modules/alertasAlumnos'
import GestionAulas from './modules/gestionAulas'

export const App = () => {
    return (<Routes>
        <Route path='/' element={<LogIn />}></Route>
        <Route path='/admin/alertas' element={<AlertasAlumnos />}></Route>
        <Route path='/admin/aulas' element={<GestionAulas />}></Route>
    </Routes>)
}