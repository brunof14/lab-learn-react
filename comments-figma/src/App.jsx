import { Container } from "./styles/Container";
import { AccountLogged } from "./components/AccountLogged";
import { Comments } from "./components/Comments";

export function App() {
  return (
    <>
      <Container>
        <AccountLogged />
      </Container>
      <Container>
        <Comments />
      </Container>
    </>
  );
}
