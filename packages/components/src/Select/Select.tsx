import ReactSelect from 'react-select'
import type { GroupBase, StylesConfig, Props } from 'react-select'
import { useTheme } from '@emotion/react'
import { DropdownIndicator } from './DropdownIndicator'
import { SelectOption } from './Option'

export const Select = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: Props<Option, IsMulti, Group> & {
    variant?: string
  },
) => {
  /**
   * TODO: Use type exported by Platform themes.
   */
  const theme = useTheme() as {
    fontSizes: number[]
    colors: {
      softblue: string
      background: string
      blue: string
      black: string
      white: string
      softgrey: string
      grey: string
    }
  }

  const SelectStyles: StylesConfig = {
    container: (provided) => ({
      ...provided,
      fontSize: theme.fontSizes[2] + 'px',
      fontFamily: '"Varela Round", Arial, sans-serif',
    }),
    control: (provided) => ({
      ...provided,
      border: '1px solid ' + theme.colors.softblue,
      backgroundColor: theme.colors.background,
      minHeight: '40px',
      boxShadow: 'none',
      ':focus': {
        border: '1px solid ' + theme.colors.blue,
        outline: 'none',
      },
      ':hover': {
        border: '1px solid ' + theme.colors.blue,
      },
    }),

    option: (provided) => ({
      ...provided,
      backgroundColor: theme.colors.background,
      boxShadow: 'none',
      color: theme.colors.black,
      ':hover': {
        outline: 'none',
        backgroundColor: theme.colors.white,
        color: theme.colors.black,
      },
    }),

    menu: (provided) => ({
      ...provided,
      border: '1px solid ' + theme.colors.softblue,
      boxShadow: 'none',
      backgroundColor: theme.colors.background,
      ':hover': {
        border: '1px solid ' + theme.colors.softblue,
      },
    }),

    multiValue: (provided) => ({
      ...provided,
      backgroundColor: theme.colors.softblue,
      padding: '2px',
      border: '1px solid ' + theme.colors.softgrey,
      color: theme.colors.grey,
    }),

    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),

    dropdownIndicator: (provided, state) => ({
      ...provided,
      ':hover': {
        opacity: state.isFocused ? 1 : 0.5,
      },
      opacity: state.isFocused ? 1 : 0.3,
    }),
  }

  const FilterStyles: StylesConfig = {
    container: (provided) => ({
      ...provided,
      fontSize: theme.fontSizes[2] + 'px',
      fontFamily: '"Varela Round", Arial, sans-serif',
      border: '2px solid ' + theme.colors.black,
      borderRadius: '5px',
      color: theme.colors.black,
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: theme.colors.white,
      minHeight: '40px',
      boxShadow: 'none',
      ':hover': {
        border: '1px solid ' + theme.colors.blue,
      },
      ':focus': {
        border: '1px solid ' + theme.colors.blue,
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: theme.colors.black,
    }),
    option: (provided) => ({
      ...provided,
      color: theme.colors.black,
      backgroundColor: theme.colors.white,
      boxShadow: 'none',
      ':hover': {
        outline: 'none',
        backgroundColor: theme.colors.softblue,
        color: theme.colors.black,
      },
    }),

    menu: (provided) => ({
      ...provided,
      border: '2px solid ' + theme.colors.black,
      boxShadow: 'none',
      backgroundColor: theme.colors.white,
      ':hover': {
        border: '2px solid ' + theme.colors.black,
      },
    }),

    multiValue: (provided) => ({
      ...provided,
      backgroundColor: theme.colors.softblue,
      padding: '2px',
      border: '1px solid ' + theme.colors.black,
      color: theme.colors.grey,
    }),

    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),

    valueContainer: (base) => ({
      ...base,
      flexWrap: 'nowrap',
      overflow: 'auto',
    }),
  }

  const options = props.options || []
  return (
    <ReactSelect
      classNamePrefix={'data-cy'}
      components={{ DropdownIndicator, Option: SelectOption }}
      {...props}
      styles={props.variant === 'form' ? SelectStyles : FilterStyles}
      options={options}
      value={props.value}
    />
  )
}
