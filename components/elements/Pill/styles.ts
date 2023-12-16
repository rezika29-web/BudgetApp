import { StyleSheet } from 'react-native'
import {
  ANOTHER_GRAY,
  COLOR_WHITE,
  MAIN_RED,
  TEXT_GRAY4,
} from '../../../themes/colors'
import { scaleWidth } from '../../../themes/mixins'
import { CAPTION_SEMIBOLD } from '../../../themes/typography'

const styles = StyleSheet.create({
  pillInactive: {
    // minWidth: scaleWidth(95),
    height: 36,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: ANOTHER_GRAY,
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: COLOR_WHITE,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pillActive: {
    // minWidth: scaleWidth(95),
    height: 36,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: MAIN_RED,
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: MAIN_RED,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: { ...CAPTION_SEMIBOLD, color: TEXT_GRAY4 },
  nameActive: { ...CAPTION_SEMIBOLD, color: COLOR_WHITE },
})

export default styles
