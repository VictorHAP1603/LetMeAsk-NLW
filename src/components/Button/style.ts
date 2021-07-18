import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background-color: var(--purple-450);
  color: var(--white);
  padding: 0 32px;

  cursor: pointer;
  border: 0;

  transition: 0.2s;

  &:not(:disabled):hover {
    filter: brightness(0.8);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
