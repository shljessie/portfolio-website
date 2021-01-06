import React from "react"
import { Grid } from "@material-ui/core"

export type ResponsiveGridProps = {
  children: React.ReactNode
}

export const ResponsiveGrid = (props: ResponsiveGridProps) => {
  const { children } = props

  return (
    <Grid item xs={12} sm={6} md={4}>
      {children}
    </Grid>
  )
}
