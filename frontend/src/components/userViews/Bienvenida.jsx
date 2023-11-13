import { Link } from 'react-router-dom';
import Header from '../header';
import { useEffect } from 'react';
import { useLocalStorage } from '../../services/useLocalStorage';
import { GetStudentID } from '../../services/getStudentId';

export const Layout = () => {


  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = useLocalStorage.getStorage('auth');
        const data = await GetStudentID(user.id);
        useLocalStorage.setStorage('student', data.data)
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">
        {/* FORM TITLE */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Te damos la bienvenida</h2>
          {/*<ul>
            {data.map(item => (
              <li key={item.id}>{item.nombres} {item.apellidos}</li>
            ))}
            </ul>*/}

          <p className="mb-8">Reserva tu asistencia</p>

          <Link to="/student/healt" className="links-style">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-white px-4 py-2 rounded">
              Realizar Carga
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
