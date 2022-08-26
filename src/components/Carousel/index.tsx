import React, { type HTMLProps, useRef, MutableRefObject } from 'react'
import { GrSoundcloud } from 'react-icons/gr'
import { useBackgroundImage, useImage } from '../../utils/hooks/useImage'
import { composeProps } from '../../utils/props'
import { SVG } from '../../components/SVG'
import { type Music } from './types'
import { useCarouselReducer } from './reducer'
import * as styles from './Carousel.module.scss'

type CarouselProps = HTMLProps<HTMLDivElement> & {
  musics: Music[]
}

type TitleProps = HTMLProps<HTMLDivElement> & {
  music: Music
}
function Title(props: TitleProps) {
  const { music } = props
  const htmlProps = composeProps(props, ['children', 'ref'], [styles.title])

  return (
    <div {...htmlProps} className={styles.title}>
      <div className={styles.album}>{music.album}</div>
      <div className={styles.musicName}>{music.name}</div>
      <a href={music.link} className={styles.link}>
        Soudcloud <GrSoundcloud />
      </a>
    </div>
  )
}

type MusicCoverProps = HTMLProps<HTMLDivElement> & {
  music: Music
}
function MusicCover(props: MusicCoverProps) {
  const { music } = props
  const htmlProps = composeProps(props, ['children', 'ref'], [styles.frame])

  return (
    <div {...htmlProps}>
      <SVG icon="music-background" className={styles.frameBackground} />
      <div
        data-entity="cover"
        style={useBackgroundImage(useImage('album-cover') as string)}
        className={styles.cover}
      >
        <div className={styles.buttonOverlay}>
          <a href={music.link} className={styles.button}>
            <SVG icon="album-play-button" className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  )
}

export function Carousel(props: CarouselProps) {
  const htmlProps = composeProps(props, ['children', 'ref'], [styles.container])
  const containerRef = useRef(
    null
  ) as unknown as MutableRefObject<HTMLDivElement>
  const [state, dispatcher] = useCarouselReducer(props.musics, containerRef)
  const currentMusic = state.musics[state.currentMusicIndex]
  const previousMusicIndex = state.currentMusicIndex - 1
  const nextMusicIndex = state.currentMusicIndex + 1

  return (
    <div {...htmlProps} ref={containerRef}>
      {state.enablePreviousButton ? (
        <div data-entity="previousMusic">
          <div data-entity="title" />
        </div>
      ) : (
        ''
      )}
      <div data-entity="currentMusic" className={styles.current}>
        <Title music={currentMusic} />
        <MusicCover music={currentMusic} />
      </div>

      {state.enablePreviousButton ? (
        <div data-entity="nextMusic">
          <div data-entity="title" />
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
