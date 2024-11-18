import { styled } from '../../../styles/index'


export const Data = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '26px',

  padding: '10px 20px',

  '> div': {
    width: '100%',
    display: 'flex',
    gap: '30px',


    '> div': {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: '20px',
    },
  
  },

})