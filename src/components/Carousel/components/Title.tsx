import React, { type HTMLProps } from 'react'
import { GrSoundcloud } from 'react-icons/gr'
import { composeProps } from '../../../utils/props'
import { Music } from '../types'
import * as styles from '../Carousel.module.scss'

type TitleProps = HTMLProps<HTMLDivElement> & {
  music: Music
  disabled?: boolean
}
export function Title(props: TitleProps) {
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
