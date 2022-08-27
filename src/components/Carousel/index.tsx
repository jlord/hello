/* eslint-disable multiline-ternary */
import React, {
  type HTMLProps,
  useRef,
  MutableRefObject,
  type MouseEventHandler
} from 'react'
import { GrSoundcloud } from 'react-icons/gr'
import { BiChevronRightCircle, BiChevronLeftCircle } from 'react-icons/bi'
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
  disabled?: boolean
}
function Title(props: TitleProps) {
  const { music, disabled = false } = props
  const htmlProps = composeProps(
    props,
    ['children', 'ref', 'music', 'disabled'],
    [styles.title, disabled ? styles.disabled : '']
  )

  if (music.toRelease) {
    return (
      <div {...htmlProps}>
        <div className={styles.album}>Release soon</div>
        <div className={styles.musicName}>{music.name}</div>
      </div>
    )
  }

  return (
    <div {...htmlProps}>
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

type CarouselSideAreaProps = HTMLProps<HTMLDivElement> & {
  type: 'previous' | 'next'
}
function CarouselSideArea(props: CarouselSideAreaProps) {
  const { children, type } = props
  const htmlProps = composeProps(
    props,
    ['children', 'ref', 'type'],
    [type === 'previous' ? styles.previous : styles.next]
  )

  return <div {...htmlProps}>{children}</div>
}

type CarouselButtonProps = HTMLProps<HTMLButtonElement> & {
  type: 'previous' | 'next'
}
function CarouselButton(props: CarouselButtonProps) {
  const { type, onClick, disabled } = props
  const htmlProps = composeProps(
    props,
    ['children', 'ref', 'type', 'onClick'],
    [styles.carouselButton]
  )

  const icon =
    type === 'previous' ? (
      <BiChevronLeftCircle className={styles.icon} />
    ) : (
      <BiChevronRightCircle className={styles.icon} />
    )

  const clickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (!disabled) {
      ;(onClick ?? (() => {}))(e)
    }
  }

  return (
    <button {...htmlProps} onClick={clickHandler}>
      {icon}
    </button>
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
      <CarouselSideArea type="previous">
        {state.enablePreviousButton ? (
          <Title disabled music={state.musics[previousMusicIndex]} />
        ) : (
          ''
        )}
        <div data-entity="button" className={styles.carouselAreaContent}>
          <CarouselButton
            type="previous"
            disabled={!state.enablePreviousButton}
          />
        </div>
      </CarouselSideArea>

      <div data-entity="currentMusic" className={styles.current}>
        <Title music={currentMusic} />
        <MusicCover music={currentMusic} />
      </div>

      <CarouselSideArea type="next">
        {state.enableNextButton ? (
          <Title disabled music={state.musics[nextMusicIndex]} />
        ) : (
          ''
        )}
        <div data-entity="button" className={styles.carouselAreaContent}>
          <CarouselButton type="next" disabled={!state.enableNextButton} />
        </div>
      </CarouselSideArea>
    </div>
  )
}
