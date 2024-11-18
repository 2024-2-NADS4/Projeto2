import logoMobile from '../../../assets/VelocitQR-mobile.png'
import { useState } from 'react';
import { api } from '../../../lib/axios'
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Form } from './styles'
import { Header, Title, Container } from '../../carpart-info/[partNumber]/styles'
import { MainResult } from '../../carpart-info/[partNumber]/styles'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button';

const WarrantyFormRequest = () => {
  const router = useRouter();
  const { partNumber } = router.query;

  const [name, setName] = useState("");
  const [taxNumber, setTaxNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleWarrantyFormSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const res = await api.post(`/warranty_claim`, {
        name,
        taxNumber,
        email,
        phone,
        partNumber,
      });
      
      if(res.status === 200 || res.status === 201) {
        router.push(`/warranty-form-result/success`)
      }

    } catch (error: any) {
      if (error.response) {
        
        if (error.response.data.message === "Os dados não batem com a venda da peça") {
          router.push(`/warranty-form-result/failed`)
          return;
        }

        if (error.response.data.message === "A garantia expirou") {
          router.push(`/warranty-form-result/failed-expired`)
          return;
        }

        if (error.response.data.message === "Já foi solicitada a garantia para peça") {
          router.push(`/warranty-form-result/failed-warranty`)
          return;
        }
        
      }
      alert(
        "Não foi enviar os dados na plataforma, tente novamente mais tarde"
      );
    }
  }
  
  return (
    <Container>
      <Header>
        <Image src={logoMobile} alt="Logo da empresa" />
      </Header>
      <MainResult>
        <Title>Informe os dados</Title>
        <Form onSubmit={handleWarrantyFormSubmit}>
          <Input onChange={(e) => setName(e.target.value)} placeholder="Exemplo: Lucas Souza" id='name' type="text" labelText='Nome' required />
          <Input onChange={(e) => setTaxNumber(e.target.value)} placeholder="Exemplo: 12345678900 12345678000100"  id='cpf' type="text" labelText='CPF/CNPJ' required />
          <Input onChange={(e) => setEmail(e.target.value)} placeholder="Exemplo: nome@dominio.com" id='email' type="email" labelText='E-mail' required />
          <Input onChange={(e) => setPhone(e.target.value)} placeholder="Exemplo: 11987654321" id='cellphone' type="text" labelText='Telefone' required />
          <Button text='Enviar' />
        </Form>
        
      </MainResult>
    </Container>
  );
};

export default WarrantyFormRequest
