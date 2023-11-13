import { Routes, Route } from 'react-router-dom'
import LogIn from './modules/logIn'
import AlertasAlumnos from './modules/alertasAlumnos'
import GestionAulas from './modules/gestionAulas'
import Aforo from './modules/aforo'
import { Cuestionario } from './modules/cuestionario'
import { ProtectedPath } from './components/ProtectedPath'
import { useLocalStorage } from './services/useLocalStorage'
import { Roles } from './services/roles'
import { Layout } from './components/userViews/Bienvenida'
import { AccessForm } from './components/userViews/Alumnos/AccessForm'
import { Escaneo } from './components/userViews/Escaneadores/Escaneo'
import { Carga } from './components/userViews/Alumnos/Carga'

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
            <Route element={<ProtectedPath isAllowed={!!storage && storage.role === Roles.STUDENT} ></ProtectedPath>}>
                <Route path='/student/welcome' element={<Layout></Layout>}></Route>
                <Route path='/student/healt' element={<AccessForm></AccessForm>}></Route>
                <Route path='/student/load' element={<Carga></Carga>}></Route>
            </Route>
            <Route element={<ProtectedPath isAllowed={!!storage && storage.role === Roles.SCANNER} ></ProtectedPath>}>
                <Route path='/scanner/welcome' element={<Layout></Layout>}></Route>
                <Route path='/scanning' element={<Escaneo></Escaneo>}></Route>
            </Route>
        </Routes>)
}