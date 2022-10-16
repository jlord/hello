import * as React from 'react'
import '../styles/global.scss'
import { IntroAnimation } from '../templates/IntroAnimation'

// export default function Page() {
//   return (
//     <div
//       style={{
//         display: 'grid',
//         placeItems: 'center',
//         position: 'relative',
//         width: '100vw',
//         height: '100vh',
//         overflow: 'hidden'
//       }}
//     >
//       <DiagonalTransition />
//     </div>
//   )
// }

export default function Page() {
  return (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      <IntroAnimation />
    </div>
  )
}
