import styled from 'styled-components';

const WrapperGeneral = styled.div`
  height: 100vh;
  width: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #131415;
  color: white;
`;

export const GeneralWrapper = ({ children }) => {
  return <WrapperGeneral>{children}</WrapperGeneral>;
};
