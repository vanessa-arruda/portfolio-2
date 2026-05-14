import styles from './Scene.module.css'

function Scene() {
  return (
    <div className={styles.scene}>
      <picture>
        <source media="(max-width: 768px)" srcSet="/images/office-mobile.png" />
        <img
          className={styles.background}
          src="/images/office-desktop.png"
          alt="Vanessa's office"
        />
      </picture>
    </div>
  )
}

export default Scene
