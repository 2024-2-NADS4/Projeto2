import { styled } from '../../styles/index'

export const Container = styled('div', {
  height: '100vh',
  display: 'flex',
})

export const Wrapper = styled('section', {
  maxWidth: '945px',
  width: '100%',
  height: '580px',
  margin: 'auto',
  paddingInline: '20px 8px',

  backgroundColor: '$gray-400',
  borderRadius: '10px'
})

export const Title = styled('h1', {
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '1.875rem',
  lineHeight: '2.75rem',

  color: '#000000',
  textAlign: 'center',

  marginTop: '24px',
  marginBottom: '24px',

  '@media print': {
    visibility: 'hidden',
  }
})

export const CardsContainer = styled('div', {
  height: '470px',
  overflowY: 'auto',


  display: 'flex',
  flexDirection: 'column',
  gap: '21px',

  '&::-webkit-scrollbar': {
    width: '22px',
  },

  '&::-webkit-scrollbar-thumb': {
    boxShadow: 'inset 0 0 10px 10px black',
    border: 'solid 7px transparent',
    borderRadius: '20px',
  },
})

export const ErrorText = styled('p', {
  textAlign: 'center',
  fontSize: '1.125rem',
  marginTop: '30px',
})









