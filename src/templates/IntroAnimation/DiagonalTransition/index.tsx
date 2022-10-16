import React, { type HTMLProps } from 'react'

import { composeProps } from '../../../utils/props'
import * as styles from './DiagonalTransition.module.scss'

type DiagonalTransitionProps = HTMLProps<HTMLDivElement>

export function DiagonalTransition(props: DiagonalTransitionProps) {
  const htmlProps = composeProps(props, ['children'], [styles.container])

  return (
    <div {...htmlProps}>
      <div className={styles.light} />
      <div className={styles.dark} />
    </div>
  )
}
