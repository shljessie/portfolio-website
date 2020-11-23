import { DefaultInnerRootCont, DefaultOuterRootCont }  from '../components/Containers'
import Dropzone, { IDropzoneProps, ILayoutProps } from 'react-dropzone-uploader'
import { HEADER_HEIGHT, MAX_WIDTH } from "../constants/GlobalStyles"

import FilledButton from "../components/Buttons"
import React from 'react'
import UserHeader from '../layout/UserHeader'
import { makeStyles } from "@material-ui/core/styles"
import theme from "../theme"

const useStyles = makeStyles(theme => ({
  innerRoot :{
    display:'flex',
    justifyContent: 'center'
  },
  uploadbox: {
    margin: 'auto',
    justifyContent: 'center'
  }
}))

const Layout = ({ input, previews, submitButton, dropzoneProps, files, extra: { maxFiles } }: ILayoutProps) => {

  const classes = useStyles()
  return (
    <div className={classes.uploadbox}>
      {previews}
      <div {...dropzoneProps}>{files.length < maxFiles && input}</div>
      {files.length > 0 && submitButton}
    </div>
  )
}

const UploadVideo = () => {
  const classes = useStyles()
  const getUploadParams: IDropzoneProps['getUploadParams'] = () => ({ url: 'https://httpbin.org/post' })

  const handleSubmit: IDropzoneProps['onSubmit'] = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  return (
    <>
    <UserHeader />
    <DefaultOuterRootCont>
      <DefaultInnerRootCont className={classes.innerRoot}>
        <Dropzone
          getUploadParams={getUploadParams}
          LayoutComponent={Layout}
          onSubmit={handleSubmit}
          inputContent="Drop Files (Custom Layout)"
        />
      </DefaultInnerRootCont>
    </DefaultOuterRootCont>
    </>
  )
}

export default UploadVideo;