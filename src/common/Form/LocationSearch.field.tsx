import type { FieldProps } from './types'
import { OsmGeocoding } from 'oa-components'
import { logger } from 'src/logger'
import { getLocationData } from 'src/utils/getLocationData'
interface IExtendedFieldProps extends FieldProps {
  // add additional onChange style method to respond more directly to value changes
  // without need for react-final-form listener
  customChange?: (location) => void
}

export const LocationSearchField = ({
  input,
  customChange,
}: IExtendedFieldProps) => (
  <>
    <div style={{ position: 'relative', height: '44px' }}>
      <div style={{ position: 'absolute', width: '100%' }}>
        <OsmGeocoding
          callback={async (data) => {
            logger.debug(data, 'LocationSearch.field.ReactOsmGeocoding')
            if (data.lat && data.lon) {
              const location = await getLocationData({
                lat: parseFloat(data.lat),
                lng: parseFloat(data.lon),
              })

              input.onChange(location)
              if (customChange) {
                customChange(location)
              }
              input.onBlur()
            }
          }}
          countrycodes=""
          acceptLanguage="en"
        />
      </div>
    </div>
  </>
)
