import { api } from "@/lib/axios";
import { formatDataToShow } from "../../../utils/format"
import { Container, Wrapper, Title } from '../../init/styles'
import { Input } from '../../../components/Input'
import { Data } from './styles'
import { Navbar } from "@/components/Navbar";

export async function getServerSideProps(context: any) {
  const { partNumber } = context.params;
  
  const res = await api.get(`/warranty_claim/${partNumber}`);
  const data = await res.data;

  return { props: { data } };
}

const WarrantyRequest = ({ data }: any) => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Informações da Garantia</Title>
        <Data>
          <div>
            <div>
              <Input value={data.partModel} id='part-model' type="text" labelText='Modelo da peça' readOnly />
              <Input value={data.partBrand} id='part-label' type="text" labelText='Marca da Peça' readOnly />
              <Input value={data.partNumber} id='part-number' type="text" labelText='Número da Peça' readOnly />
              <Input value={data.lotNumber} id='part-lot-number' type="text" labelText='Número do lote' readOnly />
            </div>

            <div>
              <Input value={data.name} id='name' type="text" labelText='Nome' readOnly />
              <Input value={data.phone} id='phone' type="text" labelText='Telefone' readOnly />
              <Input value={data.taxNumber} id='cpf' type="text" labelText='CPF/CNPJ' readOnly />
              <Input value={data.email} id='email' type="email" labelText='E-mail' readOnly />
            </div>
          </div>
          
          <span>
            <Input value={formatDataToShow(data.warrantyDeadline)} id='warrantyDeadline' type="text" labelText='Data limite da garantia' readOnly />
          </span>
        </Data>
      </Wrapper>
    </Container>
  );
};

export default WarrantyRequest;
