import styles from '../about/About.module.css'
// import img1 from '../../assets/Laudenice.png'
import img2 from '../../assets/img.png'
import { FaWhatsapp } from "react-icons/fa"
import { TfiEmail } from "react-icons/tfi"
import { PiInstagramLogoLight } from "react-icons/pi"

const About = () => {
  return (
    <section id='about' className={styles.aboutContainer}>

      <div className={styles.aboutContent}>
        
        <div className={styles.imgsContent}>
          {/* <img src={img1}  alt="Foto Laudenice" className={styles.imgFirst}/> */}
          <img src={img2}  alt="Foto decoração" className={styles.imgSecond}/>
        </div>

        <div className={styles.aboutText}>
          <span>Sobre nós</span>
          <h3>QUE BOM TER VOCÊ AQUI, SOMOS A</h3>
          <h3>La Cerimonial</h3>
          <p>Idealizada por Laudenice, a La Cerimonial nasceu com o desejo de facilitar a vida de casais que desejam unir-se em matrimônio. Acreditamos que a jornada da preparação de um casamento deve ser leve, divertida e desde o início, exalar a essência e a personalidade do casal.</p>

          <div className={styles.aboutLinks}>
            <ul>
              <li><a target='blank' href="https://wa.me/5561983025609"><FaWhatsapp /></a></li>
              <li><a target='blank' href="mailto:laupreiss@gmail.com"><TfiEmail /></a></li>
              <li><a target='blank' href="https://www.instagram.com/lacerimoniall/"><PiInstagramLogoLight /></a></li>
            </ul>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About