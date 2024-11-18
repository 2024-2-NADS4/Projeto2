import { styled } from '../../../styles/index'

export const ContentContainer = styled('form', {
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
})



export const QrCodeContainer = styled('div', {
  marginTop: '10px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})





