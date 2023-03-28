import React, { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h2>Contador</h2>
      <button onClick={incrementar}>+</button>
      <p>{contador}</p>
      <button onClick={decrementar}>-</button>
    </div>
  );
};

export default Contador;
