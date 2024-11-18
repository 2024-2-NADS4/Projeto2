import { api } from "@/lib/axios";
import { useRouter } from 'next/navigation'
import { QRCodeSVG } from 'qrcode.react';
import { Input } from "@/components/Input"
import { Wrapper, Title, Container } from '../init/styles'
import { Form, QrCodeContainer } from './styles'
import { Navbar } from "@/components/Navbar";
import { useState } from "react";
import { Button } from '@/components/Button'

const PartRegistration = () => {
  const router = useRouter()

  const [hasCreatedQr, setHasCreatedQr] = useState(false);
  const [url, setUrl] = useState("")

  const [partModel, setPartModel] = useState("");
  const [partNumber, setPartNumber] = useState("");
  const [partBrand, setPartBrand] = useState("");
  const [lotNumber, setLotNumber] = useState("");
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const urlBase = typeof window !== "undefined" ? window.location.origin : '';
    const urlQrcode = `${urlBase}/carpart-info/${partNumber}`;
    setUrl(urlQrcode);

    try {
      const res = await api.post(`/register_part`, {
        partModel,
        partNumber,
        partBrand,
        lotNumber,
        urlQrcode,
      });
      
      alert("Peça cadastrada com sucesso")

      setHasCreatedQr(true);      

    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.Mensagem);
        return;
      }
      alert(
        "Não foi cadastrar a peça plataforma, tente novamente mais tarde"
      );

    }

  }

  return (
    <Container>
      <Navbar />
      <Wrapper>

      {hasCreatedQr ? (
        <QrCodeContainer>
          <Title>Cadastro de peça</Title>
          <QRCodeSVG value={url} size={256} />
          <Button text='Imprimir QR Code' onClick={() => window.print()} />
        </QrCodeContainer>
      ) : (
        <>
          <Title>Cadastro de peça</Title>
          <Form onSubmit={handleSubmit}>
            <div>
              <Input onChange={(e) => setPartModel(e.target.value)} placeholder="Exemplo: Modelo A" id='part-model' type="text" labelText='Modelo da peça' required />
              <Input onChange={(e) => setPartNumber(e.target.value)} placeholder="Exemplo: 1132" id='part-number' type="text" labelText='Número da Peça' required />
            </div>
            <div>
              <Input onChange={(e) => setPartBrand(e.target.value)} placeholder="Exemplo: Bosh"  id='part-brand' type="text" labelText='Marca da peça' required />
              <Input onChange={(e) => setLotNumber(e.target.value)} placeholder="Exemplo: 222312" id='part-lot-number' type="text" labelText='Número do lote' required />
            </div>

            <Button text='Cadastrar' />
          </Form>
        </>
      )}
      </Wrapper>
    </Container>
  )
};

export default PartRegistration;
