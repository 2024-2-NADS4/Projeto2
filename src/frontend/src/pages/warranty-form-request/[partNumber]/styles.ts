import { styled } from '../../../styles'
import { Main } from '../../carpart-info/[partNumber]/styles'

export const Container = styled(Main, {
  height: '100vh',
  width: '100%',
})

export const Form = styled('form', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '22px',

  'button': {
    marginTop: '10px'
  }
})

