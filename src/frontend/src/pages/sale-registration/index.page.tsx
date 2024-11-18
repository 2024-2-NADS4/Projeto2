import { useState } from 'react';
import { api } from "@/lib/axios";
import { useRouter } from 'next/navigation'
import { formatDateForBDpattern } from "../../utils/format"
import { Navbar } from '@/components/Navbar';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button'
import { Container, Title, Wrapper } from '../init/styles'
import { Form } from './styles'


const SaleRegistration = () => {

  const router = useRouter()

  const [name, setName] = useState("");
  const [taxNumber, setTaxNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [partNumber, setPartNumber] = useState("");
  const [warrantyDeadline, setWarrantyDeadline] = useState("")
  
  const handleRecordSale = async (e: any) => {
    e.preventDefault();

    const currentDate = new Date();
    const currentDateFormated = formatDateForBDpattern(currentDate)

    const warrantyDeadlineDate = new Date(`${warrantyDeadline}T00:00:00`);
    const warrantyDeadlineFormated = formatDateForBDpattern(warrantyDeadlineDate)

    try {
      const res = await api.post(`/register_sale`, {
        name,
        taxNumber,
        email,
        phone,
        partNumber,
        warrantyDeadline: warrantyDeadlineFormated,
        created_at: currentDateFormated,
      });
      
      alert("Venda cadastrada com sucesso")

      router.push(`/init`)
      

    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
        return;
      }
      alert(
        "Não foi cadastrar a venda da peça plataforma, tente novamente mais tarde"
      );
    }
  }

  return (
    <Container>
       <Navbar />
        <Wrapper onSubmit={handleRecordSale}>
          <Title>Cadastro de venda</Title>
          <Form>
            <div>
              <Input onChange={(e) => setName(e.target.value)} placeholder="Exemplo: Lucas Souza" id='name' type="text" labelText='Nome' required />
              <Input onChange={(e) => setTaxNumber(e.target.value)} placeholder="Exemplo: 12345678900 12345678000100"  id='cpf' type="text" labelText='CPF/CNPJ' required />
            </div>
            <div>
              <Input onChange={(e) => setEmail(e.target.value)} placeholder="Exemplo: nome@dominio.com" id='email' type="email" labelText='E-mail' required />
              <Input onChange={(e) => setPhone(e.target.value)} placeholder="Exemplo: 11987654321" id='cellphone' type="text" labelText='Telefone' required />
            </div>

            <div>
              <Input onChange={(e) => setPartNumber(e.target.value)} placeholder="Exemplo: 12345" id='part-number' type="text" labelText='Número da peça' required />
              <Input onChange={(e) => setWarrantyDeadline(e.target.value)} id='warrantyDeadline' type="date" labelText='Data limite da garantia' required />
            </div>

            <Button text='Cadastrar' />
          </Form>
       
        </Wrapper>
    </Container>
  )
};

export default SaleRegistration;
