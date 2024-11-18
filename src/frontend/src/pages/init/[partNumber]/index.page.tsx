import { Input } from "@/components/Input"
import { api } from "@/lib/axios";
import { Wrapper, Title, Container } from '../styles'
import { ContentContainer, QrCodeContainer } from './styles'
import { Navbar } from "@/components/Navbar";
import { QRCodeSVG } from 'qrcode.react';
import { Button } from "@/components/Button";

export async function getServerSideProps(context: any) {
  const { partNumber } = context.params;
  
  const res = await api.get(`/carpart-info/${partNumber}`);
  const data = await res.data;

  return { props: { data } };
}

const InitCarPartDetails = ({data}: any) => {

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Detalhes da peça</Title>
        <ContentContainer>

        <div>
          <Input value={data.partModel} id='part-model' type="text" labelText='Modelo da peça' readOnly />
          <Input value={data.partNumber} id='part-number' type="text" labelText='Número da Peça' readOnly />
        </div>
        <div>
          <Input value={data.partBrand} id='part-brand' type="text" labelText='Marca da peça' readOnly />
          <Input value={data.lotNumber} id='part-lot-number' type="text" labelText='Número do lote' readOnly />
        </div>
        <QrCodeContainer>
          <QRCodeSVG value={data.urlQrcode} size={236} />
          <Button text='Imprimir QR Code' onClick={() => window.print()} />
        </QrCodeContainer>
        </ContentContainer>

      </Wrapper>
    </Container>
  )
};

export default InitCarPartDetails;

