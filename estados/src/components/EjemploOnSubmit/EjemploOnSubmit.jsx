const EjemploOnSubmit = () => {
  const handleSubmit = e => {
    e.preventDefault();
    alert('Enviaste el form');
  };

  return (
    <>
      <h2>Enviá el form</h2>
      <form onSubmit={handleSubmit}>
        <button>Enviar</button>
      </form>
    </>
  );
};

export default EjemploOnSubmit;
