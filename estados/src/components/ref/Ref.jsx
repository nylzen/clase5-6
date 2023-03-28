import { useRef } from 'react';

const Ref = () => {
  const title = useRef();

  const handleTitleColor = () => {
    console.log(title.current);
    title.current.style.backgroundColor = 'crimson';
  };
  return (
    <>
      <h2 ref={title}>Soy un titulo</h2>
      <button onClick={handleTitleColor}>Cambiar color</button>
    </>
  );
};

export default Ref;
