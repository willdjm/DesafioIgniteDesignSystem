import * as RadixToast from '@radix-ui/react-toast'
import { ComponentProps } from 'react'
import { X } from 'phosphor-react'
import { ToastContainer, ToastViewPort } from './styles'

export interface ToastProps extends ComponentProps<typeof RadixToast.Root> {
  title: string
  content: string
}

export function Toast({
  open,
  onOpenChange,
  title,
  content,
  ...props
}: ToastProps) {
  return (
    <>
      <ToastContainer
        open={open}
        onOpenChange={onOpenChange}
        defaultOpen={true}
        {...props}
        duration={3000}
      >
        <div>
          <RadixToast.Title asChild>
            <h2>{title}</h2>
          </RadixToast.Title>
          <RadixToast.Close asChild>
            <X weight="bold" size={20} />
          </RadixToast.Close>
        </div>
        <RadixToast.Description asChild>
          <span>{content}</span>
        </RadixToast.Description>
      </ToastContainer>

      <ToastViewPort />
    </>
  )
}

Toast.displayName = 'Toast'
