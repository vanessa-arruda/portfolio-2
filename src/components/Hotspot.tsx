import { motion } from 'framer-motion'
import type { HotspotDef } from '../data/hotspots'
import styles from './Hotspot.module.css'

interface HotspotProps {
  hotspot: HotspotDef
  onClick: (id: string) => void
}

function Hotspot({ hotspot, onClick }: HotspotProps) {
  const { id, label, left, top, width, height } = hotspot

  return (
    <motion.div
      className={styles.hotspot}
      style={{ left, top, width, height }}
      whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
      transition={{ duration: 0.2 }}
      onClick={() => onClick(id)}
      title={label}
    />
  )
}

export default Hotspot
