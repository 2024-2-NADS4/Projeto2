import { styled } from "@stitches/react";

export const Container = styled("button", {
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
});




