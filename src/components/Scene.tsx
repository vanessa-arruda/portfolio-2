import { useState } from 'react'
import Hotspot from './Hotspot'
import { hotspots } from '../data/hotspots'
import styles from './Scene.module.css'

function Scene() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null)

  function handleHotspotClick(id: string) {
    console.log('clicked:', id)
    setActiveHotspot(id)
  }

  return (
    <div className={styles.scene}>
      <picture>
        <source media="(max-width: 768px)" srcSet="/images/office-mobile-2.png" />
        <img
          className={styles.background}
          src="/images/office-desktop.png"
          alt="Vanessa's office"
        />
      </picture>

      {hotspots.map(hotspot => (
        <Hotspot
          key={hotspot.id}
          hotspot={hotspot}
          onClick={handleHotspotClick}
        />
      ))}
    </div>
  )
}

export default Scene
