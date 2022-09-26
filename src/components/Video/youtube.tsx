import React, { type HTMLProps } from 'react'
import { composeProps } from '../../utils/props'
import * as styles from './youtube.module.scss'

type YoutubeProps = {
  videoId?: string
} & HTMLProps<HTMLDivElement>

export function Youtube(props: YoutubeProps) {
  const { videoId = 'fiGuXsvy69E' } = props
  const htmlProps = composeProps(props, ['videoId'], [styles.container])

  return (
    <div {...htmlProps}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?controls=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
      ></iframe>
    </div>
  )
}
