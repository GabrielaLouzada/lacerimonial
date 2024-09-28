import styles from '../../components/footer/Footer.module.css'
import logo from '../../assets/logoLaCerimonial.png'
import { FaWhatsapp } from "react-icons/fa"
import { TfiEmail } from "react-icons/tfi"
import { PiInstagramLogoLight } from "react-icons/pi"

const Footer = () => {
  return (
    <footer >

        <div className={styles.footerContainer}>

          <a href="/home"><img src={logo} alt="logo" /></a>

          <div className={styles.footerLinks}>
          <ul>
              <li><a target='blank' href="https://wa.me/5561983025609"><FaWhatsapp /></a></li>
              <li><a target='blank' href="mailto:laupreiss@gmail.com"><TfiEmail /></a></li>
              <li><a target='blank' href="https://www.instagram.com/lacerimoniall/"><PiInstagramLogoLight /></a></li>
            </ul>
          </div>

          <div className={styles.author}>
            <p>Feito por Gabriela Louzada.</p>
          </div>
        </div>

    </footer>
  )
}

export default Footer