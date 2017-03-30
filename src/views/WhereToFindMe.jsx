
import React from 'react'

import IconHeader from 'reusableComponents/iconHeader'
import ToolTip from 'reusableComponents/tooltip'
import Icon from 'reusableComponents/icon'
import { PersonPin, Github } from 'svg'
import settings from 'settings'

const { email, grey } = settings


const WhereToFindMe = () => {
  return (
    <div className="v-wheretofindme">
      <IconHeader icon={ PersonPin } size={ 20 } color={ grey } text="Finding me" />
      <div className="l-textBlock--sm">
        <p>You can find me wandering in the streets of
        <ToolTip hiddenText="FR, not TX :)"> Paris.</ToolTip>
        </p>
        <p>But since that could take a while before you randomly bump into me, feel free to send me an email :
          <br/>
          <a className="v-wheretofindme-email" href={ `mailto:${email}` }>{ email }</a>
        </p>
        <span>Wanna take a peek at my repos ?</span>
        <br/>
        <a href="https://github.com/Alx-l" target="_blank" className="btn-icon">
          <Icon svg={ Github } color="#fff" size={ 35 } customStyle={{ display: 'block' }}/>
        </a>
        <p>My
          <a href="https://gist.github.com/Alx-l" target="_blank">
            <span className="u-highlight u-linkSweep"> Gists </span>
          </a>
          maybe ?
        </p>
      </div>
    </div>
  )
}

export default WhereToFindMe
