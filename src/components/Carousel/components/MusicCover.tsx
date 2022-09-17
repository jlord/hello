import React, { type HTMLProps } from 'react'
import { composeProps } from '../../../utils/props'
import { SVG } from '../../../components/SVG'
import { Video } from '../../../components/Video'
import { useBackgroundImage, useImage } from '../../../utils/hooks/useImage'
import { useVideo } from '../../../utils/hooks/useVideo'
import { Music } from '../types'
import * as styles from '../Carousel.module.scss'

type MusicCoverProps = HTMLProps<HTMLDivElement> & {
  music: Music
}
export function MusicCover(props: MusicCoverProps) {
  const { music } = props
  const htmlProps = composeProps(props, ['children', 'ref'], [styles.frame])
  const videoURL = useVideo(music.video as any)

  if (music.toRelease) {
    return (
      <div {...htmlProps}>
        <SVG icon="music-background" className={styles.frameBackground} />
        <div
          data-entity="cover"
          style={useBackgroundImage(useImage('album-cover') as string)}
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
        style={useBackgroundImage(useImage('album-cover') as string)}
        className={styles.cover}
      >
        <Video src={videoURL} />
      </div>
    </div>
  )
}
