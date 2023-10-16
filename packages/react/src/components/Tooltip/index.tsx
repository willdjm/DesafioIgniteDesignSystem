import { ComponentProps, ReactNode } from 'react'
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipRoot,
  TooltipTrigger,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  trigger: ReactNode
  content: string
}

export function Tooltip({ trigger, content, ...props }: TooltipProps) {
  return (
    <TooltipRoot delayDuration={250}>
      <TooltipTrigger asChild>{trigger}</TooltipTrigger>
      <TooltipPortal>
        <TooltipContent {...props}>
          <span>{content}</span>
          <TooltipArrow />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  )
}

Tooltip.displayName = 'Tooltip'
