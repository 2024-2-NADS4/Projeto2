import { AnchorHTMLAttributes } from 'react'
import { styled } from '../../styles/index'
import Link from 'next/link'

export const Container = styled('div', {
  height: '100%',
  maxWidth: '242px',
  width: '100%',
  background: '$nav-gradient',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 10px',
  paddingBottom: '38px',

  borderRadius: '5px',

   '@media print': {
      visibility: 'hidden',
   }

})

export const Menu = styled('nav', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const MenuList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  listStyle: 'none',
  textAlign: "center"
})

export const MenuItem = styled('li', {
  position: 'relative',

  variants: {
    active: {
      true: {
        '&::after': {
          content: '',
          position: 'absolute',
          borderRadius: '$full',
          left: '-16px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '3px',
          height: '24px',
          background: `linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)`,
          visibility: 'visible',
          transition: 'visibility 1s,background-color 0.3s',
        },
        false: {
          visibility: 'hidden',
        },
      },
    },
  },
})

interface MenuLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean
}
export const MenuLink = styled(Link, {
  fontSize: '1rem',


  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  color: '$gray-400',
  textDecoration: 'none',

  '&:hover': {
    color: '#809FD6',
  },

  variants: {
    active: {
      true: {
        color: '#809FD6',
      },
    },
  },
}) as React.FC<MenuLinkProps>

export const LoginLink = styled(Link, {
  textDecoration: 'none',

  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '1.125rem',
  display: 'flex',
  maxWidth: '76px',
  width: '100%',
  gap: '10px',
  alignItems: 'center',
  color: '$logout-color',
  border: 'none',
  backgroundColor: 'transparent',
  margin: '0  auto',
  cursor: 'pointer',
})  





