import { useRef, useEffect } from 'react'

import './SnakeGame.css'

export default function SnakeGame() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
  }, [])

  return (
    <div className='game-container'>
      <canvas ref={canvasRef} className='game-canvas' />
    </div>
  )
}
