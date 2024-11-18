import { styled } from '../../../styles'
import Link from 'next/link'

export const Container = styled('div', {
  width: '100vw',
  backgroundColor: 'white',
})

export const Header = styled('div', {
  backgroundColor: '#001430',
  height: '94px',
  width: '100%;',
  display: 'flex',
  alignCenter: 'center',
  justifyContent: 'center',
})

export const Main = styled('main', {
  width: '100%',
  paddingInline: '26px',
  paddingTop: '30px',
  paddingBottom: '30px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '22px',
})

export const Title = styled('h1', {
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '1.625rem',
  lineHeight: '31px',
  color: '#000000',
  paddingBottom: '14px',
})

export const LinkButton = styled(Link, {
  fontSize: '0.875rem',

  textDecoration: 'none',
  marginTop: '10px',
  height: '46px',
  width: '100%',
  maxWidth: '418px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '5px',
  border: 'none',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  backgroundColor: '$blue-button',
  color: '$white',
  cursor: 'pointer',
  transition: 'all 0.2s ease',

  '&:hover': {
    backgroundColor: '#11314F',
  },

  
  '@media print': {
    visibility: 'hidden',
  }
})


export const DataContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '22px',
})


export const MainResult = styled(Main, {
  height: '100vh',
  width: '100%',

  display: 'flex',

  'h1': {
    textAlign: 'center'
  }
})