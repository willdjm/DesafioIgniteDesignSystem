import { Button, Toast, ToastProps, ToastProvider } from '@will-ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Form/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    title: 'Desafio Concluído',
    content: '16 de Outubro de 2023 às 08h',
  },
  decorators: [
    (_, { allArgs }) => {
      const [open, setOpen] = useState(false)

      const ToggleToast = (newState: boolean) => {
        setOpen(newState)
      }

      return (
        <ToastProvider>
          <Button variant="primary" size="sm" onClick={() => ToggleToast(true)}>
            Acionar Toast
          </Button>
          <Toast {...allArgs} open={open} onOpenChange={ToggleToast} />
        </ToastProvider>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
