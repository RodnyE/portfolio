import { useState } from 'react'

import { FaWhatsapp, FaTelegram, FaEnvelope } from 'react-icons/fa6'
import { SendButton } from '@/components'
import { H1, LineText } from '../components'

export function ContactSection() {
  return (
    <div id='contact' className='py-5 flex flex-col'>
      <H1> Contáctame </H1>
      <LineText>
        Aquí le dejo las formas de contactarme, si tiene alguna idea de algún proyecto o me necesita para algo, estoy aquí para usted!
      </LineText>
      <LineText>
        <ul className='w-full max-w-sm flex items-stretch self-center flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3'>
          <li>
            <SendButton href='https://wa.me/+5359768251' icon={<FaWhatsapp className='m-2 text-3xl' />}>WhatsApp</SendButton>
          </li>
          <li>
            <SendButton href='https://t.me/rodny_01' icon={<FaTelegram className='m-2 text-3xl' />}>Telegram</SendButton>
          </li>
          <li>
            <SendButton href='mailto:rrodnyestrada1@gmail.com' icon={<FaEnvelope className='m-2 text-3xl' />}>Email</SendButton>
          </li>
        </ul>
      </LineText> 
    </div>
  )
}