import React, { type HTMLProps, useId, useState } from 'react'
import { composeProps } from '../../utils/props'
import { Overlay } from './components/Overlay'
import * as styles from './Video.module.scss'

type VideoProps = HTMLProps<HTMLDivElement> & {
  src: string
  poster?: string
}

export function Video(props: VideoProps) {
  const { src, poster } = props
  const htmlProps = composeProps(
    props,
    ['children', 'ref', 'src', 'poster'],
    [styles.container]
  )

  const [showOverlay, setOverlay] = useState(true)

  const videoId = useId()
  const toggleVideo = () => {
    const videoElement = document.getElementById(videoId) as HTMLVideoElement
    if (videoElement.paused) {
      setOverlay(false)
      videoElement.play()
    } else {
      setOverlay(true)
      videoElement.pause()
    }
  }

  return (
    <div {...htmlProps} onClick={toggleVideo} ref={props.ref}>
      {showOverlay && <Overlay />}
      <video src={src} id={videoId} poster={poster} />
    </div>
  )
}
