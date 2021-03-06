import { Link } from "react-router-dom";

import IllustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";

import Button from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";

import { Container, Aside, Main } from "./style";

export default function NewRoom() {
  const { user } = useAuth();

  return (
    <Container>
      <Aside>
        <img
          src={IllustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </Aside>

      <Main>
        <div>
          <img src={logoImg} alt="Letmeask" />
          <h1>{user?.name}</h1>
          <h2>Criar uma nova sala</h2>

          <form>
            <input type="text" placeholder="Nome da sala" />

            <Button type="submit">Criar sala</Button>
          </form>

          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </Main>
    </Container>
  );
}
