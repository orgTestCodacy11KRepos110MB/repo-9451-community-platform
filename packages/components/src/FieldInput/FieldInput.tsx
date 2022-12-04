import type { ChangeEvent } from 'react'
import type { FieldRenderProps } from 'react-final-form'
import { Text, Input } from 'theme-ui'

type FieldProps = FieldRenderProps<unknown, HTMLElement> & {
  children?: React.ReactNode
}

export interface Props extends FieldProps {
  // additional fields intending to pass down
  value: string | number | readonly string[] | undefined
  disabled?: boolean
  children?: React.ReactNode
  'data-cy'?: string
  customOnBlur?: (event: ChangeEvent) => void
}

type InputModifiers = {
  capitalize?: boolean
}

const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1)

const processInputModifiers = (
  value: string,
  modifiers: InputModifiers = {},
) => {
  if (typeof value !== 'string') return value
  if (modifiers.capitalize) {
    value = capitalizeFirstLetter(value)
  }
  return value
}

export const FieldInput = ({
  input,
  meta,
  disabled,
  modifiers,
  customOnBlur,
  ...rest
}: Props) => {
  return (
    <>
      <Input
        disabled={disabled}
        variant={meta?.error && meta?.touched ? 'textareaError' : 'textarea'}
        {...input}
        {...rest}
        onBlur={(e) => {
          if (modifiers) {
            e.target.value = processInputModifiers(e.target.value, modifiers)
            input.onChange(e)
          }
          if (customOnBlur) {
            customOnBlur(e)
          }
          input.onBlur()
        }}
      />
      {meta.error && meta.touched && (
        <Text sx={{ fontSize: 0, margin: 1, color: 'error' }}>
          {meta.error}
        </Text>
      )}
    </>
  )
}
