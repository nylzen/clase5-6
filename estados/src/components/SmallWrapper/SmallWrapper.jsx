import styled from 'styled-components';

const WrapperSmall = styled.div`
  height: 50%;
  width: 75%;
  padding: 2rem;
  border: 1px dashed #4747ff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SmallWrapper = ({ children }) => {
  return <WrapperSmall>{children}</WrapperSmall>;
};

export default SmallWrapper;
