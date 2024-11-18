import { useRouter } from 'next/router'
import Image from 'next/image'
import logo from '../../assets/VelocitQR.png'
import logoutImg from '../../assets/logout.svg'

import {
  Container,
  LoginLink,
  Menu,
  MenuItem,
  MenuLink,
  MenuList,
} from './styles'

export function Navbar() {
  const router = useRouter()

  const handleActiveItem = (pathname: any) => {
    const pathActived = router.pathname === pathname
    return pathActived
  }

  return (
    <Container>
      <Image src={logo} alt="Logo da empresa" />
      <Menu>
        <MenuList>
          <MenuItem active={handleActiveItem('/init')}>
            <MenuLink href={'/init'} active={handleActiveItem('/init')}>
              Início
            </MenuLink>
          </MenuItem>
          <MenuItem active={handleActiveItem('/part-registration')}>
            <MenuLink href={'/part-registration'} active={handleActiveItem('/part-registration')}>
              Cadastrar peça
            </MenuLink>
          </MenuItem>
          <MenuItem active={handleActiveItem('/sale-registration')}>
            <MenuLink href={'/sale-registration'} active={handleActiveItem('/sale-registration')}>
              Cadastro de Venda
            </MenuLink>
          </MenuItem>
          <MenuItem active={handleActiveItem('/warranty-requests')}>
            <MenuLink href={'/warranty-requests'} active={handleActiveItem('/warranty-requests')}>
              Solicitações de Garantias
            </MenuLink>
          </MenuItem>

          <MenuItem active={handleActiveItem('/reports')}>
            <MenuLink href={'/reports'} active={handleActiveItem('/reports')}>
              Relátorios
            </MenuLink>
          </MenuItem>
        </MenuList>

        <LoginLink href={`/`}>
          <Image width={24} height={24} src={logoutImg} alt="Imagem de logout" />
          Sair
        </LoginLink>
      </Menu>
    </Container>
  )
}
