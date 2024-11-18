import { styled } from '../../styles/index'


export const Form = styled('form', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '22px',

  padding: '10px 20px',

  '> div': {
    width: '100%',
    display: 'flex',
    gap: '30px',
  },

  'div:last-child': { 
    maxWidth: '418px',
    width: '100%',
  },
  
  'button': {
    marginTop: '25px',
  }

})