import { styled } from '../../../../styles/index'

export const Container = styled('div', {
  width: "100%",
  backgroundColor: '#fff',
  padding: '40px 60px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '5px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',

  transition: 'transform 0.2s ease, box-shadow 0.2s ease',

  '&:hover': {
    boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.25)',
    transform: 'translateY(-1px)', // Move o card para cima
  },

  'div': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
  }
})



