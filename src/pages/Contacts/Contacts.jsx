import React from 'react'
import send from '../../assets/send.svg'
import phone from '../../assets/phone copy.svg'
import mail from '../../assets/mail.svg'
import clock from '../../assets/clock.svg'
import { Button } from '@mui/material'

const Contacts = () => {
  return (
    <div>
      <section className='max-w-[100%] mt-[30px]'>
        <div className="container">
        <div className='md:ml-[5%] ml-[1%]'>
            <h1 className="text-[14px] font-[400] text-[#FFF] dark:text-[#333333]">
              Главная &gt; Контакты
            </h1>
            <h1 className="text-[#0D4373] text-[24px] font-[600] py-[20px]">
              Контакты
            </h1>
            <div className='flex xl:flex-row flex-col justify-between'>
            <div>
              <h1 className='text-[18px] font-[700] text-[#FFF] dark:text-[#333333]'>Пожалуйста, заполните форму ниже</h1>
              <form className='py-[20px] xl:py-0'>
                <label className='text-[16px] font-[400] text-[#868686]' htmlFor="name">Ваше имя (обязательно)</label><br />
                <input className='h-[45px] text-[#000] rounded bg-[#F3F3F3] pr-[500px]' type="text" /><br /><br />

                <label className='text-[16px] font-[400] text-[#868686]' htmlFor="name">E-mail (обязательно)</label><br />
                <input className='h-[45px] text-[#000] rounded bg-[#F3F3F3] pr-[500px]' type="email" placeholder='user@example.com' /><br /><br />
                
                <label className='text-[16px] font-[400] text-[#868686]' htmlFor="name">Сообщение</label><br />
                <input className='h-[205px] text-[#000] rounded bg-[#F3F3F3] pr-[500px]' type="text" /><br /><br />
                <Button sx={{backgroundColor:"#D74C20"}} variant='contained'>Отправить</Button>
              </form>
            </div>
            <div className='xl:w-[40%]'>
            <h1 className='text-[18px] font-[700] text-[#FFF] dark:text-[#333333]'>Before Contacting Us</h1>
            <p className='text-[16px] font-[400] text-[#868686]'>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Non equidem invideo, miror magis posuere velit aliquet.</p>
             <div className='pt-[30px]'>
              <h1 className='text-[18px] font-[700] text-[#FFF] dark:text-[#333333] pb-[15px]'>Контакты</h1>
              <p  className='text-[16px] font-[400] text-[#868686] flex gap-1'> <img src={send} alt="" /> Адрес</p>
              <p  className='text-[16px] font-[400] text-[#868686] flex gap-1 py-[30px]'> <img src={phone} alt="" /> Телефон</p>
              <p  className='text-[16px] font-[400] text-[#868686] flex gap-1'> <img src={mail} alt="" /> e-mail</p>
              <p  className='text-[16px] font-[400] text-[#868686] flex gap-1 py-[30px]'> <img src={clock} alt="" /> Время работы</p>
             </div>
            </div>
          </div>
          </div>

         
        </div>
      </section>

      <section className='max-w-[100%] picture3 lg:mt-[100px]'>
        <div className="container">
          <div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacts