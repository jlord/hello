import React, { type HTMLProps } from 'react'
import { setDefaultClasses, filterProps } from '../../utils/props'

import * as styles from './Player.module.scss'

const Embeded = () => (
  <iframe
    width="100%"
    height="120"
    src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FGTO90%2Fapex-sessions-turn-11%2F"
    frameBorder="0"
  ></iframe>
)

type PlayerProps = HTMLProps<HTMLDivElement>
export function Player(props: PlayerProps) {
  const htmlProps = filterProps(props, [])
  setDefaultClasses(htmlProps, [styles.container])

  return (
    <div {...htmlProps}>
      <div className={styles.internalGrid}>
        <h2 className={styles.title}>Listen to my new mix</h2>
        <Embeded />
      </div>
    </div>
  )
}
