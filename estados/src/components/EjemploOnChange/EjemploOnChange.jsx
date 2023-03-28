import { useState } from 'react';

const EjemploOnChange = () => {
  const [value, setValue] = useState('');

  const handleValue = e => {
    // console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <p>{value || 'El input está vacío'}</p>
      <input type='text' placeholder='Escribí algo' onChange={handleValue} />
    </div>
  );
};

export default EjemploOnChange;
