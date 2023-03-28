import { useContext, useReducer } from 'react';
import { Contexto } from '../../context/Context';
import { Button, Container } from './ReducerStyles';

const initialState = { count: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const EjemploUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { color } = useContext(Contexto);

  return (
    <>
      <Container>
        <div style={{ backgroundColor: color }}>
          <Button onClick={() => dispatch({ type: 'decrement' })}>-</Button>
          <span>Count: {state.count}</span>
          <Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
        </div>
        <Button onClick={() => dispatch({ type: 'reset' })}>Reset</Button>
      </Container>
    </>
  );
};
export default EjemploUseReducer;
