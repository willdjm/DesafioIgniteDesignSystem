import type { StoryObj, Meta } from '@storybook/react'
import { space } from '@will-ignite-ui/tokens'
import {
  Tooltip,
  TooltipProps,
  Button,
  TooltipProvider,
} from '@will-ignite-ui/react'

// Funcina como global para todas as variantes
export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    trigger: <Button variant="secondary">Tooltip</Button>,
    content: 'Desafio concluído',
  },
  argTypes: {
    trigger: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <TooltipProvider>
          <div style={{ padding: space[10] }}>{Story()}</div>
        </TooltipProvider>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
