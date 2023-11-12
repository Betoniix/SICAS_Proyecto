import { Routes, Route } from 'react-router-dom'
import LogIn from './modules/logIn'
import AlertasAlumnos from './modules/alertasAlumnos'
import GestionAulas from './modules/gestionAulas'
import Aforo from './modules/aforo'
import { Cuestionario } from './modules/cuestionario'
import { ProtectedPath } from './components/ProtectedPath'
import { useLocalStorage } from './services/useLocalStorage'
import { Roles } from './services/roles'

export const App = () => {
    const storage = useLocalStorage.getStorage('auth')

    return (
        <Routes>
            <Route path='/' element={<LogIn />}></Route>
            <Route element={<ProtectedPath isAllowed={!!storage && storage.role === Roles.ADMIN} />}>
                <Route path='/admin/alerta' element={<AlertasAlumnos />}></Route>
                <Route path='/admin/aulas' element={<GestionAulas />}></Route>
                <Route path='/admin/aforo' element={<Aforo />}></Route>
                <Route path='/admin/cuestionario' element={<Cuestionario />}></Route>
            </Route>
        </Routes>)
}