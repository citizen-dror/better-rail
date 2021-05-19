import React, { useContext } from "react"
import { TextStyle, TouchableOpacity, ViewStyle, PressableProps } from "react-native"
import { ThemeContext } from "../../contexts"
import { color, spacing, typography } from "../../theme"
import { Text } from "../"

export interface DummyInputProps extends PressableProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle

  /**
   * Text to display when no value is provided
   */
  placeholder: string

  /**
   * A dummy value
   */
  value?: string
}

/**
 * Looks like an input, yet simply a pressable that display the provided text.
 */
export const DummyInput = function DummyInput(props: DummyInputProps) {
  const { placeholder, value, style, ...rest } = props
  const { theme } = useContext(ThemeContext)

  const CONTAINER: ViewStyle = {
    padding: spacing[4],
    backgroundColor: theme.inputBackground,
    borderRadius: 12,
    shadowColor: color.palette.black,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 0,
    elevation: 1,
  }

  const TEXT: TextStyle = {
    fontFamily: typography.primary,
    fontWeight: "500",
    fontSize: 16,
    textAlign: "left",
    color: color.dim,
  }

  return (
    <TouchableOpacity style={[CONTAINER, style]} activeOpacity={0.75} {...rest}>
      <Text style={[TEXT, value && { color: theme.label }]}>{value || placeholder}</Text>
    </TouchableOpacity>
  )
}
