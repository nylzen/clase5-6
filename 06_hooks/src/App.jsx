import EjemploContexto from './components/EjemploContexto/EjemploContexto';
import EjemploUseReducer from './components/EjemploUseReducer/EjemploUseReducer';
import Layout from './components/Layout/Layout';
import { ContextoProvider } from './context/Context';
import GlobalStyles from './styles/GlobalStyles';

// Crear el contexto, pasar el provider y usar el useContext

function App() {
  return (
    <>
      <ContextoProvider>
        <Layout>
          <EjemploUseReducer />
          <EjemploContexto />
        </Layout>
      </ContextoProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
