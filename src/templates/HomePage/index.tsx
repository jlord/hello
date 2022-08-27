import React from 'react'

import { useBackgroundImage } from '../../utils/hooks/useImage'
import { useSvgUrl } from '../../components/SVG/hooks'
import { Player } from '../../components/Player'
import { BottomBar } from '../../components/BottomBar'
import { Carousel } from '../../components/Carousel'
import { Introduction } from '../Introduction'
import * as styles from './HomePage.module.scss'

export function HomePage() {
  const link = useSvgUrl('page-background-scalable')
  const background = useBackgroundImage(link)

  // For test purposes
  const musics = [
    {
      name: '01. Track 1',
      album: 'Test Album',
      link: '#track1',
      toRelease: false
    },
    {
      name: '02. Track 2',
      album: 'Test Album',
      link: '#track2',
      toRelease: false
    },
    {
      name: '03. Track 3',
      album: 'Test Album',
      link: '#track3',
      toRelease: true
    }
  ]
  return (
    <div className={styles.container} style={background}>
      <div className={styles.intro}>
        <Introduction />
        <Carousel musics={musics} />
      </div>
      <Player />
      <BottomBar />
    </div>
  )
}
