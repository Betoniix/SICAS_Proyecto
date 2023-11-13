import '../../../FormApp.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useGetCuestions } from '../../../hooks/useGetCuestions';

export const AccessForm = () => {
  const { data, isLoading } = useGetCuestions();
  const [healtQuestions, setHealtQuestions] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading) setHealtQuestions(data);
  }, [isLoading]);

  const checkAnswers = () => {
    const answers = healtQuestions.map((quest, index) => {
      const selectElement = document.getElementById(`answer${index}`);
      return {
        question: quest.question,
        selectedAnswer: selectElement.value,
        correctAnswer: quest.answer,
      };
    });

    const isAllCorrect = answers.every(answer => {
      console.log(answer.selectedAnswer, answer.correctAnswer, answer.selectedAnswer === answer.correctAnswer)
      return answer.selectedAnswer === answer.correctAnswer
    });

    if (isAllCorrect) {
      navigate('/student/load')
    } else {
      alert('Hay riesgo que seas portador')
      navigate('/student/welcome')
    }
  };

  return (
    <div className="cuestionario">
      <h3 className="text-3xl font-bold mb-4">Cuestionario de Acceso</h3>
      <h5 className="mb-4">Por favor, responda el siguiente cuestionario con total honestidad</h5>
      <div className="border border-dark p-5 m-5">
        <form className="flex flex-col items-start">
          {healtQuestions.map((quest, index) => (
            <div key={index} className="mb-6">
              <label className="block text-lg font-semibold mb-2">{quest.question}</label>
              <select
                name={`answer${index}`}
                id={`answer${index}`}
                className="border border-gray-300 p-2 rounded"
              >
                <option value="si">Si</option>
                <option value="no">No</option>
              </select>
            </div>
          ))}
        </form>
        {/* Botones de Acceso como botones */}
        <div className="mt-4 text-center">
          <button onClick={checkAnswers} className="bg-yellow-500 hover:bg-yellow-400 text-white px-4 py-2 rounded mr-2">
            Enviar
          </button>
          <Link to='/student/welcome' className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded">
            Cancelar
          </Link>
        </div>
      </div>
    </div>
  );
};
