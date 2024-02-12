'use client'

import React from 'react'

export const Forward = React.forwardRef((props, ref) => (
  <span {...props} ref={ref}>
    forward
  </span>
))

export function WrapForward({ onRef }) {
  return <Forward ref={onRef} />
}
