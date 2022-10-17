import React, { HTMLProps } from 'react'
import Lottie from 'lottie-react'

import { composeProps } from '../../../utils/props'
import animation from '../../../misc/animation.json'

import * as styles from './Helmet.module.scss'

type HelmetProps = HTMLProps<HTMLDivElement>

export function Helmet(props: HelmetProps) {
  const htmlProps = composeProps(props, ['children'], [styles.container])

  return (
    <div {...htmlProps}>
      <Lottie animationData={animation} loop={false} onComplete={props.onAnimationEnd} />
    </div>
  )
}
