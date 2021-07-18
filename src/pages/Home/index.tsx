// import { useHistory } from "react-router-dom";
// import { auth, firebase } from "../../services/firebase";

import IllustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import GoogleImg from "../../assets/images/google-icon.svg";

import Button from "../../components/Button";

import { Container, Aside, Main } from "./style";
import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  const { signInWithGoogle, user } = useAuth();

  async function handleCreateRom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/rooms/new");
  }

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
          <button onClick={handleCreateRom}>
            <img src={GoogleImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>

          <div className="separator">ou entre em uma sala</div>

          <form>
            <input type="text" placeholder="Digite o código da sala" />

            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </Main>
    </Container>
  );
}
