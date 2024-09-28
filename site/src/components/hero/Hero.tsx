import styles from '../../components/hero/Hero.module.css'

const Hero = () => {
  return (
    <section id='home' className={styles.heroContainer}>
        <header>
          <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#service">Serviços</a></li>
            <li><a href="#projects">Recentes</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </header>
        
          <div className={styles.heroContent}>
            <h2 className={styles.titleLa}>La</h2>
            <h2 className={styles.titleCerimonial}>Cerimonial</h2>
            <button><a href="#contact">CONTATE-NOS</a></button>
          </div>
    </section>
  )
}

export default Hero