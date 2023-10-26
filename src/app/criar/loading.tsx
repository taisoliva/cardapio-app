'use client'

import { RotatingLines } from 'react-loader-spinner'

export default function loading() {
  return (
    <div className="h-1/2 flex justify-center items-center">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  )
}
