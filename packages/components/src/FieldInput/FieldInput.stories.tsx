import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { FieldInput } from './FieldInput'
import { Field, Form } from 'react-final-form'

export default {
  title: 'Components/FieldInput',
  component: FieldInput,
} as ComponentMeta<typeof FieldInput>

export const Default: ComponentStory<typeof FieldInput> = () => (
  <Form
    onSubmit={(v) => console.log(v)}
    render={() => <Field name="default" component={FieldInput} />}
  />
)

export const WithError: ComponentStory<typeof FieldInput> = () => (
  <Form
    onSubmit={(v) => console.log(v)}
    render={() => <Field name="default" component={FieldInput} />}
  />
)
