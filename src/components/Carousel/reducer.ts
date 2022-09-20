import { useReducer, type MutableRefObject } from 'react'
import { type Music } from './types'

export type Message =
  | 'NEXT'
  | 'PREVIOUS'
  | 'NEXT_ANIMATION_ENDED'
  | 'PREVIOUS_ANIMATION_ENDED'
type AnimationState = 'ANIMATING_NEXT' | 'STATIC' | 'ANIMATING_PREVIOUS'
type Store = {
  animationState: AnimationState
  currentMusicIndex: number
  enableNextButton: boolean
  enablePreviousButton: boolean
  musics: Music[]
}

function reducer(state: Readonly<Store>, message: Message) {
  const newState = { ...state }
  switch (message) {
    case 'NEXT':
      newState.animationState = 'ANIMATING_NEXT'
      newState.currentMusicIndex = state.currentMusicIndex + 1
      newState.enableNextButton =
        newState.currentMusicIndex + 1 < state.musics.length
      newState.enablePreviousButton = newState.currentMusicIndex > 0
      break
    case 'PREVIOUS':
      newState.animationState = 'ANIMATING_PREVIOUS'
      newState.currentMusicIndex = state.currentMusicIndex - 1
      newState.enableNextButton =
        newState.currentMusicIndex + 1 < state.musics.length
      newState.enablePreviousButton = newState.currentMusicIndex > 0
      break
    case 'NEXT_ANIMATION_ENDED':
      newState.animationState = 'STATIC'
      break
    case 'PREVIOUS_ANIMATION_ENDED':
      newState.animationState = 'STATIC'
      break
  }

  return newState
}

export function useCarouselReducer(
  musics: Music[],
  containerRef: MutableRefObject<HTMLDivElement>
): [Store, (message: Message) => void] {
  const defaultState: Store = {
    animationState: 'STATIC',
    currentMusicIndex: 0,
    enableNextButton: musics.length > 1,
    enablePreviousButton: false,
    musics
  }

  const [state, dispatch] = useReducer(reducer, defaultState)
  const wrappedDispatcher = (message: Message) => {
    /*
      The code below enables the use of animation states.
      if (message === 'NEXT' || message === 'PREVIOUS') {
        dispatch(message)
        containerRef.current.addEventListener(
          'animationend',
          () => {
            dispatch(
              message === 'NEXT'
                ? 'NEXT_ANIMATION_ENDED'
                : 'PREVIOUS_ANIMATION_ENDED'
            )
          },
          { once: true }
        )
      } else {
        dispatch(message)
      }
    */

    dispatch(message)
  }

  return [state, wrappedDispatcher]
}
