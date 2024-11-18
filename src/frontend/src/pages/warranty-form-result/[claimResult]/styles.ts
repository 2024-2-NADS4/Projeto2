import { styled } from '../../../styles'
import { Main } from '../../carpart-info/[partNumber]/styles'

export const MainResult = styled(Main, {
  height: '100vh',
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  'p': {
    textAlign: 'center'
  }
})

