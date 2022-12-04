/** @jsxImportSource theme-ui */
import type { Result } from './OsmGeocoding'

export interface Props {
  results: Result[]
  callback?: (arg: Result) => void
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>
}

export const OsmGeocodingResultsList = (props: Props) => {
  const { results, callback, setShowResults } = props
  return (
    <ul
      data-cy="osm-geocoding-results"
      sx={{
        background: 'white',
        padding: 0,
        position: 'relative',
        zIndex: 1,
        margin: '-2px 0 0',
        border: `2px solid black`,
        borderTopWidth: '1px',
        listStyle: 'none',
        borderRadius: 0,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
      }}
    >
      {results.map((result: Result, index: number) => (
        <li
          sx={{
            paddingY: 1,
            paddingX: 2,
            lineHeight: 1.5,
            '&:hover': {
              background: 'softblue',
              cursor: 'pointer',
            },
          }}
          key={index}
          onClick={() => {
            setShowResults(false)
            if (callback) {
              callback(result)
            }
          }}
        >
          {result?.display_name}
        </li>
      ))}
    </ul>
  )
}
