import React from 'react'

import { useBackgroundImage } from '../../utils/hooks/useImage'
import { useSvgUrl } from '../../components/SVG/hooks'
import { Player } from '../../components/Player'
import { BottomBar } from '../../components/BottomBar'
import { Introduction } from '../Introduction'
import * as styles from './HomePage.module.scss'

export function HomePage() {
  const link = useSvgUrl('page-background-scalable')
  const background = useBackgroundImage(link)
  return (
    <div className={styles.container} style={background}>
      <div className={styles.intro}>
        <Introduction />
      </div>
      <Player />
      <BottomBar />
    </div>
  )
}
