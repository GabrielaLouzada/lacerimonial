import styles from '../../components/contact/Contact.module.css'
import { FaWhatsapp } from "react-icons/fa"
import { TfiEmail } from "react-icons/tfi"
import { PiInstagramLogoLight } from "react-icons/pi"
import { FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [name, setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [message, setMessage] = useState('')

  function handleSendEmail(e:FormEvent) {
    e.preventDefault()

    if(name === "" || email === "" || message === ""){
      alert('Preencha os campos! (Telefone é opcional)')
      return
    }
    const templateParams = {
      from_name: name,
      mensagem: message,
      email: email,
      phone: phone
    }

    emailjs.send('service_vylpr68','template_97abjr9',templateParams,'XRYi0XtFHZWfgPLby').then((res) => {
      console.log('enviado', res.status, res.text)
      setName('')
      setEmail('')
      setMessage('')
      setPhone('')
    }, (error) => {
      console.log('Erro', error)
    })
  }

  return (
    <section id="contact" className={styles.contactContainer}>

      <h3>Entre em contato conosco!</h3>
      <p>Nos conte sua história, solicite um orçamento, tire suas dúvidas.</p>

      <div className={styles.contactContent}>

        <div className={styles.contactLinks}>
          <ul>
            <li>
              <div>
                <FaWhatsapp />
                Telefone:
              </div>
              <a 
              target='blank'
              href="https://wa.me/5561983025609">
                (61) 98302-5609
              </a>
            </li>
            <li>
              <div>
                <TfiEmail />
                Email:
              </div>
              <a 
              target='blank'
              href="mailto:laupreiss@gmail.com">
                laupreiss@gmail.com
              </a>
            </li>
            <li>
              <div>
                <PiInstagramLogoLight />
                Instagram:
              </div>
              <a 
              target='blank'
              href="https://www.instagram.com/lacerimoniall/">
                @lacerimoniall
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.contactSendEmail}>
          <p>Ou nos envie um email e retornaremos assim que possível.</p>
          <form onSubmit={handleSendEmail}>
              <input 
                type="text" 
                name="name" 
                placeholder='Digite seu nome'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input 
                type="email" 
                name="email" 
                placeholder='Digite seu e-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input 
                type="number" 
                name="phone" 
                placeholder='Digite seu telefone com DDD'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <textarea  
                name="message" 
                placeholder='Digite sua mensagem'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              >
              </textarea>
            <button type='submit'>Enviar</button>
          </form>
        </div>
      
      </div>
    </section>
  )
}

export default Contact