import React from 'react'

import { Player } from '../../components/Player'
import { BottomBar } from '../../components/BottomBar'
import { Introduction } from '../Introduction'
import * as styles from './HomePage.module.scss'

export function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <Introduction />
      </div>
      <Player />
      <BottomBar />
    </div>
  )
}
