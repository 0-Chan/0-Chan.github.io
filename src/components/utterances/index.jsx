import React, { useEffect } from 'react'

import * as Dom from '../../utils/dom'
import { THEME } from '../../constants'

const src = 'https://utteranc.es/client.js'
const branch = 'main'
const DARK_THEME = 'github-dark-orange'
const LIGHT_THEME = 'boxy-light'

export const Utterances = ({ repo }) => {
  const rootElm = React.createRef()

  useEffect(() => {
    const isDarkTheme = Dom.hasClassOfBody(THEME.DARK)
    const utterances = document.createElement('script')
    const utterancesConfig = {
      src,
      repo,
      branch,
      theme: isDarkTheme ? DARK_THEME : LIGHT_THEME,
      label: 'comment',
      async: true,
      'issue-term': 'title',
      crossorigin: 'anonymous',
    }

    Object.keys(utterancesConfig).forEach(configKey => {
      utterances.setAttribute(configKey, utterancesConfig[configKey])
    })
    rootElm.current.appendChild(utterances)
  }, [])

  return <div className="utterances" ref={rootElm} />
}
