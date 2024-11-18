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

  'button': {
    marginTop: '25px',
  }
})

export const QrCodeContainer = styled('div', {
  width: '100%',
  maxWidth: '418px',

  margin: 'auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '38px'

})



