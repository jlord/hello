import React, { type HTMLProps } from 'react'
import { composeProps } from '../../../utils/props'
import { SVG } from '../../../components/SVG'
import { Youtube } from '../../../components/Video/youtube'
import { useBackgroundImage, useImage } from '../../../utils/hooks/useImage'
import { Music } from '../types'
import * as styles from '../Carousel.module.scss'

type MusicCoverProps = HTMLProps<HTMLDivElement> & {
  music: Music
}
export function MusicCover(props: MusicCoverProps) {
  const { music } = props
  const htmlProps = composeProps(props, ['children', 'ref'], [styles.frame])
  const backgroundImage = useImage('album-cover')

  if (music.toRelease) {
    return (
      <div {...htmlProps}>
        <SVG icon="music-background" className={styles.frameBackground} />
        <div
          data-entity="cover"
          style={useBackgroundImage(backgroundImage as string)}
          className={styles.cover}
        >
          <div className={styles.buttonOverlay}>
            <span className={styles.soon}>Soon</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div {...htmlProps}>
      <SVG icon="music-background" className={styles.frameBackground} />
      <div
        data-entity="cover"
        style={useBackgroundImage(backgroundImage as string)}
        className={styles.cover}
      >
        <Youtube videoId={music.video} />
      </div>
    </div>
  )
}
