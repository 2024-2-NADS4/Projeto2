import { CardProps } from '../../index.page';
import { useRouter } from 'next/navigation'
import { Container } from './styles'

export const Card = ({partModel, partBrand, partNumber, lotNumber}: CardProps) => {
  const router = useRouter()

  const handleNavigateToCarPartDetails = () => {
    router.push(`/init/${partNumber}`)
  }

  return (
    <Container onClick={handleNavigateToCarPartDetails}>
      <div>
        <strong>Modelo da peça</strong>
        <p>{partModel}</p>
      </div>
      <div>
        <strong>Marca</strong>
        <p>{partBrand}</p>
      </div>
      <div>
        <strong>Número da peça</strong>
        <p>{partNumber}</p>
      </div>
      <div>
        <strong>Número do lote</strong>
        <p>{lotNumber}</p>
      </div>
    </Container>
  )
};


