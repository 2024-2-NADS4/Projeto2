import { api } from '../../../lib/axios'
import Image from 'next/image'
import { Container, Header, Title, LinkButton, MainResult, DataContainer } from './styles'
import logoMobile from '../../../assets/VelocitQR-mobile.png'
import { Input } from '@/components/Input'

export async function getServerSideProps(context: any) {
  const { partNumber } = context.params;
  
  const res = await api.get(`/carpart-info/${partNumber}`);
  const data = await res.data;

  return { props: { data } };
}

const CarPartInfo = ({ data }: any) => {
  return (
    <Container>
      <Header>
        <Image src={logoMobile} alt="Logo da empresa" />
      </Header>
      <MainResult>
        <Title>Dados da peça</Title>
        <DataContainer>
          <Input value={data.partModel} id='partModel' type="text" labelText='Modelo da peça' readOnly />
          <Input value={data.partNumber} id='partNumber' type="text" labelText='Número da Peça' readOnly />
          <Input value={data.partBrand} id='partBrand' type="text" labelText='Marca da Peça' readOnly />
          <Input value={data.lotNumber} id='lotNumber' type="text" labelText='Número do lote' readOnly />
        </DataContainer>

        <LinkButton href={`/warranty-form-request/${data.partNumber}`}>Solicitar garantia</LinkButton>
      </MainResult>
    </Container>
  );
};

export default CarPartInfo


{/* <div>
<h1>Detalhes do Peça</h1>
{data ? (
  <div>
    <p>{data.title}</p>
    <p>{data.type}</p>
    <p>{data.description}</p>
  </div>
) : (
  <p>Produto não encontrado.</p>
)}
</div> */}