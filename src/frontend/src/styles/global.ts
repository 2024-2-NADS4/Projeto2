import { globalCss } from '.'

export const globalStyles = globalCss({
 '*': {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  fontFamily: 'Inter, sans-serif',
},

  body: {
    backgroundColor: '#03213D',
    '-webkit-font-smoothing': 'antialiased',
  },
})
