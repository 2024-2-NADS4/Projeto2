import { useRouter } from 'next/router';
import Image from 'next/image';
import { MainResult } from './styles';
import logoMobile from '../../../assets/VelocitQR-mobile.png';
import aprovado from '../../../assets/aprovado.png';
import reprovado from '../../../assets/negado.png';
import { Container, Header } from '../../carpart-info/[partNumber]/styles';

const WarrantyFormResult = () => {
  const router = useRouter();
  const { claimResult } = router.query;
  const resultData = {
    
    success: {
      image: aprovado,
      message: "Solicitação de garantia realizada com sucesso, entraremos em contato.",
    },
    failed: {
      image: reprovado,
      message: "Solicitação de garantia negada, dados informados não coincidem com o comprador.",
    },
    'failed-expired': {
      image: reprovado,
      message: "Solicitação de garantia negada, a garantia do produto expirou.",
    },
    'failed-warranty': {
      image: reprovado,
      message: "Solicitação de garantia negada, já foi solicitada anteriormente.",
    },
  };

  const currentResult = resultData[claimResult as keyof typeof resultData] || {
    image: reprovado,
    message: "Erro desconhecido. Por favor, tente novamente.",
  };

  return (
    <Container>
      <Header>
        <Image src={logoMobile} alt="Logo da empresa" />
      </Header>
      <MainResult>
        <Image width={160} height={160} src={currentResult.image} alt="Resultado da solicitação" />
        <p>{currentResult.message}</p>
      </MainResult>
    </Container>
  );
};

export default WarrantyFormResult;
