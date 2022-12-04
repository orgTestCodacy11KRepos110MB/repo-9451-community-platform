import { Input, Text } from 'theme-ui'
import type { FieldRenderProps } from 'react-final-form'
import type { ChangeEvent } from 'react'

// any props can be passed to field and down to child component
// input and meta props come from react field render props and will be
// picked up by typing
type FieldProps = FieldRenderProps<unknown, HTMLElement>

export interface Props extends FieldProps {
  // additional fields intending to pass down
  disabled?: boolean
  children?: React.ReactNode
  'data-cy'?: string
  customOnBlur?: (event: ChangeEvent) => void
  customChange?: (location: ChangeEvent) => void
}

export const FieldDatepicker = ({
  input,
  meta,
  customChange,
  ...rest
}: Props) => {
  return (
    <>
      <Input
        type="date"
        variant={meta.error && meta.touched ? 'error' : 'input'}
        {...input}
        {...rest}
        onChange={(date) => {
          input.onChange(date)
          if (customChange) {
            customChange(date)
          }
          input.onBlur()
        }}
      />
      {meta.error && meta.touched ? (
        <Text sx={{ fontSize: 0, margin: 1, color: 'error' }}>
          {meta.error}
        </Text>
      ) : null}
    </>
  )
}
