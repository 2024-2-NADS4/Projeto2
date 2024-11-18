import { Container } from './styles'
import { useRouter } from 'next/navigation'

interface WarrantyCardProps {
  id: string;
  partModel: string;
  partBrand: string;
  partNumber: string;
  lotNumber: string;
}

export const WarrantyCard = ({ id, partModel, partBrand, partNumber, lotNumber}: WarrantyCardProps) => {
  const router = useRouter()

  const handleNavigateToWarrantyDetails = () => {
    router.push(`/warranty-requests/${partNumber}`)
  }

  return (
    <Container onClick={handleNavigateToWarrantyDetails}>
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

