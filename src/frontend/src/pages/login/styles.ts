import { styled } from '../../styles'
import Image from 'next/image'


export const Container = styled('div', {
  background: 'linear-gradient(270deg, #0D3B66 47%, #1562AA 93.5%, #1562AA 100%)',

  width: '100%',
  height: '100dvh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'relative',
  overflow: 'hidden',
})

export const BgImage = styled(Image, {
  position: 'absolute',
  right: '-125px',
})

export const Form = styled('form', {
  background: 'rgb(0,0,0,0.1)',
  width: '481px',
  height: '525px',
  padding: '14px',
  borderRadius: '5px',
  border: '1px solid white',
  backdropFilter: 'blur(5px)',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',

  'h1': {
    marginTop: '50px', 
    marginBottom: '20px', 
    fontWeight: '700',
    fontSize: '2.5rem',
  },

  'button': {
    marginTop: '20px', 
  }
})


export const InputContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '11px',
  maxWidth: '418px',

  'label': {
    fontSize: '16px',
  },

  'input': {
    color: '#FFFFFF',
    fontSize: '1rem',
    height: '48px',
    background: '#0E2D4A',
    borderRadius: '5px',
    border: '1px solid #FFFFFF',
    padding: '14px 17px',

    '&:active': {  // Corrigido aqui, usando o &:active
      background: '#0E2D4A',
    },
  }
})



