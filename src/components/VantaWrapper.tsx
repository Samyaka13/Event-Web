// components/VantaBackground.tsx
"use client"

import React, { useEffect, useRef, useState } from 'react'
import WAVES from 'vanta/dist/vanta.birds.min'
import * as THREE from 'three'

const VantaBackground = ({ children }: { children: React.ReactNode }) => {
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState<any>(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(WAVES({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x6a00ff,
        shininess: 50,
        waveHeight: 20,
        waveSpeed: 1.2,
        zoom: 0.85
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div ref={vantaRef} className="relative w-full h-screen">
      <div className="absolute inset-0 z-10">
        {children}
      </div>
    </div>
  )
}

export default VantaBackground
