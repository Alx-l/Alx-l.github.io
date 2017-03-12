
import React from 'react'

import IconHeader from '../reusableComponents/icon-header'
import { Warning } from '../svg'
import settings from '../settings'

const { grey } = settings


const ErrorPage = () => {
  return (
    <div>
      <IconHeader icon={ Warning } size={ 20 } color={ grey } text="Oops" />
      <div className="l-textBlock">
        <p>You lost homie?</p>
      </div>
    </div>
  )
}

export default ErrorPage