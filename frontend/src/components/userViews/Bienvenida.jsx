import { useNavigate } from 'react-router-dom';
import Header from '../header';
import { useEffect } from 'react';
import { useLocalStorage } from '../../services/useLocalStorage';
import { GetStudentID } from '../../services/getStudentId';
import { ValidateBan } from '../../hooks/useValidateBand';
import { ValidateLoad } from '../../hooks/useValidateLoad';

export const Layout = () => {
  const navigate = useNavigate()

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

  const handleOnLoad = () => {
    const user = useLocalStorage.getStorage('auth');

    ValidateBan(user.id).then((res) => {
      useLocalStorage.deleteStorage('')
      if (res.data) {
        alert('Has }sido restringido')
        navigate('/')
      }

    }).catch(() => {
      console.log('Sin restrincciones')
    })


    ValidateLoad(user.id).then((res) => {
      if (res.data) {
        useLocalStorage.deleteStorage('')
        alert('Ya has realizado tu carga para mañana')
        navigate('/')
      }
    }).catch((err) => {
      console.log(err)
    })
    navigate('/student/healt')

  }

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Te damos la bienvenida</h2>

          <p className="mb-8">Reserva tu asistencia</p>

          <button className="bg-yellow-500 hover:bg-yellow-400 text-white px-4 py-2 rounded" onClick={handleOnLoad}>
            Realizar Carga
          </button>
        </div>
      </div>
    </>
  );
};
