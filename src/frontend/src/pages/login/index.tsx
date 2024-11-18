import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { api } from "@/lib/axios";
import { Container, Form, BgImage, InputContainer } from './styles'
import { Button } from '@/components/Button';

const Login = () => {
  
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleLoginSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const res = await api.post(`/login`, {
        email,
        password
      });
      
      router.push(`/init`)

    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
        return;
      }
      alert(
        "Não foi possível efetuar o login na plataforma, tente novamente mais tarde"
      );

    }
}


  return (
    <Container>
      <BgImage src='/background.png' width={1060} height={904} alt='background image' />
        <Form onSubmit={handleLoginSubmit}>
            <h1>Login</h1>

            <InputContainer>
              <label htmlFor="email">Email</label>
              <input onChange={(e) => setEmail(e.target.value)} id='email' type="email" name="email" required />
            </InputContainer>
            <InputContainer>
              <label htmlFor="password">Senha</label>
              <input onChange={(e) => setPassword(e.target.value)} id='password' type="password" name="password" required />
            </InputContainer>

            <Button text='Entrar' /> 
        </Form>
    </Container>
  )
}


export default Login;