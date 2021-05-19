import React, { useContext } from "react"
import { Image, ViewStyle, ImageStyle, TouchableOpacity, TouchableOpacityProps, Platform, Dimensions } from "react-native"
import { observer } from "mobx-react-lite"
import { ThemeContext } from "../../contexts"
import { color } from "../../theme"
import HapticFeedback from "react-native-haptic-feedback"

const upDownArrowIcon = require("../../../assets/up-down-arrow.png")

const { height: deviceHeight } = Dimensions.get("screen")

let buttonSize = 62.5
let iconSize = 32.5

if (deviceHeight > 730) {
  buttonSize = 70
  iconSize = 35
}

const ARROW_ICON: ImageStyle = {
  width: Platform.select({ ios: iconSize, android: iconSize + 2.5 }),
  height: Platform.select({ ios: iconSize, android: iconSize + 2.5 }),
  tintColor: "#fff",
}

export interface ChangeDirectionButtonProps extends TouchableOpacityProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
}

/**
 * Describe your component here
 */
export const ChangeDirectionButton = observer(function ChangeDirectionButton(props: ChangeDirectionButtonProps) {
  const { theme } = useContext(ThemeContext)
  const { onPress, style } = props

  const CONTAINER: ViewStyle = {
    width: buttonSize,
    height: buttonSize,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: theme.secondary,
    shadowOffset: { width: 0, height: 0.5 },
    shadowColor: color.palette.black,
    shadowRadius: 0.4,
    shadowOpacity: 0.5,
    elevation: 2,
  }

  return (
    <TouchableOpacity
      style={[CONTAINER, style]}
      activeOpacity={onPress ? 0.9 : 1}
      onPress={(e) => {
        if (onPress) {
          HapticFeedback.trigger("impactMedium")
          onPress(e)
        }
      }}
      accessibilityLabel="החלפת תחנות"
      accessibilityHint="קיצור דרך להחלפת תחנת המוצא עם תחנת היעד"
    >
      <Image source={upDownArrowIcon} style={ARROW_ICON} />
    </TouchableOpacity>
  )
})
