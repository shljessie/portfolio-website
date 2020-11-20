import { LayoutRootCont, PageTitleCont } from "../components/Containers"

import Layout from "../components/layout"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {}
}))

const PageTemplate = (props: Props) => {
  const {} = props

  const classes = useStyles()

  return (
    <Layout>
      <LayoutRootCont>
        <PageTitleCont>
          Helloe
        </PageTitleCont>
      </LayoutRootCont>
    </Layout>
  )
}

type Props = {}

export default PageTemplate
