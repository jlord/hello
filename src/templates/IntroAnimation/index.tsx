import React, { type HTMLProps, useState } from 'react'

import { Helmet } from '../../components/Animations/Helmet'
import { composeProps, setCSSInlineStyles } from '../../utils/props'
import { DiagonalTransition } from './DiagonalTransition'
import * as styles from './Intro.module.scss'

type IntroAnimationProps = HTMLProps<HTMLDivElement>
type IntroAnimationStages = 'helmet' | 'fadingHelmet' | 'transition' | 'end'

export function IntroAnimation(props: IntroAnimationProps) {
  const [state, setState] = useState<IntroAnimationStages>('helmet')
  const htmlProps = composeProps(
    props,
    ['children'],
    [
      styles.container,
      state === 'transition' ? styles.fadeBackgroundAnimation : ''
    ]
  )
  setCSSInlineStyles(htmlProps, {
    '--animation-duration-background': '2s',
    '--animation-duration-block': '2s'
  })

  // Transition callbacks
  const fadeHelmetCallback = () => setState('fadingHelmet')
  const transitionCallback = () => setState('transition')
  const endCallback = () => setState('end')

  switch (state) {
    case 'end':
      return <></>
    case 'transition':
      return (
        <div {...htmlProps} onAnimationEnd={endCallback}>
          <DiagonalTransition />
        </div>
      )
    default:
      return (
        <div {...htmlProps} onAnimationEnd={transitionCallback}>
          <Helmet
            className={state === 'fadingHelmet' ? styles.fadeAnimation : ''}
            onAnimationEnd={fadeHelmetCallback}
          />
        </div>
      )
  }
}
