import React, { type HTMLProps } from 'react'
import { composeProps } from '../../../utils/props'
import * as styles from '../Carousel.module.scss'

type CarouselSideAreaProps = HTMLProps<HTMLDivElement> & {
  type: 'previous' | 'next'
}
export function CarouselSideArea(props: CarouselSideAreaProps) {
  const { children, type } = props
  const htmlProps = composeProps(
    props,
    ['children', 'ref', 'type'],
    [type === 'previous' ? styles.previous : styles.next]
  )

  return <div {...htmlProps}>{children}</div>
}
