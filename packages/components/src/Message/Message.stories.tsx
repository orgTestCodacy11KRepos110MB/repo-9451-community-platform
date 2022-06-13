import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { Message } from 'theme-ui'

export default {
  title: 'Base Components/Message',
  component: Message,
} as ComponentMeta<typeof Message>

export const Default: ComponentStory<typeof Message> = () => (
  <Message variant="highlight">
    A message is meant to be read and will be highlighted. These blocks can also contain <a href="#">links</a>
  </Message>
)

export const Info: ComponentStory<typeof Message> = () => (
  <Message variant="info">
    A message may be less important, so we have an <b>info</b> variant. These blocks can also contain <a href="#">links</a>.
  </Message>
)
