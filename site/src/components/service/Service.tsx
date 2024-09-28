import styles from '.././service/Service.module.css'
import iconAcessoria from '../../assets/icon-acessoria.png'
import iconCerimonial from '../../assets/icon-cerimonial.png'

const Service = () => {
  return (
    <section id="service" className={styles.serviceContainer}>

      <div className={styles.serviceContent}>
        <h3>Nossos Serviços</h3>

        <div className={styles.services}>

          <div className={styles.servicesCard}>
            <div className={styles.cardContent}>
              <div className={styles.servicesIcon} >
                <img src={iconAcessoria} alt="icone" />
              </div>
              <span>ACESSORIA</span>
              <p className={styles.saibaMais}>Saiba mais</p>
              <p className={styles.cardText}> A assessoria consiste na consultoria e acompanhamento das contratações que serão efetuadas, suporte ao casal no que diz respeito à fornecedores e toda a programação do grande dia!</p>
            </div>
          </div>

          <div className={styles.servicesCard}>
            <div className={styles.cardContent}>
              <div className={styles.servicesIcon}>
                <img  src={iconCerimonial} alt="icone" />
              </div>
              <span>CERIMONIAL</span>
              <p className={styles.saibaMais}>Saiba mais</p>
              <p className={styles.cardText}>O cerimonial trata-se do conjunto de atividades que serão desempenhadas efetivamente no dia do casamento pela equipe contratada.</p>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Service