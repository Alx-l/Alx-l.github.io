
import React from 'react'

import IconHeader from '../reusableComponents/IconHeader'
import { Warning } from '../svg'
import settings from '../settings'

const { grey } = settings


const ErroPage = () => {
  return (
    <div>
      <IconHeader icon={ Warning } size={ 20 } color={ grey } text='Oops' />
      <div className="Main-textBlock">
        <p>You lost homie?</p>
      </div>
    </div>
  )
}

export default ErroPage