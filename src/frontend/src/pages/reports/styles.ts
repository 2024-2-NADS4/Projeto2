import { styled } from '../../styles/index'

import { Wrapper } from "../init/styles";



export const ContentWrapper = styled(Wrapper, {
  height: '100%',
  maxHeight: '680px',
})

export const GraphsContainer = styled('div', {
  marginTop: "20px",
  width: "100%",
  height: '510px',
  overflowY: 'auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '30px',
  
  '&::-webkit-scrollbar': {
    width: '22px',
  },

  '&::-webkit-scrollbar-thumb': {
    boxShadow: 'inset 0 0 10px 10px black',
    border: 'solid 7px transparent',
    borderRadius: '20px',
  },

  'img': {
    width: '100%',
    maxWidth: '750px',
    height: '450px',
    borderRadius: '10px',
  }
})








