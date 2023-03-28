// import Contador from './components/contador/Contador';
// import EjemploOnChange from './components/EjemploOnChange/EjemploOnChange';
// import EjemploOnClick from './components/EjemploOnClick/EjemploOnClick';
// import EjemploOnSubmit from './components/EjemploOnSubmit/EjemploOnSubmit';
// import EjemploUseEffect from './components/EjemploUseEffect/EjemploUseEffect';
// import { GeneralWrapper } from './components/GeneralWrapper/GeneralWrapper';
// import Ref from './components/ref/Ref';
// import SmallWrapper from './components/SmallWrapper/SmallWrapper';

import {
  Contador,
  EjemploOnChange,
  GeneralWrapper,
  Nuevo,
  SmallWrapper,
} from './components';

function App() {
  return (
    <GeneralWrapper>
      <SmallWrapper>
        <Contador />
        <EjemploOnChange />
        <Nuevo />
      </SmallWrapper>
    </GeneralWrapper>
  );
}

export default App;
