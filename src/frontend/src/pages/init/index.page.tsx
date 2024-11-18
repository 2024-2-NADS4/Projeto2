import { api } from "@/lib/axios";
import { useEffect, useState } from "react";
import { Container, Wrapper, Title, CardsContainer, ErrorText } from './styles'
import {Navbar} from "@/components/Navbar";
import { Loading } from "@/components/Loading";
import { Card } from './components/Card'

export interface CardProps {
  partModel: string;
  partBrand: string;
  partNumber: string;
  lotNumber: string;
}

const Init = () => {

  const [carPartsRegistered, setCarPartsRegistered] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const handleGetCarPartsRegistered = async () => {
    try {
      const res = await api.get(`/part_register_list`);
      const data = await res.data;
      setIsLoading(false);
      setCarPartsRegistered(data)
    } catch (err) {
      setIsLoading(false);
      alert("Não foi possível carregar os dados, tente novamente em outro momento")
    }
  }

  useEffect(() => {
    handleGetCarPartsRegistered()
  }, [])

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Lista de peças cadastradas</Title>
        {isLoading ? <Loading /> : (
          <CardsContainer>
            {
              carPartsRegistered.length <= 0 ? (<ErrorText>Não há peças registradas</ErrorText>) : (
                [...carPartsRegistered].reverse().map((carPartRegistered: CardProps) => (
                  <Card key={carPartRegistered.partNumber} partModel={carPartRegistered.partModel} partBrand={carPartRegistered.partBrand} partNumber={carPartRegistered.partNumber} lotNumber={carPartRegistered.lotNumber} />
                ))
              )
            }        
          </CardsContainer>
        )}
      </Wrapper>
    </Container>
  )
};

export default Init;
