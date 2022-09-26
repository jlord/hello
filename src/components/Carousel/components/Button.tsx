/* eslint-disable multiline-ternary */
import React, { type HTMLProps, type MouseEventHandler } from 'react'
import { BiChevronRightCircle, BiChevronLeftCircle } from 'react-icons/bi'
import { composeProps } from '../../../utils/props'
import * as styles from '../Carousel.module.scss'

type CarouselButtonProps = HTMLProps<HTMLButtonElement> & {
  type: 'previous' | 'next'
}
export function CarouselButton(props: CarouselButtonProps) {
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
