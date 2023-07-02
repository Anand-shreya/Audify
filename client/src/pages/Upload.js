import React from 'react'
import Up from '../Icons/Up.png'
import UploadIcon from '../Icons/uploadIcon.jpg'
import Load from '../components/Load'


const Upload = () => {
  return (
      <Load headImg={Up} centerImg={UploadIcon} title="Upload Video"/>
  )
}

export default Upload