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

    > h2 {
      font-size: 1.5rem;
      margin: 64px 0 24px;
      text-align: center;
      font-family: "Poppins", sans-serif;
    }

    > p {
      font-size: 0.8rem;
      color: #737380;
      margin-top: 1rem;
      text-align: center;

      a {
        color: #e559f9;
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
`;
