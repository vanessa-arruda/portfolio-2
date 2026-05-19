import { useState, useEffect } from 'react'
import type { CSSProperties } from 'react'
import styles from './WindowOverlay.module.css'

export type WeatherState = 'sunny' | 'rain' | 'snow' | 'autumnSunny' | 'autumnRain' | 'night' | 'nightRain'

const weatherFiles: Record<WeatherState, string> = {
  sunny:       '/images/windows/window-sunny.png',
  rain:        '/images/windows/window-rain.png',
  snow:        '/images/windows/window-snow.png',
  autumnSunny: '/images/windows/window-autumn-sunny.png',
  autumnRain:  '/images/windows/window-autumn-rain.png',
  night:       '/images/windows/window-night.png',
  nightRain:   '/images/windows/window-night-rain.png',
}

const IMG_W = 1792
const IMG_H = 1024
// Window glass position in the illustration's natural pixels (calibrated at 1877×1009)
const WIN_X = 0
const WIN_Y = 80
const WIN_W = 366
const WIN_H = 511

function computePos(): CSSProperties {
  const vpW = window.innerWidth
  const vpH = window.innerHeight
  const scale = Math.max(vpW / IMG_W, vpH / IMG_H)
  const offsetX = (vpW - IMG_W * scale) / 2
  const offsetY = (vpH - IMG_H * scale) / 2
  return {
    left:   `${((WIN_X * scale + offsetX) / vpW * 100).toFixed(2)}%`,
    top:    `${((WIN_Y * scale + offsetY) / vpH * 100).toFixed(2)}%`,
    width:  `${(WIN_W * scale / vpW * 100).toFixed(2)}%`,
    height: `${(WIN_H * scale / vpH * 100).toFixed(2)}%`,
  }
}

interface WindowOverlayProps {
  weather: WeatherState
}

function WindowOverlay({ weather }: WindowOverlayProps) {
  const [pos, setPos] = useState<CSSProperties>(computePos)

  useEffect(() => {
    function update() { setPos(computePos()) }
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div
      className={styles.window}
      style={{
        ...pos,
        backgroundImage: `url(${weatherFiles[weather]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  )
}

export default WindowOverlay
