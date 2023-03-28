import { useState } from 'react';

const EjemploOnClick = () => {
  const [isToggle, setIsToggle] = useState(true);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      {isToggle ? <span>Soy Verdadero</span> : <span>Soy Falso</span>}
      <button onClick={handleToggle}>Cambiame</button>
    </>
  );
};

export default EjemploOnClick;
