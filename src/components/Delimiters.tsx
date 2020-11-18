import * as React from "react"

import { Divider } from "@material-ui/core"
import theme from "../theme"

type DelimiterProps = {
  length: string,
  thickness?: string,
  color?: string,
  margin?: number | string,
}

export const VerticalDelimiter = (props: DelimiterProps) => {
  const { length, color, thickness, margin } = props

  return (
    <Divider
      orientation='vertical'
      style={{
        height: length,
        width: thickness || '1px',
        backgroundColor: color || undefined,
        margin: margin || theme.spacing(0, 1)
      }}
    />
  )
}

export const HorizontalDelimiter = (props: DelimiterProps) => {
  const { length, color, thickness, margin } = props

  return (
    <Divider
      orientation='horizontal'
      style={{
        height: thickness || '1px',
        width: length,
        backgroundColor: color || undefined,
        margin: margin || undefined
      }}
    />
  )
}
