import {Container, WelcomeText, InputContainer, ButtonContainer, ForgotPassword} from "./styles/styles";
import Button from "./components/Button";
import Input from "./components/Input";
function App() {
  return (
    <Container>
      <WelcomeText>Bemvindo</WelcomeText>
      <InputContainer>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button content="Entrar" />
      </ButtonContainer>
      <ForgotPassword>Esqueceu a senha?</ForgotPassword>
    </Container>
  );
}

export default App;
