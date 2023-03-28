import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 3rem;
  border: 1px dashed var(--primary);
  border-radius: 1rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background: var(--primary);
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
`;
