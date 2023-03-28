import { useEffect, useState } from 'react';

const EjemploUseEffect = () => {
  //   useEffect(() => {
  //     alert('Fase de montaje');
  //   }, []);

  const [click, setClick] = useState(false);

  useEffect(() => {
    console.log('Me cambio de valor', click);
  }, [click]);

  return (
    <div>
      <button onClick={() => setClick(!click)}>Clickeame</button>
    </div>
  );
};

export default EjemploUseEffect;
