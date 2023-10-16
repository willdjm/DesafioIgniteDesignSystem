import * as RadixToast from '@radix-ui/react-toast'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'

export interface ToastProviderProps
  extends ComponentProps<typeof RadixToast.Provider> {
  children: ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  return <RadixToast.Provider>{children}</RadixToast.Provider>
}

export interface TooltipProviderProps
  extends ComponentProps<typeof RadixTooltip.Provider> {
  children: ReactNode
}

export function TooltipProvider({ children }: TooltipProviderProps) {
  return <RadixTooltip.Provider>{children} </RadixTooltip.Provider>
}
