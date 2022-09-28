/* eslint-disable multiline-ternary */
import React, { type HTMLProps, useRef, MutableRefObject } from 'react'
import { composeProps } from '../../utils/props'
import { Title } from './components/Title'
import { MusicCover } from './components/MusicCover'
import { CarouselSideArea } from './components/SideArea'
import { CarouselButton } from './components/Button'
import { type Music } from './types'
import { useCarouselReducer } from './reducer'
import * as styles from './Carousel.module.scss'

type CarouselProps = HTMLProps<HTMLDivElement> & {
  musics: Music[]
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
            onClick={() => {
              dispatcher('PREVIOUS')
            }}
          />
        </div>
      </CarouselSideArea>

      <div data-entity="currentMusic" className={styles.current} id="currentMusic">
        <Title music={currentMusic} />
        <MusicCover
          music={currentMusic}
          key={currentMusic.name + currentMusic.album}
        />
      </div>

      <CarouselSideArea type="next">
        {state.enableNextButton ? (
          <Title disabled music={state.musics[nextMusicIndex]} />
        ) : (
          ''
        )}
        <div data-entity="button" className={styles.carouselAreaContent}>
          <CarouselButton
            type="next"
            disabled={!state.enableNextButton}
            onClick={() => {
              dispatcher('NEXT')
            }}
          />
        </div>
      </CarouselSideArea>
    </div>
  )
}
