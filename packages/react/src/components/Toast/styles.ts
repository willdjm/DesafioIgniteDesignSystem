import * as Toast from '@radix-ui/react-toast'
import { styled, keyframes } from '../../styles'

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + 24px))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateX(0)',
  },
  to: {
    transform: 'translateX(calc(100% + 24px))',
  },
})

export const ToastContainer = styled(Toast.Root, {
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '$sm',
  padding: '$3 $5',
  width: '320px',
  gap: '$1',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',

    h2: {
      margin: 0,
      color: '$white',
      fontSize: '$xl',
      fontFamily: '$default',
      fontWeight: '$bold',
      lineHeight: '$base',
    },

    svg: {
      color: '$gray200',

      '&:hover': {
        cursor: 'pointer',
        color: '$gray100',
      },
    },
  },

  span: {
    color: '$gray200',
    fontSize: '$sm',
    fontFamily: '$default',
    fontWeight: '$regular',
    lineHeight: '$base',
  },

  '&[data-state="open"]': {
    animation: `${slideIn} 300ms ease`,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 300ms ease`,
  },
})

export const ToastViewPort = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  padding: '$6',
  margin: 0,
  listStyle: 'none',
  zIndex: 999999999,
})
