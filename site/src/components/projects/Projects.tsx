import GabrielaEdgar from '../../assets/GabiEdgar.jpg'
import DayHenrick from '../../assets/DayHenrick.png'
import styles from '../../components/projects/Projects.module.css'
import { FaQuoteLeft } from "react-icons/fa"
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

const Projects = () => {

  const [projects] = useState([
    {
      id: 1,
      src: GabrielaEdgar,
      name: "GABI & EDGAR",
      comment: "...Sou muito grata a você por tudo que fez por nós, tanto a organização de antes, por vibrar comigo cada conquista e cada contrato fechado..Mas tenho que agradecer principalmente pelo seu trabalho no nosso grande dia! Eu não sei o que seria de nós sem você ali para conduzir tudo com tanto cuidado, tanta dedicação e amor...",
      instaComent: "@gabilorranee"
    },
    {
      id: 2,
      src: DayHenrick,
      name: "HENRICK & DAY",
      comment: "... Esse ano completamos 8 anos de casados e ainda lembramos de cada detalhe  de nosso dia especial. Sempre que vemos as nossas fotos e vídeos de nosso casamento comentamos do quanto foi tudo lindo. Tudo saiu simplesmente perfeito, muito melhor do que sonhamos e graças a você não tivemos nenhuma preocupação...",
      instaComent: "Day e Henrick"
    }
  ])


  return (
    <section id="projects" className={styles.projectsContainer}>

      <h3>Trabalhos recentes</h3>

      <div className={styles.projectsContent}>

        <Swiper
          pagination={{clickable:true}}
          slidesPerView={1}
          navigation 
        >
          {projects.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={styles.projects}>
                    <div className={styles.card}>
                      <img src={item.src} alt={item.name} />
                      <p>{item.name}</p>
                    </div>
                    <div className={styles.comment}>
                      <FaQuoteLeft />
                      <p>{item.comment}</p>
                      <span>{item.instaComent}</span>
                    </div>
                  </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

    </section>
  )
}

export default Projects