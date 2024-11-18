import { useState, useEffect} from "react";
import { api } from "@/lib/axios";
import { ErrorText } from "../init/styles"
import { Container, Wrapper, Title, CardsContainer } from '../init/styles'
import { WarrantyCard } from './components/WarrantyCard'
import {Navbar} from "@/components/Navbar";
import { Loading } from "@/components/Loading";

interface warrantysProps {
  id: number,
  partModel: string;
  partBrand: string;
  partNumber: string;
  lotNumber: string;
  email: string;
  name: string;
  phone: string;
  taxNumber: string;
  warrantyDeadline: string;
}

const WarrantyRequests = () => {

  const [isLoading, setIsLoading] = useState(true);

  const [warrantys, setWarrantiesRegistered] = useState<warrantysProps[]>([]);

  const handleGetWarrantys = async () => {

    try {
      const res = await api.get(`/warranty_claims`);
      const data = await res.data;
      setIsLoading(false);
      setWarrantiesRegistered(data)
    } catch (err) {
      setIsLoading(false);
      alert("Não foi possível carregar os dados, tente novamente em outro momento")
    }
  }
    
  useEffect(() => {
    handleGetWarrantys()
  }, [])

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Solicitações de Garantia</Title>
        {isLoading ? <Loading /> : (
          <CardsContainer>
            {
              warrantys.length <= 0 ? (<ErrorText>Não há garantias registradas</ErrorText>):
              (
                [...warrantys].reverse().map(warranty => (
                  <WarrantyCard key={String(warranty.id)}
                    id={String(warranty.id)} partNumber={warranty.partNumber} partBrand={warranty.partBrand}
                    lotNumber={warranty.lotNumber} partModel={warranty.partModel}
                  />
              )))
            }    
          </CardsContainer>
        )}
      </Wrapper>
    </Container>
  )
};

export default WarrantyRequests;
