import '../../../FormApp.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useGetSubjects } from '../../../hooks/useGetSubjects';
import { useLocalStorage } from '../../../services/useLocalStorage';
import { CreateReservation } from '../../../services/createReservation';

export const Carga = () => {
  const student = useLocalStorage.getStorage('student');
  const auth = useLocalStorage.getStorage('auth');
  const [subjects, setSubject] = useState([]);
  const { isLoading, data } = useGetSubjects(student.id);
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading) setSubject(data);
  }, [isLoading]);


  const onClick = () => {
    const idSubjects = subjects.map((subject) => {
      return parseInt(subject.id)
    })

    console.log({
      id: parseInt(student.id),
      email: auth.email,
      ids_subjects: idSubjects
    })

    CreateReservation({
      id: parseInt(student.id),
      email: auth.email,
      ids_subjects: idSubjects
    })
      .then(() => {
        alert('reservacion exitosa')
        navigate('/student/welcome')
      })
      .catch(() => {
        alert('Algo salio mal generando la reservacion')
      })
  }

  return (
    <div className="registro">
      <h3>Registro de Asistencia</h3>

      <div className="border border-dark p-5 m-5">
        <div className="materia">
          <p className="mb-2">Estas son las clases disponibles para mañana:</p>
          <ul>
            {subjects.map((subject, index) => (
              <li key={index} className="mb-4 border-b-2 pb-2">
                <span className="text-xl font-bold">{subject.name}</span>
                <br />
                <span className="text-sm">
                  Horario: {subject.start_hour} - {subject.end_hour} | Aula: {subject.room}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ACCESS BUTTONS */}
        <div className="mt-4">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-white px-4 py-2 rounded mr-2" onClick={onClick}>
            Enviar
          </button>
          <Link to="/student/welcome" className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded">
            Cancelar
          </Link>
        </div>
      </div>
    </div>
  );
};
