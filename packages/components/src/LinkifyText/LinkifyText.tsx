import Linkify from 'linkify-react'
import 'linkify-plugin-mention'
import { BaseStyles, ThemeProvider } from 'theme-ui'

export interface Props {
  children?: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const LinkifyText = (props: Props) => {
  return (
    <ThemeProvider
      theme={{
        styles: {
          a: {
            color: 'grey',
            textDecoration: 'underline',
          },
        },
      }}
    >
      <Linkify
        options={{
          formatHref: {
            mention: (href: string) => '/u' + href,
          },
          target: '_blank',
        }}
      >
        <BaseStyles>{props.children}</BaseStyles>
      </Linkify>
    </ThemeProvider>
  )
}
