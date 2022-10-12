import React from 'react'

import { useSvgUrl } from '../../components/SVG/hooks'
import { Player } from '../../components/Player'
import { BottomBar } from '../../components/BottomBar'
import { Carousel } from '../../components/Carousel'
import { Introduction } from '../Introduction'
import { useMusicsQuery } from './useMusicsQuery'
import * as styles from './HomePage.module.scss'

export function HomePage() {
  const link = useSvgUrl('page-background-scalable')

  const musics = useMusicsQuery()
  return (
    <div className={styles.container}>
      <div className={styles.backgroundContainer}>
        <img src={link} alt="Background" className={styles.background} />
      </div>
      <div className={styles.intro}>
        <Introduction />
        <Carousel musics={musics} />
      </div>
      <Player />
      <BottomBar />
    </div>
  )
}
