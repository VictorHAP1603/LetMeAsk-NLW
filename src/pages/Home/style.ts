import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* align-items: stretch; */
  height: 100vh;
`;

export const Aside = styled.aside`
  flex: 4;
  background-color: var(--purple-450);
  color: var(--white);

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 7rem 4rem;

  img {
    max-width: 320px;
  }

  strong {
    font: 700 2rem "Poppins", sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 1.5rem;
    line-height: 32px;
    margin-top: 16px;
    color: var(--white-200);
  }
`;

export const Main = styled.main`
  flex: 6;

  padding: 0 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;

    > img {
      align-self: center;
    }

    > button {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-top: 64px;
      height: 50px;
      border-radius: 8px;
      font-weight: 500;
      background: #ea4335;
      color: var(--white);

      cursor: pointer;
      border: 0;

      transition: 0.2s;

      img {
        margin-right: 8px;
      }

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  form {
    button,
    input {
      display: block;
      width: 100%;
    }

    input {
      height: 50px;
      border-radius: 8px;
      padding: 0 1rem;
      background-color: var(--white);
      border: 1px solid var(--gray-400);
    }

    button {
      margin-top: 16px;
    }
  }

  .separator {
    font-size: 0.8rem;
    color: var(--gray-400);

    margin: 32px 0;

    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
      content: "";
      display: block;
      flex: 1;
      height: 1px;
      background: var(--gray-400);
      margin-right: 16px;
    }

    &:after {
      content: "";
      display: block;
      flex: 1;
      height: 1px;
      background: var(--gray-400);
      margin-left: 16px;
    }
  }
`;
