import { useContext } from 'react';
import { Contexto } from '../../context/Context';

const EjemploContexto = () => {
  const { color, texto } = useContext(Contexto);

  return (
    <h2 style={{ backgroundColor: color }}>
      Cual es el texto contexto: {texto}
    </h2>
  );
};
export default EjemploContexto;
