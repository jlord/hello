import React, { type HTMLProps } from 'react'
import { composeProps } from '../../../utils/props'
import { SVG } from '../../../components/SVG'
import * as styles from './Overlay.module.scss'

type OverlayProps = HTMLProps<HTMLDivElement>

export function Overlay(props: OverlayProps) {
  const htmlProps = composeProps(props, ['children', 'ref'], [styles.overlay])
  return (
    <div {...htmlProps} ref={props.ref}>
      <SVG icon="album-play-button" className={styles.icon} />
    </div>
  )
}
