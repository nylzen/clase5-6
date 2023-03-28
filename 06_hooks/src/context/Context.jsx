import { createContext } from 'react';

export const Contexto = createContext();

export const ContextoProvider = ({ children }) => {
  // Acá iria la logica que queremos guardar globalmente

  return (
    <Contexto.Provider
      value={{
        color: 'blue',
        texto: 'Hola',
      }}
    >
      {children}
    </Contexto.Provider>
  );
};
