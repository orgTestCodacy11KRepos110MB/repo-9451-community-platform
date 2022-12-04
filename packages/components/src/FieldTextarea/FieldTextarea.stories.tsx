import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { Field, Form } from 'react-final-form'
import { FieldTextarea } from './FieldTextarea'

export default {
  title: 'Components/FieldTextarea',
  component: FieldTextarea,
} as ComponentMeta<typeof FieldTextarea>

export const Default: ComponentStory<typeof FieldTextarea> = () => (
  <Form
    onSubmit={(v) => console.log(v)}
    render={() => (
      <Field
        name="default"
        component={FieldTextarea}
        placeholder="Text area input"
      />
    )}
  />
)

export const WithoutResizeHandle: ComponentStory<typeof FieldTextarea> = () => (
  <Form
    onSubmit={(v) => console.log(v)}
    render={() => (
      <Field
        name="default"
        component={FieldTextarea}
        placeholder="Text area input"
        sx={{ resize: 'none' }}
      />
    )}
  />
)

export const WithError: ComponentStory<typeof FieldTextarea> = () => (
  <Form
    onSubmit={(v) => console.log(v)}
    render={() => (
      <Field
        name="default"
        component={FieldTextarea}
        placeholder="Text area input"
        meta={{ error: 'What an error', touched: true }}
      />
    )}
  />
)
